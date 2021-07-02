import React, {Component} from 'react';
import InputComponent from '../constant/InputComponent'

class ChangeInfo extends Component {
    
    state = {
        disabled:false,
        email:this.props.userInfo.email,
        username:this.props.userInfo.username,
        city:this.props.userInfo.city,
        town:this.props.userInfo.town,
        location:this.props.userInfo.location,
        description:this.props.userInfo.description,
        type:this.props.userInfo.type,
        password:this.props.userInfo.password,
        id:this.props.userInfo._id,
    }

    onChangeHandler =  (event) => {
        this.setState({[event.target.name]: event.target.value});
        console.log(event.target.name, event.target.value)
    }

    onSubmitHandler = () => {
        let userType = ''
        console.log(this.state, this.props)
        // if( Object.toJSON(this.state) != Object.toJSON(this.pros))\
            if(typeof this.state.town==='undefined')
                userType = 'company'
                else
                userType = 'user'
            
            this.props.changeInfo({...this.state}, this.props,userType)
    }

    render() { 
        const typeOfuser = this.state.type

        console.log(typeof this.state.town=='undefined')
        return ( 
            <div className='container'>
            <h2 className='text-uppercase d-block text-center my-4'>Edit Informations</h2>
            <div className='row '>
                <div className='col-sm-5 col-md-12 d-flex justify-content-center'>
                    <img className='d-block' style={{borderRadius:'50%', maxWidth:'70px', maxHeight:'70px'}} src={this.props.userInfo.logo ? this.props.userInfo.logo : 'img/profile.png'} alt='image'/>                         
                </div>
                <div className='col-sm-5 col-md-12 d-flex justify-content-center'>
                    <input type="file" accept="image/*" name='logo' onChange={this.onChangeHandler} className='d-block'/>
                </div>
                <form onSubmit = {e => {e.preventDefault(); this.onSubmitHandler()}}  className='d-block col-5 mx-auto shadow p-3 mb-5 mt-1 rounded'>
                    <InputComponent title = 'Username' 
                                     name = 'username'
                                     type = 'text'     
                                     disabled={this.state.disabled}
                                     value = {this.state.username}
                                     required={true}
                                     onChangeHandler = {this.onChangeHandler}                      
                                    />
                    <div style={ !this.props.userInfo.hasOwnProperty('news')?{display:'block'}:{display:'none'}}>
                     <InputComponent title = 'City'
                                     name = 'city' 
                                     type = 'text'
                                     disabled={this.state.disabled}
                                     value = {this.state.city}
                                     required={false}
                                     onChangeHandler = {this.onChangeHandler}              
                                    />
                    </div>
                    
                    <div style={ !this.props.userInfo.hasOwnProperty('news')?{display:'block'}:{display:'none'}}>
                     <InputComponent title = 'Town'
                                     name = 'town'
                                     type = 'text'
                                     disabled={this.state.disabled}
                                     value = {this.state.town}
                                     required={false}
                                     onChangeHandler = {this.onChangeHandler}              
                                     style={ this.props.town===''?{display:'block'}:{display:'none'}}
                                    />
                        </div>
                        {/* <div style={typeof this.state.town ==='undefined'?{display:'block'}:{display:'none'}}> */}
                        <div >
                            <InputComponent title = 'Location'
                                            name = 'location' 
                                            type = 'text'
                                            disabled={this.state.disabled}
                                            value = {this.state.location}
                                            required={false}
                                            onChangeHandler = {this.onChangeHandler}              
                                            style={typeof this.state.town==='undefined'?{display:'block'}:{display:'none'}}
                                            />
                        </div>
                        <div style={typeof this.state.town ==='undefined'?{display:'block'}:{display:'none'}}>

                     <InputComponent title = 'Description'
                                     name = 'description' 
                                     type = 'text'
                                     disabled={this.state.disabled}
                                     value = {this.state.description}
                                     required={false}
                                     onChangeHandler = {this.onChangeHandler}              
                                     style={typeof this.state.town==='undefined'?{display:'block'}:{display:'none'}}
                                    />
                                    </div>
                    <label className='block text-uppercase font-weight-bold text-sm mb-2'>
                        Type
                    </label>
                    <br/>
                     <select name="type" id="type" className='mb-3' style={{width:'100%'}} value={this.state.type}   onChange={this.onChangeHandler} >
                        <option value="Pharmaceutical">Pharmaceutical</option>
                        <option value="NutritionalProducts">Nutritional Products</option>
                    </select>
                    <button  type='submit' className='bt btn-dark px-4 py-2 rounded-lg col-sm-5 col-md-12 d-block'> Save Changes</button> 
                </form>
            </div>
        </div>
        );
    }
}
 
export default ChangeInfo;
import React, {Component} from 'react';
import InputComponent from '../constant/InputComponent'

class ChangeInfo extends Component {
    
    state = {
        disabled:false,
        email:this.props.userInfo.email,
        username:this.props.userInfo.username,
        city:this.props.userInfo.city,
        town:this.props.userInfo.town,
        type:this.props.userInfo.type,
        password:this.props.userInfo.password,
        id:this.props.userInfo._id
    }

    onChangeHandler =  (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    onSubmitHandler = () => {
        if( Object.toJSON(this.state) != Object.toJSON(this.pros))
            this.props.changeInfo({...this.state}, this.props)
    }

    render() { 
        return ( 
            <div className='container'>
            <h2 className='text-uppercase d-block text-center my-4'>Edit Informations</h2>
            <div className='row '>
                <div className='col-sm-5 col-md-12 d-flex justify-content-center'>
                    <img style={{borderRadius:'50%', maxWidth:'70px', maxHeight:'70px'}} src={this.props.userInfo.logo ? this.props.userInfo.logo : 'img/profile.png'} alt='image'/>                         
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
                     <InputComponent title = 'Email'
                                      name = 'email' 
                                      type = 'text'
                                      disabled={this.state.disabled}
                                      value = {this.state.email}
                                      required={true}
                                      onChangeHandler = {this.onChangeHandler}              

                                    />
                     <InputComponent title = 'City'
                                     name = 'city'
                                     type = 'text'
                                     disabled={this.state.disabled}
                                     value = {this.state.city}
                                     required={false}
                                     onChangeHandler = {this.onChangeHandler}              

                                    />
                     <InputComponent title = 'Town'
                                     name = 'Town'
                                     type = 'text'
                                     disabled={this.state.disabled}
                                     value = {this.state.city}
                                     required={false}
                                     onChangeHandler = {this.onChangeHandler}              

                                    />
                     <InputComponent title = 'Type'
                                     name = 'type'
                                     type = 'text'
                                     disabled={this.state.disabled}
                                     value = {this.state.type}
                                     required={false}
                                     onChangeHandler = {this.onChangeHandler}              
                                    />
                    <button  type='submit' className='bt btn-dark px-4 py-2 rounded-lg col-sm-5 col-md-12 d-block'> Save Changes</button> 
                </form>
            </div>
        </div>
        );
    }
}
 
export default ChangeInfo;
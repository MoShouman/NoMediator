import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import InputComponent from '../constant/InputComponent'
class Profile extends Component {
    
    
    state = {
        disabled:true,
    }

    render() { 
        console.log(this.state, this.props.userInfo, Array.isArray(this.props.userInfo.news))

        let displayComapny = {}
        let displayUser = {}
        if(this.props.userInfo.type === 'user'){
            displayComapny={display:'none'} 
            displayUser={display:'block'} 
        } else {
            displayComapny={display:'block'}
            displayUser={display:'none'}
        }
        return ( 
            <div className='container'>
            <h2 className='text-uppercase d-block text-center my-4'>Profile</h2>
            <div className='row '>
                <div className='col-sm-5 col-md-12 d-flex justify-content-center'>
                    <img style={{borderRadius:'50%', maxWidth:'70px', maxHeight:'70px'}} src={this.props.userInfo.logo ? this.props.userInfo.logo : 'img/profile.png'} alt='user image'/>                         
                </div>
                <form onSubmit = {e => {e.preventDefault(); this.onSubmitHandler()}}  className='d-block col-5 mx-auto shadow p-3 mb-5 mt-1 rounded'>
                    <InputComponent title = 'Username' 
                                     name = 'username'
                                     type = 'text'     
                                     disabled={this.state.disabled}
                                     value = {this.props.userInfo.username}
                                     onChangeHandler = {this.onChangeHandler}              
                                     style={displayUser}        
                                    />
                      <div style={ !this.props.userInfo.hasOwnProperty('news')?{display:'block'}:{display:'none'}}>
                     <InputComponent title = 'City'
                                     name = 'city' 
                                     type = 'text'
                                     disabled={this.state.disabled}
                                     value = {this.props.userInfo.city}
                                     required={false}
                                     onChangeHandler = {this.onChangeHandler}              
                                    />
                    </div>
                    
                    <div style={ !this.props.userInfo.hasOwnProperty('news')?{display:'block'}:{display:'none'}}>
                     <InputComponent title = 'Town'
                                     name = 'town'
                                     type = 'text'
                                     disabled={this.state.disabled}
                                     value = {this.props.userInfo.town}
                                     required={false}
                                     onChangeHandler = {this.onChangeHandler}              
                                    />
                        </div>
                        {/* <div style={typeof this.props.userInfo.town ==='undefined'?{display:'block'}:{display:'none'}}> */}
                        <div >

                            <InputComponent title = 'Location'
                                            name = 'location' 
                                            type = 'text'
                                            disabled={this.state.disabled}
                                            value = {this.props.userInfo.location}
                                            required={false}
                                            onChangeHandler = {this.onChangeHandler}              
                                            style={typeof this.state.town==='undefined'?{display:'block'}:{display:'none'}}
                                            />
                        </div>
                        <div style={typeof this.props.userInfo.town ==='undefined'?{display:'block'}:{display:'none'}}>

                     <InputComponent title = 'Description'
                                     name = 'description' 
                                     type = 'text'
                                     disabled={this.state.disabled}
                                     value = {this.props.userInfo.description}
                                     required={false}
                                     onChangeHandler = {this.onChangeHandler}              
                                     style={typeof this.state.town==='undefined'?{display:'block'}:{display:'none'}}
                                    />
                                    </div>
                                    <InputComponent title = 'Type'
                                     name = 'type' 
                                     type = 'text'
                                     disabled={this.state.disabled}
                                     value = {this.props.userInfo.type}
                                     required={false}
                                     onChangeHandler = {this.onChangeHandler}              
                                    />

                    <Link to='/changeInfo' className='bt btn-dark px-4 py-2 rounded-lg col-sm-5 col-md-12 d-block text-center text-decoration-none'>Change Informations</Link>
                </form>
            </div>
        </div>
        );
    }
}
 
export default Profile;
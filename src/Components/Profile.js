import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import InputComponent from '../constant/InputComponent'
class Profile extends Component {
    
    state = {
        disabled:true,
    }

    render() { 
        return ( 
            <div className='container'>
            <h2 className='text-uppercase d-block text-center my-4'>Profile</h2>
            <div className='row '>
                <div className='col-sm-5 col-md-12 d-flex justify-content-center'>
                    <img style={{borderRadius:'50%', maxWidth:'70px', maxHeight:'70px'}} src={this.props.userInfo.logo} alt='user image'/>                         
                </div>
                <form onSubmit = {e => {e.preventDefault(); this.onSubmitHandler()}}  className='d-block col-5 mx-auto shadow p-3 mb-5 mt-1 rounded'>
                    <InputComponent title = 'Username' 
                                     name = 'username'
                                     type = 'text'     
                                     disabled={this.state.disabled}
                                     value = {this.props.userInfo.username}
                                     onChangeHandler = {this.onChangeHandler}                      
                                    />
                     <InputComponent title = 'Email'
                                      name = 'email' 
                                      type = 'text'
                                      disabled={this.state.disabled}
                                      value = {this.props.userInfo.email}
                                      onChangeHandler = {this.onChangeHandler}              

                                    />
                     <InputComponent title = 'City'
                                     name = 'city'
                                     type = 'text'
                                     disabled={this.state.disabled}
                                     value = {this.props.userInfo.city}
                                     onChangeHandler = {this.onChangeHandler}              

                                    />
                     <InputComponent title = 'Town'
                                     name = 'Town'
                                     type = 'text'
                                     disabled={this.state.disabled}
                                     value = {this.props.userInfo.city}
                                     onChangeHandler = {this.onChangeHandler}              

                                    />
                     <InputComponent title = 'Type'
                                     name = 'type'
                                     type = 'text'
                                     disabled={this.state.disabled}
                                     value = {this.props.userInfo.type}
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
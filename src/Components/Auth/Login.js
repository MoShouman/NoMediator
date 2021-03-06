import React, { Component } from 'react'
import InputComponent from '../../constant/InputComponent'
import {Link} from 'react-router-dom'

export default class Login extends Component {
    state = {
        email:'',
        password:'',
        // num:''
}

onChangeHandler =  (event) => {
    console.log([event.target.name], event.target.value)
    this.setState({[event.target.name]: event.target.value});
}

onSubmitHandler = () => {
    this.props.loginHandler(this.state, this.props)
}

render() {
    return (
        <div className='container'>
            <h2 className='text-uppercase d-block text-center my-4'>Login</h2>
            <div className='row '>
                <form onSubmit = {e => {e.preventDefault(); this.onSubmitHandler()}}  className='d-block col-5 mx-auto shadow p-3 mb-5 mt-1 rounded'>
                     <InputComponent title = 'Email'
                                     name = 'email' 
                                     value = {this.state.email}
                                     placeholder = 'no-mideator@exmaple.com'          
                                     type='email'       
                                     disabled={false}
                                     required={true}
                                     onChangeHandler = {this.onChangeHandler}              
                                    />
                     <InputComponent title = 'Password'
                                     name = 'password'
                                     value = {this.state.password}
                                     placeholder = '********'     
                                     type='password'       
                                     disabled={false}
                                     required={true}
                                     onChangeHandler = {this.onChangeHandler}              
                                    />
                        {/* <label className='block text-uppercase font-weight-bold text-sm mb-2'>
                         User
                         </label>
                        <input type="radio" name="num" value='1' onChange = {this.onChangeHandler} />
                        <br></br>
                        <label className='block text-uppercase font-weight-bold text-sm mb-2'>
                         Company
                         </label>
                        <input type="radio" name="num" value='2' onChange = {this.onChangeHandler} /> */}
 
                    <button type="submit" className="bt btn-dark d-block px-4 py-2 rounded-lg col-sm-5 col-md-12">SignIn</button>
                    <div className='mt-2 d-flex justify-content-around'>
                        <Link className='text-dark text-decoration-none' to='/register' >
                            Create new account
                        </Link>
                    </div>
                  
                </form>
            </div>

        </div>
    )
}
}

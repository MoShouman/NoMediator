import React, { Component } from 'react'
import InputComponent from '../../constant/InputComponent'
import {Link} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

export default class AddProduct extends Component {
    state = {
        news:''
    }
onChangeHandler =  (event) => {
    this.setState({[event.target.name]: event.target.value});
    console.log([event.target.name],event.target.value,this.props.userInfo)
}

onSubmitHandler = (data) => {
    let status = 0

    fetch(`https://your-products-manager.herokuapp.com/api/company/addnews/${this.props.userInfo._id}`, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then(response => {status = response.status; return response.json()})
        .then(data => {
          if(status === 200){
            this.setState({currentUserInfo:data,isAuthenticated:true});
            toast.success('News has been added successfully', {
              position: "top-center",
              autoClose: 4000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              });
              this.props.history.replace('/');
            console.log(data)
          }
          else{
            console.log(data.message)
            toast.error(data.message, {
            position: "top-center",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
          }
        }) 
}

render() {
    return (
        <div className='container'>
            <h2 className='text-uppercase d-block text-center my-4'>Add News</h2>
            <div className='row '>
                <form onSubmit = {e => {e.preventDefault(); this.onSubmitHandler(this.state)}}  className='d-block col-5 mx-auto shadow p-3 mb-5 mt-1 rounded'>
                     <InputComponent title = 'News'
                                     name = 'news' 
                                     value = {this.state.news}
                                     placeholder = 'xxxxxxxxxx'          
                                     type='text'       
                                     disabled={false}
                                     required={true}
                                     onChangeHandler = {this.onChangeHandler}              
                                    />
                    <button type="submit" className="bt btn-dark d-block px-4 py-2 rounded-lg col-sm-5 col-md-12">Add News</button>
                </form>
            </div>

        </div>
    )
}
}

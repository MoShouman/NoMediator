import React, { Component } from 'react'
import InputComponent from '../../constant/InputComponent'
import {Link} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class AddProduct extends Component {
    state = {
        productname:'',
        price:'',
        type:'',
        quantity:'',
        bonuspercentage:'',
        image:''

}
onChangeHandler =  (event) => {
    this.setState({[event.target.name]: event.target.value});
    console.log([event.target.name],event.target.value)

}

onSubmitHandler = (data) => {
    let status = 0

    fetch(`https://your-products-manager.herokuapp.com/api/company/addproduct/${this.props.userInfo._id}`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then(response => {status = response.status; return response.json()})
        .then(data => {
          if(status === 200){
            this.setState({currentUserInfo:data,isAuthenticated:true});
            toast.success('Product has been added successfully', {
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
console.log(this.props.userInfo)

    return (
        <div className='container'>
            <h2 className='text-uppercase d-block text-center my-4'>Add Product</h2>
            <div className='row '>
                <form onSubmit = {e => {e.preventDefault(); this.onSubmitHandler(this.state)}}  className='d-block col-5 mx-auto shadow p-3 mb-5 mt-1 rounded'>
                     <InputComponent title = 'Product Name'
                                     name = 'productname' 
                                     value = {this.state.productname}
                                     placeholder = 'product name'          
                                     type='text'       
                                     disabled={false}
                                     required={true}
                                     onChangeHandler = {this.onChangeHandler}              
                                    />
                     <InputComponent title = 'Price'
                                     name = 'price'
                                     value = {this.state.price}
                                     placeholder = '$$$'     
                                     type='text'       
                                     disabled={false}
                                     required={true}
                                     onChangeHandler = {this.onChangeHandler}              
                                    />
                     <InputComponent title = 'Type'
                                     name = 'type'
                                     value = {this.state.type}
                                     placeholder = 'drink,.. '     
                                     type='text'       
                                     disabled={false}
                                     required={true}
                                     onChangeHandler = {this.onChangeHandler}              
                                    />
                     <InputComponent title = 'Quantity'
                                     name = 'quantity'
                                     value = {this.state.quantity}
                                     placeholder = '150'     
                                     type='text'       
                                     disabled={false}
                                     required={true}
                                     onChangeHandler = {this.onChangeHandler}              
                                    />
                     <InputComponent title = 'Bonus Percentage'
                                     name = 'bonuspercentage'
                                     value = {this.state.bonuspercentage}
                                     placeholder = '150'     
                                     type='text'       
                                     disabled={false}
                                     required={true}
                                     onChangeHandler = {this.onChangeHandler}              
                                    />
                     <InputComponent title = 'Image'
                                     name = 'image'
                                     value = {this.state.image}
                                     placeholder = '$$$'     
                                     type='text'       
                                     disabled={false}
                                     required={false}
                                     onChangeHandler = {this.onChangeHandler}              
                                    />
                    <button type="submit" className="bt btn-dark d-block px-4 py-2 rounded-lg col-sm-5 col-md-12">Add product</button>
                </form>
            </div>

        </div>
    )
}
}

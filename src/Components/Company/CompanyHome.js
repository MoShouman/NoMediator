import userEvent from '@testing-library/user-event';
import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import { products } from '../../constant/fakedata';
import { ToastContainer, toast } from 'react-toastify';
import {Button} from 'react-bootstrap'
class CompanyHome extends Component {
    
    deleteItem = (productID) => {
        let status = 0
        fetch(`https://your-products-manager.herokuapp.com/api/order/delete/${productID}`, {
          method: 'DELETE',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },    
        }).then(response => {status = response.status; return response.json()})
          .then(data => {
            if(status === 200){
                console.log('successs')
                window.location.reload();
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
    
    EditItem = (productID,data) => {
        let status = 0
        fetch(`https://your-products-manager.herokuapp.com/api/order/edit/${productID}`, {
          method: 'PUT',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },    
          body: JSON.stringify({
            'accepted':true,
            
          })
        }).then(response => {status = response.status; return response.json()})
          .then(data => {
            if(status === 200){
              console.log(data)
              window.location.reload();

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
        console.log(this.props.companyOrders)
        return ( 
            <div className='fluid-container'>
            <h2 className='text-uppercase d-block text-center my-4'>Home</h2>
            <div className= 'row justify-content-center'>
                <div className='col-md-9 col-sm-12 shadow ml-3 p-3 mb-5 mt-1 rounded'>
                    <div id="accordion" style={{minWidth:'100%'}}>
                        {this.props.companyOrders.map((order,index) => (

                       
                        <div class="card" >
                            <div class="card-header" id={"headingOne"+index}>
                            <h5 class="mb-0 float-left" style={{width:'90%'}}>
                                <button class="btn btn-link text-dark text  text-decoration-none d-flex justify-content-left" style={{width:'100%'}}  data-toggle="collapse" data-target={"#collapseOne"+index} aria-expanded="true" aria-controls={"collapseOne"+index}>    
                                    <ul className='nav' style={{width:'100%'}}>
                                        <li className='d-flex justifiy-content-space-start' style={{width:'25%'}}>
                                           <h5>
                                                { order.username.toUpperCase()  }   
                                            </h5>
                                        </li>
                                        <li className='d-flex justifiy-content-start' style={{width:'25%'}}>
                                            <h5>TOTAL PRICE: 
                                                {order.totalprice} L.E
                                            </h5>
                                        </li>
                                        <li className='d-flex justifiy-content-start' style={{width:'25%'}}>
                                            <h5>STATUS: 
                                                {' ' +order.state}
                                            </h5>
                                        </li>
                                        <li className='d-flex justifiy-content-start' style={{width:'25%'}}>
                                            <h5>LOCATION: 
                                                {' ' +order.location}
                                            </h5>
                                        </li>
                                    </ul>
                                </button>
                                <div className='d-block'>
                                    <Button variant="success" style={{width:'fit-content'}} className='mr-4' onClick={()=>{this.EditItem(order._id)}}>                                          
                                        <i className="fa fa-check-circle "></i>
                                    </Button>
                                    <button type="button" class="btn btn-danger" style={{width:'fit-content'}} onClick={()=>{this.deleteItem(order._id)}}>                              
                                            <i class="fas fa-times-circle danger"></i>
                                    </button>

                                </div>
                            </h5>
                            </div>

                            <div id={"collapseOne"+index} class="collapse show" aria-labelledby={"headingOne"+index} data-parent="#accordion">
                                <div class="card-body">
                                    <div className='cart-upper p-2 row text-center d-flex'>
                                        <div className='col'>
                                            <h4>Product</h4>
                                        </div>
                                        <div className='col'>
                                            <h4>Name of Product</h4>
                                        </div> 
                                        <div className='col'>
                                            <h4>Price</h4>
                                        </div>
                                        <div className='col'>
                                            <h4>Quantity</h4>
                                        </div>
                                        <div className='col'>
                                            <h4>Info</h4>
                                        </div>
                                       
                                    </div>
                                    {
                                        order.products.map(product => (
                                            <div  className=" row d-flex  font-weight-bolder text-center cart-item my-2">
                                            <div className='col'>
                                                <img src={product.image} className='mx-auto' alt="img"/>
                                            </div>
                                            <div className='col'>
                                                <p className='c-dark '>{product.productname}</p>
                                            </div>
                                            <div className='col'>                
                                                <p className='c-dark'>{product.price} L.E</p>
                                            </div>
                                            <div className='col'>          
                                                <p className='c-dark'>{product.numberofitems}</p>
                                            </div>
                                            <div style={{width:'220px'}} className='mr-4'>
                                                <textarea style={{width:'100%'}} value={product.additionalinfo} disabled={true === 'not accepted'?false:true}/>
                                            </div>    
                                         
                                        </div>  
                                        ))
                                    }
                                    
                                </div>
                            </div>
                        </div>     ))}     
                
                
                    </div>
                </div>
                <div className='col-md-2 col-sm-12 shadow p-3 ml-2 mb-5 mt-1 rounded' style={{maxHeight:'210px'}}>
                        <Link className='mt-2 text-decoration-none' style={{color:'white'}}  to='/addproduct' >
                    <button type="submit" className="bt btn-dark d-block px-4 py-2 rounded-lg col-sm-5 col-md-12">
                        <i class="fab fa-product-hunt mr-2"></i>
                            Add Product
                        </button>
                        </Link>
                    <br></br>
                        <Link className='mt-2 text-decoration-none' style={{color:'white',minWidth:'100%'}}  to='/addnews' >
                    <button type="submit" className="bt btn-dark d-block px-4 py-2 rounded-lg col-sm-5 col-md-12">
                        <i class="fas fa-newspaper mr-2"></i>
                            Add offer
                        </button>
                        </Link>
                    <br></br>
                        <Link className='mt-2 text-decoration-none' style={{color:'white',minWidth:'100%'}}  to='/ourcustomers' >
                    <button type="submit" className="bt btn-dark d-block px-4 py-2 rounded-lg col-sm-5 col-md-12">
                        <i class="fas fa-users mr-2"></i>
                            Our Customers
                    </button>
                        </Link>
                </div>
            </div>
        </div>
        );
    }
}
 
export default CompanyHome;
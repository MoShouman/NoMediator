import {data} from 'jquery';
import React, {Component} from 'react';
import {toast} from 'react-toastify'
import {products} from '../../constant/fakedata'
class Orders extends Component {
    state = {
        totalPrice:1000,
        orders:this.props.orders,
        usedbonues:false
    }

    onChangeHandler =  (event, productid) => {
        this.setState({[event.target.name]: event.target.value});
    }
    deleteProductHandler =  (productid,companyid) => {
            const inputField = document.getElementById(productid+'input')
            const icon = document.getElementById(productid+'i')
            let status = 0
            fetch(`https://your-products-manager.herokuapp.com/api/order/deleteproduct/${companyid}`, {
              method: 'PUT',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({productid})
            
            }).then(response => {status = response.status; return response.json()})
              .then(data => {
                if(status === 200){
                  toast.success('your order has been successfully changed', {
                    position: "top-center",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
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
    deleteOrderHandler =  (productid,companyid) => {
            const inputField = document.getElementById(productid+'input')
            const icon = document.getElementById(productid+'i')
            let status = 0
            fetch(`https://your-products-manager.herokuapp.com/api/order/delete/${companyid}`, {
              method: 'DELETE',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({productid})
            
            }).then(response => {status = response.status; return response.json()})
              .then(data => {
                if(status === 200){
                  toast.success('your order has been successfully changed', {
                    position: "top-center",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
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
    changeQuantityHandler = (productid,companyid) => {
    const inputField = document.getElementById(productid+'input')
    const icon = document.getElementById(productid+'i')
    const numberofitems = inputField.value
    console.log(numberofitems, companyid,JSON.stringify({numberofitems,productid}))
    let status = 0
    fetch(`https://your-products-manager.herokuapp.com/api/order/edit/${companyid}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({numberofitems,productid})
    
    }).then(response => {status = response.status; return response.json()})
      .then(data => {
        if(status === 200){
          toast.success('your order has been successfully changed', {
            position: "top-center",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
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
        console.log(this.props)
        return (  
            <div className='container col my-1'>
                <h2 className='text-uppercase d-block text-center my-4'>Orders</h2>
                <div className='col-md-12 shadow  p-3 mb-5 mt-1 rounded'>

                <div id="accordion">
                {this.props.orders.length !== 0 ?
                    this.state.orders.map((item, index) => (
                        <div class="card">
                        <div class="card-header d-flex align-items-center" id={"headingOne"+index}>
                            <h5 class="mb-0 float-left" style={{width:'90%'}}   >
                                <button class="btn btn-link text-dark text  text-decoration-none d-flex justify-content-left" style={{width:'90%'}} data-toggle="collapse" data-target={"#collapseOne"+index} aria-expanded="true" aria-controls={"collapseOne" + index}>
                                    <ul className='nav' style={{width:'100%'}}>
                                        <li className='d-flex justifiy-content-start' style={{width:'33.3%'}}>
                                            <h5 className='mr-5 text-uppercase'>
                                                {item.companyname }
                                            </h5>
                                        </li>
                                        <li className='d-flex justifiy-content-start' style={{width:'33.3%'}}>
                                            <h5 className='mr-5 text-uppercase'>
                                                {" total price:       $"+ item.totalprice}
                                            </h5>
                                        </li>
                                        <li className='d-flex justifiy-content-start' style={{width:'33.3%'}}>
                                            <h5 className='text-uppercase'>
                                                {"Status: "+ item.state}
                                            </h5>
                                        </li>
                                        
                                    </ul>
                                </button>
                            </h5>
                            <h5 className='justify-content-center d-flex' style={{width:'10%'}}>
                                <i className="fa fa-trash danger text-xl-left"  style={item.state === 'not accepted'? {display:'block'} : {display:'none'} } id={item._id+'i'} onClick={() => this.deleteOrderHandler(item,item._id)}></i>
                            </h5>
                        </div>

                        <div id={"collapseOne"+index} class="collapse show" aria-labelledby={"headingOne"+index} data-parent="#accordion">
                            <div class="card-body">
                            <div className='cart-upper p-2 row text-center d-flex mx-auto'>
                                <div className='col'>
                                    <h3>Product</h3>
                                </div>
                                <div className='col'>
                                    <h3>Name of Product</h3>
                                </div> 
                                <div className='col'>
                                    <h3>Quantity</h3>
                                </div>
                                <div className='col'>
                                    <h3>Price</h3>
                                </div>
                                <div className='col'>
                                    <h3>Informations</h3>
                                </div>
                                <div className='col'>
                                    <h3>Remove</h3>
                                </div>
                               
                            </div>
                            {item.products.map(product => (
                                 <div className="p-2 row d-flex mx-auto font-weight-bolder text-center cart-item my-2">
                                 <div className='col  my-auto'>
                                     <img src={product.image} className='mx-auto' alt="product"/>
                                 </div>
                                 <div className='col  my-auto'>
                                     <p className='c-dark '>{product.productname}</p>
                                 </div>
                                 <div className='col my-auto'>
                                     <input type='text' style={{width:'170px'}}  disabled={item.state === 'not accepted'?false:true} id={product.productid+'input'} className='num-style mx-1 ' placeholder={product.numberofitems} name='numberofitems' onChange={e => {e.preventDefault(); this.onChangeHandler(e, product.productid)}}/>
                                     <i className="fa fa-check-circle d-inline" style={item.state === 'not accepted'? {display:'block'} : {display:'none'} } id={product.productid+'i'} onClick={() => this.changeQuantityHandler(product.productid,item._id)}></i>
                                 </div>
                                 <div className='col my-auto'>
                                     <p className='c-dark'>{`$ ${product.price}`}</p>
                                 </div>
                                 <div className='col my-auto'>
                                    <textarea style={{width:'250px'}} value={product.additionalinfo} disabled/>
                                 </div>    
                                 <div className='col my-auto'>
                                     <i className="fa fa-trash danger" onClick={() => this.deleteProductHandler(product.productid,item._id)}></i>
                                 </div>
                             </div>    
                            ))}                            
                  
                            </div>
                        </div>
                    </div>
                    ))
                    :
                    <h1  className='text-uppercase'>There is no orders </h1>
                  }
                    
                </div>
                </div>
            </div>
        );
    }
}

export default Orders;
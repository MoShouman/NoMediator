import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import im from '../../img/cat.jpg'
import constants from '../../Components/Company/Constants'
import Constants from '../../Components/Company/Constants';
class Product extends Component {
 
    render() { 
        let link = `/products/${this.props.product.id}`
        const {image, inCart, id, productname, price} = this.props.product
        return ( 
            <div key={id} className='col-sm-12 col-md-4 col-lg-3 my-2'>
               
                
         
                <div className='card product'>
                   
                        <img src={image} className='card-img-top' alt='product' style={{height:'248.850px'}}/>
                  
                        <button className='px-2 py-1' disabled = {inCart} onClick={()=>{
                      this.props.show()
                      Constants.productid = this.props.product._id
                   
                    }}>
                        {(!inCart)? <i className='fas fa-cart-plus'></i> : <i>incart</i>}
                    </button>
                </div>
               
                <div className='card-footer d-flex justify-content-between px-2'>
                    <p className='align-self-center mb-0'>{productname}</p>
                    <h5 className='mr-1 font-italic'>
                        <span>L.E</span>
                        {price}
                    </h5>
                </div>
            </div>
         );
    }
}
 
export default Product;
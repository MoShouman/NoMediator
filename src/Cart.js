import React, {Component} from 'react';
import {toast} from 'react-toastify'
class Cart extends Component {
    state = {
        totalPrice:1000,
        orders:this.props.orders
    }

  
    render() { 
       return<h1>this si cart</h1>
    }
}

export default Cart;
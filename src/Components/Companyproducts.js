import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
// import '../styles/Comprofile.css'
import {Data, mainRange, productType} from '../constant/data'
import ProductsGrid from '../constant/Products/ProductsGrid'
import Pagination from './Pagintaion'
class Companyproducts extends Component{

    state = {
        products: Data,
        filteredProducts:Data,
        productDetails: {},
        cart: [],
        totalPrice: 0,
        modalInfo:{},
        modalVisibility:false,
        mainRange: mainRange,
        productType: productType,
        currentUserInfo:{
          email:'',
          isAdmin:false
        },
        currentUserId:-1,
        isAuthenticated:false,
        currentUserState:0,
        priceRange:[0,0],
        userhistory:[]
       }
     

    render(){
        return<div class="rounded">
            <h2 className='text-uppercase d-block text-center my-4'>Our Products</h2>
             <ProductsGrid  products = {Data} 
                            addToCart = {this.addToCart} 
                            getProduct = {this.getProduct} 
                            modalInfo = {this.state.modalInfo}
                            modalVisibility = {this.state.modalVisibility}
                            openModal = {this.openModal}
                            closeModal = {this.closeModal}
                            modalInfoHandler = {this.modalInfoHandler}
                            mainRange = {this.state.priceRange}
                            productType = {this.state.productType}
                            productsPriceFilter = {this.productsPriceFilter}
                            productsCompanyFilter = {this.productsCompanyFilter}
                            searchingHandler ={this.searchingHandler}/>
         </div>
    }
}
export default Companyproducts
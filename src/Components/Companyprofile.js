import 'bootstrap/dist/css/bootstrap.min.css';
import React,{useEffect,useState} from 'react';
import Constants from './Company/Constants'
import axios from 'axios'
import Companyproducts from './Companyproducts'
import {Data} from '../constant/data'
import { Component } from 'react';
class Companyprofile extends Component{
    state = {
        
        dat:{},
        currentid:''
      }
    datahandler = (data,props) =>{
        let status = 0
        fetch(`https://your-products-manager.herokuapp.com/api/company/get/${Constants.id}`, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        }).then(response => {status = response.status; return response.json()})
          .then(data => {
            if(status === 200){
              this.setState({dat:data,currentid:Constants.id},()=>{
             
              });
            }
            
          })   

      }
     
    render(){
        this.datahandler()
      
return (<div className="container main">
<div className="row mt-3 shadow info"><div className="col-12"><div className="row"><div className="col-12"><h1>{this.state.dat.username}</h1></div></div>
 <div className="row disc"><div className="col-12">{this.state.dat.description}</div></div>
</div></div>
<div className="row shadow mt-5 products"><div className="col-12"><Companyproducts user={this.props.id} products={this.state.dat.products}></Companyproducts></div></div>

</div>)
}
    
       
}

export default Companyprofile
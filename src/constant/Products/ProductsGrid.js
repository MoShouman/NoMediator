import React, {Component} from 'react';
import Product from './Product'
import {Button, ModalBody} from 'react-bootstrap'
import { Modal } from 'react-bootstrap';
import ModalHeader from 'react-bootstrap/esm/ModalHeader';
import Constants from '../../Components/Company/Constants';
import { ModalFooter } from 'react-bootstrap';




class ProductsGrid extends Component {
    state=
    {timePassed: false,
        search : "",
        show:false,
        counter:0,
        orderedproducts:[],
        info:'',
       isempty:true,
       orderid:'',
      bonus:'',
       totalprices:0
      
    }
    

    
   
    
    
    
   
   submit =  ()=>{  
  
   console.log(this.props.p)
   const p = this.props.p.filter(pe=>{return pe._id===Constants.productid})
   console.log(p)
  const pricee = p[0].price
   this.setState({totalprices:parseInt(pricee)+this.state.totalprices})
   console.log(pricee)
   console.log(this.state.totalprices)
this.setState({orderedproducts:[...this.state.orderedproducts,{productid:Constants.productid,numberofitems:this.state.counter,additionalinfo:this.state.info}]})
this.setState({isempty:false})
    }
   getbonus=()=>{
    fetch(`https://your-products-manager.herokuapp.com/api/user/bonus/${this.props.user._id}`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },    
        body: JSON.stringify({companyid:Constants.id})
        
      }).then(response => { return response.json()})
        .then(data => {
            this.setState({bonus:data.bonus})
         
        })  
   }
   show = ()=>{    
           this.setState({show:true})
   }
   onChange= e =>{
       this.setState({search:e.target.value});
   }
  componentDidMount(){
    this.getbonus()
  }
    render() {    
  

setTimeout(() => {this.setState({timePassed: true})}, 2000);
        return (  
            <div className="container-fluid justfiy-content-center">
                <h2 style={ !this.state.isempty?{display:'block'}:{display:'none'}}>total price {this.state.totalprices}</h2>
                <h2 style={ !this.state.isempty?{display:'block'}:{display:'none'}}>total price with bonus {Math.abs(parseInt(this.state.bonus)-this.state.totalprices)}</h2>
              <Button onClick={()=>{
                  console.log(this.state.orderedproducts)
                    let status = 0
                    const data = {
                        companyid:Constants.id,
                        userid:this.props.user._id,
                        
                        products:this.state.orderedproducts
                    
                    }
                    
                    fetch('https://your-products-manager.herokuapp.com/api/order/create', {
                      method: 'POST',
                      headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                      },    
                      body: JSON.stringify(data)
                      
                    }).then(response => {status = response.status;console.log(data); return response.json()})
                      .then(data => {
                        if(status === 200){
                        
                        
                        }
                        else{
                         
                        }
                      })  
                      this.setState({orderedproducts:[]})
              }} className="mx-auto justfiy-content-center" style={ !this.state.isempty?{display:'block'}:{display:'none'}}>submit requests</Button>


               <Button onClick={()=>{
                  console.log(this.state.orderedproducts)
                    let status = 0
                    const data = {
                        companyid:Constants.id,
                        userid:this.props.user._id,
                        
                        products:this.state.orderedproducts
                    
                    }
                    
                    fetch('https://your-products-manager.herokuapp.com/api/order/create', {
                      method: 'POST',
                      headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                      },    
                      body: JSON.stringify(data)
                      
                    }).then(response => {status = response.status;console.log(data); return response.json()})
                      .then(data => {
                        if(status === 200){
                        this.setState({orderid:data._id})
                        console.log(data._id)
                        console.log(this.state.orderid)
                        fetch(`https://your-products-manager.herokuapp.com/api/order/usebonus/${this.state.orderid}`, {
                            method: 'GET',
                            headers: {
                              'Accept': 'application/json',
                              'Content-Type': 'application/json'
                            },    
                          }).then(response => {status = response.status; return response.json()})
                            .then(data => {
                              if(status === 200){
                              
                               
                              }
                             
                            })  
                        }
                        else{
                         
                        }
                      })  
                      console.log(this.state.orderid)
           
                      this.setState({orderedproducts:[]})
              }} className="mx-auto justfiy-content-center" style={ !this.state.isempty?{display:'block'}:{display:'none'}}>submit requests with bonus</Button>        
            
<Modal 
      size="lg"
      
      aria-labelledby="contained-modal-title-vcenter"
      centered show={this.state.show}>
    <ModalHeader>specify the qunaitity you would like to order</ModalHeader>
    <ModalBody><div>
                        <span  onClick={()=>{
                            if(this.state.counter>0){
                                    this.setState({counter:this.state.counter-1})
                            }
                        }
                            
                                 }  class="minus bg-dark">-</span>
                        <input onChange={(e)=>{this.setState({counter:parseInt(e.target.value, 10)})}} type="number" name="qty" value={this.state.counter}/>
                        <span  onClick={()=>{this.setState({counter:this.state.counter+1})}} class="plus bg-dark">+</span>
                        <input onChange={(e)=>{this.setState({info:e.target.value})}} className="ml-5" style={{width:'300px'}} placeholder="addtional info"></input>
                        </div>

                    </ModalBody>
    <ModalFooter><Button onClick={()=>{

        this.submit()

        
        }} >Submit order</Button><Button style={{backgroundColor:'red'}} onClick={()=>{this.setState({show:false});        console.log(this.state.orderedproducts)
    }}>close</Button></ModalFooter>
</Modal>

                <div className="row">
                    
              
                    <div className='d-flex flex-wrap px-5 px-md-2 col-sm-12 col-md-10 col-lg-12 my-2'>
                    
                        {
                          
                           this.props.p==null?[]:this.props.p.map(product=>{
                                return <Product key={product.id} product={product} show={this.show} />
                            })
                         
                        }
                    </div>
             
                </div>
            </div>
        );
    }
}
 
export default ProductsGrid;
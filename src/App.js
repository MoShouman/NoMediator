import './App.css';
import React, {Component} from 'react';
import {Switch, Route} from 'react-router'
import {Redirect} from 'react-router-dom'
import NavBar from './Components/NavBar'
import Login from './Components/Auth/Login'
import Register from './Components/Auth/Register'
import Profile from './Components/Profile'
import ChangeInfo from './Components/ChangeInfo'
import Default from './Components/Default'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Homebody from './Components/Homebody';
import axios from 'axios'
import Offers from './Components/Offers';
import Companyprofile from './Components/Companyprofile'
import Allnews from './Components/Allnews'
import Allsuggested from './Components/Allsuggested'
import CompanyHome from './Components/Company/CompanyHome'
import Constant from '../src/Components/Company/Constants'
import { param } from 'jquery';
import{useHistory,useLocation} from 'react-router-dom'
import AddNews from './Components/Company/AddNews'
import AddProduct from './Components/Company/AddProduct'
import OurCustomers from './Components/Company/OurCustomers'
import Orders from './Components/User/Orders'
import Cart from './Cart'
import {Data} from '../src/constant/data'


class App extends Component {  
  state = {
    usernews:[],
    currentUserInfo:{},
    type:0,
    orders:[],
    isAuthenticated:false,
    users:[],
    companyOrders:[],
    dat:{},
    currentid:'',
    currentproduct:{}
  }
  xa = () => {
    if(localStorage.getItem('isAuthenticated') === 'true'){
      
      const data =  JSON.parse(localStorage.getItem('datax'))
      // this.setState({currentUserInfo:JSON.parse(localStorage.getItem('currentUserInfo'))})
      // this.setState({isAuthenticated:true})
      // this.setState({num:localStorage.getItem('num')})
      // this.getOrders()
      // console.log(this.props)
      this.loginHandler(data)
      console.log(this.state.currentUserInfo,this.state.isAuthenticated)
    }
  }
  componentDidMount(){
    this.xa()
    console.log('DIDIDIDI')
  }
 
  
//Get orders
getOrders = (props) => {
  let status = 0

  // fetch(`https://your-products-manager.herokuapp.com/api/user/orders/${this.state.currentUserInfo._id}`, {
  fetch('https://your-products-manager.herokuapp.com/api/user/orders/60a207434b7e8900225b8c65', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },    
  }).then(response => {status = response.status; return response.json()})
    .then(data => {
      if(status === 200){
        this.setState({orders:data});
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

  //get Company users
  getCompanyUsers = ()=>{
    let status = 0

  fetch(`https://your-products-manager.herokuapp.com/api/company/getdetails/${this.state.currentUserInfo._id}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },    
  }).then(response => {status = response.status; return response.json()})
    .then(data => {
      if(status === 200){
        this.setState({users:data});
        console.log(data,'a7aaaaaaaaaa')
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

   //get Company users
   getCompanyOrders = ()=>{
    let status = 0

  fetch(`https://your-products-manager.herokuapp.com/api/company/nonacceptedorders/${this.state.currentUserInfo._id}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },    
  }).then(response => {status = response.status; return response.json()})
    .then(data => {
      if(status === 200){
        this.setState({companyOrders:data});
        console.log(data,'a7aaaaaaaaaaXXXXXXXXXX')
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

  //Change Informations
  changeInfo = (data, props,typeUser) => {
    let status = 0
    const username = data.username 
    const email = data.email 
    const password = data.password
    const city = data.city 
    const town = data.town
    const type = data.type
    const location = data.location
    const description = data.description
    const logo = data.logo
    const id = data.id
    // const bodyTemp = JSON.stringify({username,email,password, city, town, type})
    // bodyTemp.logo = logo
    console.log(data)
    fetch(`https://your-products-manager.herokuapp.com/api/${typeUser}/edit/${id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username,email,password, city, town, type,description,location})
    
    }).then(response => {status = response.status; return response.json()})
      .then(data => {
        if(status === 200){
          this.setState({currentUserInfo:data,isAuthenticated:true});
          toast.success('your information has been successfully changed', {
            position: "top-center",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
          props.history.replace('/profile');

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

  //register function
  registerHandler = (data,props,url) =>{
    let status = 0
    const username = data.username 
    const email = data.email 
    const password = data.password

    fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username,email,password})
    
    }).then(response => {status = response.status; return response.json()})
      .then(data => {
        if(status === 200){
          this.setState({currentUserInfo:data,isAuthenticated:true});
          toast.success('registered', {
            position: "top-center",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
            localStorage.setItem("currentUserInfo", JSON.stringify(data) );
            localStorage.setItem("isAuthenticated", true );
            localStorage.setItem("num", data.num );
            props.history.replace('/');
            
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

  //login function
  loginHandler = (data,props) =>{
    const datax = data
    // if (data.num ===  '1' )
    //   this.setState({num:1})
    // else
    //   this.setState({num:2})
    let status = 0
    fetch('https://your-products-manager.herokuapp.com/api/general/alllogin', {
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
          toast.success('logged in', {
            position: "top-center",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
            this.setState({num:data.num})
            if(this.state.num == '2'){
              this.getCompanyUsers()
              this.getCompanyOrders()
            }
            localStorage.setItem("currentUserInfo", JSON.stringify(data) );
            localStorage.setItem("isAuthenticated", true );
            localStorage.setItem("num", data.num );
            localStorage.setItem("datax",JSON.stringify(datax) );

            // props.history.replace('/');
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

  //sign out function
  signOutHandler = () => {
    this.setState({currentUserInfo:{},isAuthenticated:false});
    localStorage.setItem("currentUserInfo",'' );
    localStorage.setItem("isAuthenticated",false);
    localStorage.setItem("isAuthenticated",'');
  }
  
  getproduct = (compid,productidx) => {
    let status = 0
    const companyid = compid 
    const productid = productidx
    
    fetch('https://your-products-manager.herokuapp.com/api/general/getproduct', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },    
      body: JSON.stringify({companyid,productid})
    }).then(response => {status = response.status; return response.json()})
      .then(data => {
        if(status === 200){
          this.setState({currentproduct:data});
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

 

  render(){
    console.log(this.state.currentUserInfo, this.state.users,  this.state.companyOrders,this.state.num)
  
    const isAuthenticated = this.state.isAuthenticated;

    return (
      <div className="App">
       <NavBar currentUserInfo = {this.state.currentUserInfo} 
                  isAuthenticated = {this.state.isAuthenticated}
                  getOrders = {this.getOrders}
                  signOutHandler = {this.signOutHandler}
                  num = {this.state.num}
          />
        <ToastContainer/>
        <Switch> 
              <Route exact path='/' render={ props =>{
                return !isAuthenticated ?  <Redirect to="/login" /> : this.state.num =='2'? <CompanyHome companyOrders={this.state.companyOrders} {...props}/> : <Homebody userid ={this.state.currentUserInfo}></Homebody>;
              }}>
              </Route>
              {/* <Route path='/companyHome' render={ props =>{
                return isAuthenticated && this.state.num =='2'? <CompanyHome companyOrders={this.state.companyOrders} /> : <Redirect to="/login" /> ;
              }}></Route> */}
              <Route path='/addproduct' render={ props =>{
                return isAuthenticated && this.state.num =='2'? <AddProduct userInfo={this.state.currentUserInfo} {...props}/> : <Redirect to="/login" /> ;
              
              }}>
              </Route>
              <Route path='/cart' render={ props =>{
                return isAuthenticated && this.state.num =='1'? <Cart></Cart> : <Redirect to="/login" /> ;
              
              }}>
              </Route>
              <Route path='/addnews' render={ props =>{
                 return isAuthenticated && this.state.num =='2'? <AddNews userInfo={this.state.currentUserInfo} {...props}/> : <Redirect to="/login" /> ;
                 
              }}>
              </Route>
              <Route path='/ourcustomers' render={ props =>{
                return isAuthenticated && this.state.num =='2'? <OurCustomers users={this.state.users} compID={this.state.currentUserInfo._id}/> : <Redirect to="/login" /> ;
              }}>
              </Route>
              {/* <Route path='/home' render={ props =>{
                return <Homebody></Homebody>;
              }}>
              </Route> */}
              <Route path='/orders' render={ props =>{
                return !isAuthenticated ?  <Redirect to="/login" /> : <Orders orders={this.state.orders} userid={this.state.currentUserInfo._id}/>;
              }}></Route>
              <Route path='/news' render={ props =>{
                return <Allnews posts={this.state.usernews}></Allnews>;
              }}></Route>
                <Route path='/suggested' render={ props =>{
                return <Allsuggested></Allsuggested>;
              }}></Route>
             
              <Route path='/comprofile/:id'  render={ props =>{
                return <Companyprofile id={this.state.currentUserInfo} data={this.state.dat} getproduct={this.getproduct}></Companyprofile>;
              }}>
              </Route>
              
             <Route path='/register' render={ props =>{
                return isAuthenticated ?  <Redirect to="/" /> : <Register registerHandler = {this.registerHandler} {...props}/>;
              }}>
              </Route>
              <Route path='/login' render={ props => {
                return isAuthenticated ?  <Redirect to="/" /> : <Login loginHandler = {this.loginHandler} {...props}/>;
              }}>
              </Route>
              <Route path='/Profile' render={ props =>{
                return !isAuthenticated ?  <Redirect to="/" /> : <Profile userInfo = {this.state.currentUserInfo} changeInfo={this.changeInfo} {...props}/>;
              }}>
              </Route>
              <Route path='/changeInfo' render={ props =>{
                return !isAuthenticated ?  <Redirect to="/" /> : <ChangeInfo userInfo = {this.state.currentUserInfo} changeInfo={this.changeInfo} {...props}/>;
              }}>
              </Route>
              <Route component={Default}/>
        </Switch>
      </div>
    )
  }
}

export default App;

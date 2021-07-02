import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Home.css'
import { Component } from 'react';
import {Data} from '../constant/data'
import {Link} from 'react-router-dom'
import Constants from './Company/Constants';

class News extends Component{
    render(){
        return<div class="suggest shadow container"><div className="row"><div className="col-12"><h4>Offers</h4></div></div>
         <div className="row"><div className="col"><ul className="list-group ">
        {this.props.posts.slice(0,3).map(post=>(
             <Link   style={{color:'black'}}   onClick={()=>{Constants.id = post.companyid }}  to={{pathname:`/comprofile/${post.companyid}`}}>  
            <li key={post._id} className="list-group-item mb-1" style={{maxHeight:'80px'}}> <div class="d-flex w-100 justify-content-between">
               
            <p style={{}}>ssas</p>
            <p>{post.companyname}</p>
            <small>{post.date}</small>
           
            <small><img src={post.logo} className="imgcontain"></img></small>
            
            </div></li></Link>
      
        ))}
    </ul></div></div>
    <div className="row"><div className="col">
        <button class="btn-dark bt text-decoration-none"><Link onClick={()=>{Constants.allnews=this.props.posts}} to={this.props.new}>see more</Link></button></div></div>
        </div>
    }
}
export default News
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Home.css'
import { Component } from 'react';
import {Data} from '../constant/data'
import {Link} from 'react-router-dom'
import Constants from './Company/Constants';

class Suggested extends Component{
    render(){
        return<div class="suggest shadow container"><div className="row">
            <div className="col-12"><h4>{this.props.header}</h4></div></div>
        <div className="row"><div className="col"><ul className="list-group ">
        {this.props.news.slice(0,3).map(post=>(
             <Link   style={{color:'black'}}   onClick={()=>{Constants.id = post._id }}  to={{pathname:`/comprofile/${post.companyid}`}}>  
            <li key={post._id} className="list-group-item mb-1" style={{height:'70px'}}> <div class="d-flex w-100 justify-content-between">
               
            <h6 class="mb-1">{post.username}</h6>
            <p><img src={post.logo} style={{width:'50px',height:'50px'}}></img></p>
        
           
          </div></li></Link>
        ))}
    </ul></div></div>
    <div className="row"><div className="col"><button class="btn-dark"><Link onClick={()=>{Constants.allsuggested=this.props.news}} to={this.props.new}>see more</Link></button></div></div>
        </div>
    }
}
export default Suggested
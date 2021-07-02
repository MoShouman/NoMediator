import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Home.css'
import { Component } from 'react';
import {Data} from '../constant/data'
import Constants from './Company/Constants';
import {Link} from 'react-router-dom'

class Allnews extends Component{
  
    render() {
        const posts =Constants.allnews
        console.log(posts)
        return <div className="container  all mt-4 shadow">
            <div className="row">
            <div className="col-12"><h1>Offers</h1></div>
            </div>
            <div className="row">
            <div className="col-12"> <ul className="list-group sidelist">
        {posts.slice(0,15).map(post=>(
             <Link   style={{color:'black', textDecoration:'none'}}   onClick={()=>{Constants.id = post.companyid }}  to={{pathname:`/comprofile/${post.companyid}`}}>  
           <li key={post._id} className="list-group-item mb-1 ml-0"  style={{maxHeight:'80px'}}>
               <div className="mb-4">
             <p style={{position:'absolute',left:'1%'}}><img src={post.logo} style={{width:'50px'}}></img>{post.companyname}</p>
          
           <p className="mr-0" style={{position:'absolute',right:'1%'}}>{post.date}</p>
           </div>
           <h5 style={{}}>{post.new}</h5>
          
          
        </li></Link>
        ))}
    </ul></div>
            </div>
            </div>
    }
}
export default Allnews 
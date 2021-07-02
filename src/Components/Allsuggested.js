import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Home.css'
import { Component } from 'react';
import {Data} from '../constant/data'
import {Link} from 'react-router-dom'
import Constants from './Company/Constants';

class Allsuggested extends Component{
    state={
        search:''
    }
    
    render() {
        console.log(Constants.allsuggested)
      const  filteredposts = Constants.allsuggested.filter(post=>
        {return post.username.includes(this.state.search)})
        return <div className="container all mt-4 shadow">
            
            <div className="row">
            <div className="col-12"><h1>Suggested companies</h1></div>
            
            </div>
            <div class="form-group has-search">
    <span class="fa fa-search form-control-feedback"></span>
    <input onChange={e=>{this.setState({search:e.target.value})}} type="text" class="form-control" placeholder="Search"/>
  </div>
            <div className="row">
            <div className="col-12"> <ul className="list-group sidelist">
        {filteredposts.slice(0,15).map(post=>(
                 <Link   style={{color:'black'}}   onClick={()=>{Constants.id = post._id }}  to={{pathname:`/comprofile/${post.companyid}`}}>  
            <li key={post._id} className="list-group-item mb-1 ml-0"  style={{maxHeight:'80px'}}>
            <div className="">
          <p style={{position:'absolute',left:'1%' ,height:'50px'}}><img src={post.logo} style={{width:'40px' ,height:'100%'}}></img></p>
          <p>{post.username}</p>
       
       
        </div>
        
       
       
     </li></Link>
        ))}
    </ul></div>
            </div>
            </div>
    }
}
export default Allsuggested
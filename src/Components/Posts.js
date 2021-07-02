import React from 'react'
import { Link } from 'react-router-dom'
import Constants from './Company/Constants'

const Posts = ({posts,loading})=>{
    if(loading){
        return<h2>loading...</h2>
    }
    return<ul className="list-group ">
        {posts.length !== 0 ?
        posts.map(post=>(
            
            <li key={post._id} className="list-group-item mb-4 shadow rounded"><img src={post.id.logo} className="imgcontain"></img><Link onClick={()=>{
                Constants.id = post.id._id
            console.log(post.id)
            }
                
            } to={{pathname:`/comprofile/${post.id._id}`}}>{post.id.username}</Link>
            <span style={{position:'absolute',right:'1% '}}>{post.bouns}</span>
            </li>
        )):<h1  className='text-uppercase'>There is no companies </h1>}
    </ul>
}

export default Posts;
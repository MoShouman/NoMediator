import React from 'react'
import { Link } from 'react-router-dom'

const Posts = ({posts,loading})=>{
    if(loading){
        return<h2>loading...</h2>
    }
    return<ul className="list-group ">
        {posts.map(post=>(
            <li key={post._id} className="list-group-item mb-4 shadow rounded"><Link to='/comprofile'>{post.name}</Link></li>
        ))}
    </ul>
}

export default Posts;
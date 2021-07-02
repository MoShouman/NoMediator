import React from 'react';
import '../styles/Home.css';
const Pagination=({postsperpage,totalposts,paginate})=>{
const pagenum=[];
    for(let i=1;i<=Math.ceil(totalposts/postsperpage);i++){
            pagenum.push(i);
    }
    return(
        <nav>
            <ul className="pagination">{pagenum.map(number=>(
                <li key={number} className="page-item">
                    <a onClick={()=>paginate(number)}  className="page-link">{number}</a>
                </li>
            ))}</ul>
        </nav>
    )
}
export default Pagination
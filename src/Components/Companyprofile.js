import 'bootstrap/dist/css/bootstrap.min.css';
import React,{useEffect,useState} from 'react';
// import '../styles/Comprofile.css'
import axios from 'axios'
import Companyproducts from './Companyproducts'
import {Data} from '../constant/data'

const Companyprofile = ()=>{
    const [posts,setposts] = useState([]);
    const [loading,setloading] =useState(false);
    const [currentpage,setcurrentpage] = useState(1);
    const [postsperpage,setpostsperpage] = useState(4);
    useEffect(()=>{
        const fetchposts = async()=>{
            setloading(true);
            const res = await axios.get('https://your-products-manager.herokuapp.com/api/company');
            setposts(Data);
            setloading(false);
        }
        fetchposts();
    },[]);

const indexoflastpost = currentpage*postsperpage;
const indexoffirstpost = indexoflastpost-postsperpage;
const  currentposts = posts.slice(indexoffirstpost,indexoflastpost);

const paginate=(pagenum)=>{
    setcurrentpage(pagenum);
}
return (<div className="container main">
<div className="row mt-3 shadow info"><div className="col-12"><div className="row"><div className="col-12"><h1>{Data[0].name}</h1></div></div>
 <div className="row disc"><div className="col-12">{Data[0].description}</div></div>
</div></div>
<div className="row shadow mt-5 products"><div className="col-12"><Companyproducts></Companyproducts></div></div>

</div>)
}
    
       


export default Companyprofile
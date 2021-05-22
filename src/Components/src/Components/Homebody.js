import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import '../styles/Home.css'
import React,{useEffect,useState} from 'react';
import {Data} from '../constant/data'
import Offers from './Offers'
import Suggested from './Suggested'


const Homebody = ()=>{
    const [posts,setposts] = useState([]);
    const [loading,setloading] =useState(false);
    const [currentpage,setcurrentpage] = useState(1);
    const [postsperpage,setpostsperpage] = useState(6);
    useEffect(()=>{
        const fetchposts = async()=>{
            setloading(true);
            const res = await axios.get('https://your-products-manager.herokuapp.com/api/company');
            setposts(Data);
            setloading(false);
        }
        fetchposts();
    },[]);
console.log(posts);
const indexoflastpost = currentpage*postsperpage;
const indexoffirstpost = indexoflastpost-postsperpage;
const  currentposts = posts.slice(indexoffirstpost,indexoflastpost);
const news = '/news';
const suggested = '/suggested'
const paginate=(pagenum)=>{
    setcurrentpage(pagenum);
}
    return(
        <div className="mainbody container-fluid mt-4">
            <div className="row main1">
            <div className="col-lg-10 col-sm-12"> <Offers posts={currentposts} loading={loading} postsperpage={postsperpage} totalposts={posts} paginate={paginate}></Offers>

           </div>
           <div className="col-lg-2 col-sm-12 "><div className="row m2 mb-4"><Suggested news={Data} new={news} header="news"></Suggested></div><div className="row m2 mt-4"><Suggested news={Data} new={suggested} header="suggested"></Suggested></div></div>
           </div>
           
        </div>
    );
};
export default Homebody;
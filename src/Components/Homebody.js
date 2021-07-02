import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import '../styles/Home.css'
import React,{useEffect,useState} from 'react';
import {Data} from '../constant/data'
import Offers from './Offers'
import Suggested from './Suggested'
import News from './News'



const Homebody = ({userid})=>{
   console.log(userid)
    const [posts,setposts] = useState([]);
    const [loading,setloading] =useState(false);
    const [currentpage,setcurrentpage] = useState(1);
    const [postsperpage,setpostsperpage] = useState(6);
    const[suggested,setsuggest] = useState([]);
    const [Newss,setnews] = useState([]);
    useEffect(()=>{
        const fetchposts = async()=>{
            setloading(true);
           
            const res = await axios.get(`https://your-products-manager.herokuapp.com/api/user/getdetails/${userid._id}`);
            const res2 = await axios.get(`https://your-products-manager.herokuapp.com/api/user/suggestedcompanies/${userid._id}`);
            const res3 = await axios.get(`https://your-products-manager.herokuapp.com/api/user/news/${userid._id}`)
            setposts(res.data);
            setsuggest(res2.data);
            setnews(res3.data);
            setloading(false);
           

        }
        fetchposts();
    },[]);

const news = "/news"
const suggest = "/suggested"
const indexoflastpost = currentpage*postsperpage;
const indexoffirstpost = indexoflastpost-postsperpage;
const  currentposts = posts.slice(indexoffirstpost,indexoflastpost);

const paginate=(pagenum)=>{
    setcurrentpage(pagenum);
}

    return(
       
        <div className="mainbody container-fluid mt-4">
            <div className="row main1">
            <div className="col-lg-9 col-sm-12"> 
            <Offers posts={currentposts} loading={loading} postsperpage={postsperpage} totalposts={posts} paginate={paginate}></Offers>

           </div>
            <div className="col-lg-3 col-sm-12 mt-4 mainside"><div className="row m2 mb-4 side1"><Suggested new={suggest} news={suggested} header="suggested"></Suggested></div><div className="row side1"><News new={news} posts={Newss} header="news"></News></div></div> 
        
           </div>
           
        </div>
    );
};
export default Homebody;
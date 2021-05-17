import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import '../styles/Home.css'
import React,{useEffect,useState} from 'react';
import Offers from './Offers'
import Suggested from './Suggested'


const Homebody = ()=>{
    const [posts,setposts] = useState([]);
    const [loading,setloading] =useState(false);
    const [currentpage,setcurrentpage] = useState(1);
    const [postsperpage,setpostsperpage] = useState(3);
    useEffect(()=>{
        const fetchposts = async()=>{
            setloading(true);
            const res = await axios.get('https://your-products-manager.herokuapp.com/api/company');
            setposts(res.data);
            setloading(false);
        }
        fetchposts();
    },[]);
console.log(posts);
const indexoflastpost = currentpage*postsperpage;
const indexoffirstpost = indexoflastpost-postsperpage;
const  currentposts = posts.slice(indexoffirstpost,indexoflastpost);

const paginate=(pagenum)=>{
    setcurrentpage(pagenum);
}
    return(
        <div className="mainbody">
            <Offers posts={currentposts} loading={loading} postsperpage={postsperpage} totalposts={posts} paginate={paginate}></Offers>
            <Suggested></Suggested>
        </div>
    );
};
export default Homebody;
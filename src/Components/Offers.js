import 'bootstrap/dist/css/bootstrap.min.css';
import Posts from './Posts';
import '../styles/Home.css'
import { Component } from 'react';
import Pagination from './Pagintaion'
class Offers extends Component{
    render(){
        return<div class="offers"><h4 classname="mb-2">Companies you work with</h4>
        <Posts posts={this.props.posts} loading={this.props.loading}></Posts>
        <Pagination postsperpage={this.props.postsperpage} totalposts={this.props.totalposts.length} paginate={this.props.paginate}></Pagination>
        </div>
    }
}
export default Offers
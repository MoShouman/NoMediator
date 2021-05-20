import 'bootstrap/dist/css/bootstrap.min.css';
import Posts from './Posts';
import '../styles/Home.css'
import { Component } from 'react';
import Pagination from './Pagintaion'
class Offers extends Component{
    render(){
        return<div class="offers shadow rounded  mt-2 container"><h4 class="mb-4 mt-4">Companies you work with</h4>
        <Posts classname="mt-4" posts={this.props.posts} loading={this.props.loading}></Posts>
        <Pagination postsperpage={this.props.postsperpage} totalposts={this.props.totalposts.length} paginate={this.props.paginate}></Pagination>
        </div>
    }
}
export default Offers
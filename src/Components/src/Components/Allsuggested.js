import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Home.css'
import { Component } from 'react';
import {Data} from '../constant/data'

class Allsuggested extends Component{
    render() {
        return <div className="container all mt-4 shadow">
            <div className="row">
            <div className="col-12"><h1>Suggested companies</h1></div>
            </div>
            <div className="row">
            <div className="col-12"> <ul className="list-group sidelist">
        {Data.slice(0,15).map(post=>(
            <li key={post._id} className="list-group-item mb-4 shadow rounded">{post.name}</li>
        ))}
    </ul></div>
            </div>
            </div>
    }
}
export default Allsuggested
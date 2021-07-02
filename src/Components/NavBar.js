import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import img from './../img/195646-200.png'
class NavBar extends Component {

    render() { 
        console.log(this.props)
        return (
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark px-sm-5 d-flex align-items-center'>
                <Link to='/' className='navbar-brand'> 
                    <h4 className='d-flex align-items-center'>
                        <img style={{width:'50px',height:'50px'}}src={img}></img>
                        {/* <i className='fas fa-shopping-bag mr-2'></i> */}
                        <span className='ml-1 mt-2'>
                            No Mediator    
                        </span>
                    </h4>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className='col'>
                        <ul className='navbar-nav mr-auto justify-content-left'>
                            <li style={(this.props.isAuthenticated)?{display:'none'}:{display:'block'}}>
                                <Link to='/register' className='navbar-brand'>
                                    Register
                                </Link>
                            </li>
                            <li style={!(this.props.isAuthenticated)?{display:'none'}:{display:'block'}}>
                                <Link to='/' className='navbar-brand'>
                                    Home
                                </Link>
                            </li>
                            <li style={!(this.props.isAuthenticated && this.props.num == '1')?{display:'none'}:{display:'block'}}>
                                <Link to='/orders' className='navbar-brand' onClick={(this.props.isAuthenticated)? () => this.props.getOrders():{}}>
                                    Orders
                                </Link>
                            </li>
                            
                            <li style={!(this.props.isAuthenticated)?{display:'none'}:{display:'block'}}>
                                <Link to='/profile' className='navbar-brand'>
                                    Profile
                                </Link>
                            </li>
                            <li style={!(this.props.isAuthenticated)?{display:'none'}:{display:'block'}}>
                                <Link to='/login' className='navbar-brand' onClick = {() => this.props.signOutHandler()}>
                                  Signout
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
          );
    }
}
 
export default NavBar;
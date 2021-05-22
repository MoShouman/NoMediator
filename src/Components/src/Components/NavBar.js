import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class NavBar extends Component {

    render() { 
        console.log(this.props)
        return (
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark px-sm-5'>
                <Link to='/' className='navbar-brand'> 
                    <h3><i className='fas fa-shopping-bag mr-2'></i>Bda3ty</h3>
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
                                <Link to='/profile' className='navbar-brand'>
                                    Profile
                                </Link>
                            </li>
                            <li style={!(this.props.isAuthenticated)?{display:'none'}:{display:'block'}}>
                                <Link to='/home' className='navbar-brand'>
                                    home
                                </Link>
                            </li>
                            <li style={!(this.props.isAuthenticated)?{display:'none'}:{display:'block'}}>
                                <Link to='/login' className='navbar-brand' onClick = {() => this.props.signOutHandler()}>
                                  Signout
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <form class="form-inline my-2 my-lg-0">
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
                </div>
            </nav>
          );
    }
}
 
export default NavBar;
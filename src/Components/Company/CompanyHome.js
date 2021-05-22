import React, {Component} from 'react';

class CompanyHome extends Component {
    
    state = {
        disabled:false,
        email:this.props.userInfo.email,
        username:this.props.userInfo.username,
        city:this.props.userInfo.city,
        town:this.props.userInfo.town,
        type:this.props.userInfo.type,
        password:this.props.userInfo.password,
        id:this.props.userInfo._id
    }

    onChangeHandler =  (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    onSubmitHandler = () => {
        if( Object.toJSON(this.state) != Object.toJSON(this.pros))
            this.props.changeInfo({...this.state}, this.props)
    }

    render() { 
        return ( 
            <div className='container'>
            <h2 className='text-uppercase d-block text-center my-4'>Home</h2>
            <div className='row shadow p-3 mb-5 mt-1 rounded'>
                <div className='col-sm-5 col-md-12 d-flex justify-content-center'>
                </div>
                <div id="accordion" style={{minWidth:'100%'}}>
                    <div class="card" >
                        <div class="card-header" id="headingOne">
                        <h5 class="mb-0">
                            <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">    
                                <ul className='navbar-nav pull-right mr-auto justify-content-between text-dark text-decoration-none'>
                                    <li className='mr-5'>
                                        Muhammed
                                        {this.props.userInfo.username}
                                    </li>
                                    <li>
                                        Cairo, Giza
                                        {this.props.userInfo.username}
                                    </li>
                                </ul>
                            </button>
                        </h5>
                        </div>

                        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                            <div class="card-body">
                                <h6 className='text-uppercase d-block text-center my-4'>Order</h6>
                                <div className='cart-upper p-2 row text-center d-flex mx-auto'>
                                    <div className='col'>
                                        <h4>Product</h4>
                                    </div>
                                    <div className='col'>
                                        <h4>Name of Product</h4>
                                    </div> 
                                    <div className='col'>
                                        <h4>Price</h4>
                                    </div>
                                    <div className='col'>
                                        <h4>Quantity</h4>
                                    </div>
                                    <div className='col'>
                                        <h4>Accept</h4>
                                    </div>
                                    <div className='col'>
                                        <h4>Refuse</h4>
                                    </div>
                                </div>

                                <div  className="p-2 row d-flex mx-auto font-weight-bolder text-center cart-item my-2">
                                    <div className='col  my-auto'>
                                        <img src='' className='mx-auto' alt="img"/>
                                    </div>
                                    <div className='col  my-auto'>
                                        <p className='c-dark '>Pepsi</p>
                                    </div>
                                    <div className='col my-auto'>
                                        <p className='c-dark'>150$</p>
                                    </div>
                                    <div className='col my-auto'>
                                        <p className='c-dark'>15</p>
                                    </div>
                                    <div className='col my-auto'>
                                        <i className="fa fa-check-circle "></i>
                                    </div>
                                    <div className='col my-auto'>
                                        <i class="fas fa-times-circle danger"></i>
                                    </div>
                                </div>   
                            </div>
                        </div>
                    </div>
               
                    <div class="card" >
                        <div class="card-header" id="headingTwo">
                        <h5 class="mb-0">
                            <button class="btn btn-link" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">    
                                <ul className='navbar-nav pull-right mr-auto justify-content-between text-dark text-decoration-none'>
                                    <li className='mr-5'>
                                        Ahmed
                                        {this.props.userInfo.username}
                                    </li>
                                    <li>
                                        Cairo, Giza
                                        {this.props.userInfo.username}
                                    </li>
                                </ul>
                            </button>
                        </h5>
                        </div>

                        <div id="collapseTwo" class="collapse show" aria-labelledby="headingTwo" data-parent="#accordion">
                            <div class="card-body">
                                <h6 className='text-uppercase d-block text-center my-4'>Order</h6>
                                <div className='cart-upper p-2 row text-center d-flex mx-auto'>
                                    <div className='col'>
                                        <h4>Product</h4>
                                    </div>
                                    <div className='col'>
                                        <h4>Name of Product</h4>
                                    </div> 
                                    <div className='col'>
                                        <h4>Price</h4>
                                    </div>
                                    <div className='col'>
                                        <h4>Quantity</h4>
                                    </div>
                                    <div className='col'>
                                        <h4>Accept</h4>
                                    </div>
                                    <div className='col'>
                                        <h4>Refuse</h4>
                                    </div>
                                </div>
                                <div  className="p-2 row d-flex mx-auto font-weight-bolder text-center cart-item my-2">
                                    <div className='col  my-auto'>
                                        <img src='' className='mx-auto' alt="product"/>
                                    </div>
                                    <div className='col  my-auto'>
                                        <p className='c-dark '>Coca Cola</p>
                                    </div>
                                    <div className='col my-auto'>
                                        <p className='c-dark'>150$</p>
                                    </div>
                                    <div className='col my-auto'>
                                        <p className='c-dark'>15</p>
                                    </div>                                  
                                    <div className='col my-auto'>
                                        <i className="fa fa-check-circle "></i>
                                    </div>
                                    <div className='col my-auto'>
                                        <i class="fas fa-times-circle danger"></i>
                                    </div>
                                </div>   
                            </div>
                        </div>
                    </div>
               
               
               
                </div>
            </div>
        </div>
        );
    }
}
 
export default CompanyHome;
import React, {Component} from 'react';
import { ToastContainer, toast } from 'react-toastify';

class OurCustomers extends Component {
    state = {
        newbounse:'',
    }

    onChangeHandler =  (event) => {
        console.log([event.target.name], event.target.value)
        this.setState({[event.target.name]: event.target.value});
    }

    onSubmitHandler = (userId) => {
        
            let status = 0
            console.log(userId._id,this.state.newbounse)
            fetch(`https://your-products-manager.herokuapp.com/api/company/addbouns/${this.props.compID}`, {
              
                method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },    
              body: JSON.stringify({userid:userId._id,newbounse:this.state.newbounse})
            }).then(response => {status = response.status; return response.json()})
              .then(data => {
                if(status === 200){
                  console.log(data)
                  window.location.reload();

                }
                else{
                  console.log(data.message)
                  toast.error(data.message, {
                  position: "top-center",
                  autoClose: 4000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  });
                }
              })  
          
    }

    render() { 
        console.log(this.props.users)
        return ( 
            <div className='fluid-container'>
            <h2 className='text-uppercase d-block text-center my-4'>Our Customers</h2>
            <div className= 'row justify-content-center' style={{width:'100%'}}>
                <div className='col-md-9 shadow  p-3 mb-5 mt-1 rounded'>
                    <div class="card-body">
                        <div className='cart-upper p-2 row text-center d-flex mx-auto'>
                            <div className='col'>
                                <h4>Image</h4>
                            </div>
                            <div className='col'>
                                <h4>Username</h4>
                            </div> 
                            <div className='col'>
                                <h4>City</h4>
                            </div>
                            <div className='col'>
                                <h4>Town</h4>
                            </div>
                            <div className='col'>
                                <h4>Bouns</h4>
                            </div>
                            <div className='col'>
                                <h4>Add Bouns</h4>
                            </div>
                        </div>
                        {
                            this.props.users.users.map(user => (
                                <div  className="p-2 row d-flex mx-auto font-weight-bolder text-center cart-item my-2">
                                <div className='col  my-auto'>
                                    <img src={user.id.logo} className='mx-auto' alt="img"/>
                                </div>
                                <div className='col  my-auto'>
                                    <p style={{color:'#21252999'}}>{user.id.username}</p>
                                </div>
                                <div className='col my-auto'>
                                    <p style={{color:'#21252999'}}>{user.id.city}</p>
                                </div>
                                <div className='col my-auto'>
                                    <p style={{color:'#21252999'}}>{user.id.town}</p>
                                </div>
                                <div className='col my-auto'>
                                    <p style={{color:'#21252999'}}>{user.bouns}</p>
                                </div>
                                <div className='col my-auto'>
                                    <input className='' style={{width:'55px'}} name='newbounse' placeholder='0' onChange={this.onChangeHandler}></input>
                                    <i class="fas fa-plus-square ml-1" onClick={()=>this.onSubmitHandler(user.id)}></i>
                                </div>
                            </div>   
                            
                            ))
                        }
                      
                   
                    </div>
                </div>
            </div>          
        </div>
        );
    }
}
 
export default OurCustomers;
import React,{useState, useEffect} from 'react';
import axios from 'axios';

const Myorder = () =>{
    const[allorder, updateOrder] = useState([]);
    const getOrder = () =>{
        axios.get("http://localhost:1234/order")
        .then(response=>{
            updateOrder(response.data.reverse());
        })
    }

    useEffect(()=>{
        getOrder();
    },[true])

    return(
        <div className="container mt-5">
            <div className="row">
                <div className='col-lg-12 text-center'>
                    <h3 className='text-warning'> Order List -: {allorder.length} </h3>
                </div>
            </div> 
            {
                allorder.map((order, index)=>{
                    return(
                        <div className='row mb-3' key={index}>
                            <div className='col-lg-4'>
                                <h5> Customer Details </h5>
                                <p> Full Name : {order.customername} </p>
                                <p> Mobile No : {order.mobile} </p>
                                <p> e-Mail id : {order.email} </p>
                                <address> Address : {order.address} </address>
                            </div>
                            <div className='col-lg-8'>
                                <h5> Ordered Items </h5>
                                    <table className="table table-bordered">
                                    <thead>
                                        <tr className="bg-light text-primary">
                                            <th>Item Name</th>
                                            <th>Item Price</th>
                                            <th>Photo</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            order.product.map((pro, index)=>{
                                                return(
                                                    <tr key={index}>
                                                        <td>{pro.name}</td>  
                                                        <td>{pro.price}</td> 
                                                        <td><img src={pro.photo} height="30" width="40"/></td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Myorder;
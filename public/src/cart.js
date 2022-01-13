import React,{useState, useEffect} from 'react';
import axios from 'axios';

const Cart = () =>{
    const[cartitem, updateCart] = useState([]);
    const getCart = () =>{
        axios.get("http://localhost:1234/cart")
        .then(response=>{
            updateCart(response.data);
        })
    }

    useEffect(()=>{
        getCart();
    },[true]);

    const[msg , updateMsg] = useState("");
    const deleteItem = (id) =>{
        axios.delete("http://localhost:1234/cart/"+id)
        .then(response=>{
            updateMsg("Item Deleted From Cart !");
            getCart();
        }) 
    }

    const[name, pickName] = useState("");
    const[mobile, pickMobile] = useState("");
    const[email, pickEmail] = useState("");
    const[address, pickAddress] = useState("");
    const save = () =>{
        var orderdata = {
            "customername":name,
            "mobile":mobile,
            "email":email,
            "address":address,
            "product":cartitem
        };
        axios.post("http://localhost:1234/order", orderdata)
        .then(response=>{
            updateMsg("Your Order Placed Successfully !");
        }) 
    }

    return(
        <div className="container mt-5">
            <div className="row">
                <div className='col-lg-4'>
                    <h4 className='text-center text-info'> Customer Details </h4>
                    <div className='border rounded p-4'>
                        <div className="mb-3">
                            <label>Customer Name</label>
                            <input type="text" className='form-control'
                            onChange={obj=>pickName(obj.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <label>Phone No</label>
                            <input type="text" className='form-control'
                            onChange={obj=>pickMobile(obj.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <label>e-Mail Id</label>
                            <input type="text" className='form-control'
                            onChange={obj=>pickEmail(obj.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <label>Delivery Address</label>
                            <textarea className='form-control'
                            onChange={obj=>pickAddress(obj.target.value)}></textarea>
                        </div>
                        <div className='text-center'>
                            <button className='btn btn-success btn-lg' onClick={save}>Place Order</button>
                        </div>
                    </div>
                </div>
                <div className='col-lg-8'>
        <h4 className='text-center text-warning'> Items in Cart -: {cartitem.length} </h4>
        <p className='text-center text-danger'>{msg}</p>
                    <table className="table">
                        <thead>
                            <tr className="bg-light text-primary">
                                <th>Cart Id</th>
                                <th>Item Name</th>
                                <th>Item Price</th>
                                <th>Photo</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cartitem.map((pro, index)=>{
                                    return(
                                        <tr key={index}>
                                            <td>{pro.id}</td>
                                            <td>{pro.name}</td>  
                                            <td>{pro.price}</td> 
                                            <td><img src={pro.photo} height="50" width="70"/></td>  
                                            <td>
                                                <button
                                                    className='btn btn-danger btn-m'
                                                    onClick={deleteItem.bind(this, pro.id)}>
                                                    <i className='fa fa-trash'></i>
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Cart;
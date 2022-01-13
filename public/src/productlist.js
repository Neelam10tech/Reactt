import React,{useState, useEffect} from 'react';
import axios from 'axios';
const Productlist = () =>{
    const[product, updateProduct] = useState([]);
    const getProduct = () =>{
        axios.get("http://localhost:1234/product")
        .then(response=>{
            updateProduct(response.data.reverse());
        })
    }
    useEffect(()=>{
        getProduct();
    },[true]);

    const[message , updateMsg] = useState("");
    const addtocart = (productData) =>{
        axios.post("http://localhost:1234/cart", productData)
        .then(response=>{
            updateMsg(productData.name + " Added in Your Cart !");
        })
    }

    return(
        <div className="container mt-4">
            <div className='row text-center'>
                <p className='col-lg-12 text-center text-danger'>{message}</p>
                {
                    product.map((pro,index)=>{
                        return(
                            <div className='col-lg-3 mb-4' key={index}>
                                <div className='bg-light p-4 rounded'>
                                    <h5 className='text-primary'> {pro.name} </h5>
                                    <img src={pro.photo} className='rounded' height="150" width="100%"/>
                                    <p>{pro.details}</p>
                                    <p>Rs. {pro.price}</p>
                                    <button 
                                        className='btn btn-danger btn-sm'
                                        onClick={addtocart.bind(this, pro)}>
                                        <i className='fa fa-shopping-cart'></i> Add To cart
                                    </button>
                                </div>
                            </div>        
                        )
                    })
                }
                
            </div>
        </div>
    )
}
export default Productlist;
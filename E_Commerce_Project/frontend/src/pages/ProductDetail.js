import '../styles/bootstrap5/src/css/bootstrap.min.css';
import '../styles/font-awesome/css/font-awesome.min.css';
import '../styles/bootstrap5/src/js/bootstrap.bundle.min.js';
import '../App.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
function ProductDetail({cartItems,setCartItems})
{
    const [product,setProduct]=useState(null);
    const [qty,setQty]=useState(1);
    const {id}=useParams();
    useEffect(()=>{
        fetch(process.env.REACT_APP_API_URL+'/product/'+id)
        .then(res=>res.json())
        .then(res=>setProduct(res.product))
    },[])
    function addToCart()
    {
        const itemExist=cartItems.find((item)=>item.product._id==product._id)
        if(!itemExist)
        {
            const newItem={product,qty};
            setCartItems((state)=>[...state,newItem]);
            toast.success("Cart Items added successfully");
        }
    }
    function increasQty()
    {
        if(product.stock==qty)
        {
            return;
        }
        setQty((state)=>state+1);
    }
    function decreaseQty()
    {
        if(qty>1)
        {
            setQty((state)=>state-1);
        }
    }
    return( product &&
    <>
        <div className="container container-fluid">
            <div className="row d-flex justify-content-around">
                <div className="col-12 col-lg-5 mt-5 container">
                    <img src={product.images[0].image} alt="Laptop"  id="product_image"/>
                </div>
                <div className="col-12 col-lg-5 mt-5" id="product_details_description">
                    <h3>{product.name}</h3>
                    <p id="product_id">
                        Product # {product._id}
                    </p>
                    <hr />
                    <div className="ratings mt-auto" id="ratings">
                        <div className="rating-outer">
                            <div className="rating-inner" style={{width:`${product.ratings/5*100}%`}}></div>
                        </div>
                    </div>
                    <hr />
                    <p id="product_details_price">
                        ${product.price}
                    </p>
                    <div className="stockCounter">
                        <button className="btn btn-danger minus" onClick={decreaseQty}>-</button>
                        <input type="number" id="number" className="form-control count" value={qty} readOnly/>
                        <button className="btn btn-primary plus" onClick={increasQty}>+</button>
                    </div>
                    <button type="button" id="product_details_cart_btn" className="btn mt-2 p-4 pt-2 pb-2 text-center" onClick={addToCart} disabled={product.stock==0}>
                        Add to Cart
                    </button>
                    <hr />
                    <p>
                        Status:
                        <span id="stock_status" className={product.stock>0? "text-success":"text-danger"}>
                            {product.stock>0? "In Stock":"Out of Stock"}
                        </span>
                    </p>
                    <hr />
                    <h4 className="mt-2">
                        Description:
                    </h4>
                    <p className="mt-3">
                        {product.description}
                    </p>
                    <hr />
                    <p id="product_seller mb-3">
                        Sold by:
                        <strong>
                            {product.seller}
                        </strong>
                    </p>
                </div>
            </div>
        </div>
    </>
    );
}
export default ProductDetail;
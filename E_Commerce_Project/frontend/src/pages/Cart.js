import '../styles/bootstrap5/src/css/bootstrap.min.css';
import '../styles/font-awesome/css/font-awesome.min.css';
import '../styles/bootstrap5/src/js/bootstrap.bundle.min.js';
import '../App.css';
import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
function Cart({cartItems,setCartItems})
{
    const [complete,setComplete]=useState(false);
    function increasQty(item)
    {
        if(item.product.stock==item.qty)
        {
            return;
        }
        const updatedItems=cartItems.map((i)=>
        {
            if(i.product._id==item.product._id)
            {
                i.qty++;
            }
            return i;
        })
        setCartItems(updatedItems);
    }
    function decreaseQty(item)
    {
        if(item.qty>1)
        {
            const updatedItems=cartItems.map((i)=>
            {
                if(i.product._id==item.product._id)
                {
                    i.qty--;
                }
                return i;
            })
            setCartItems(updatedItems);
        }
    }
    function removeItem(item)
    {
        const updatedItems=cartItems.filter((i)=>
        {
            if(i.product._id!==item.product._id)
            {
                return true;
            }
        })
        setCartItems(updatedItems)
    }
    function placeOrderHandler()
    {
        fetch(process.env.REACT_APP_API_URL+'/orders',
        {
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(cartItems)
        })
        .then(()=>
        {
            setCartItems([]);
            setComplete(true);
            toast.success("Order Success!");
        })
    }
    return( cartItems.length>0?
        <Fragment>
            <div class="container container-fluid">
                <h2 class="mt-5">
                    Your Cart :
                    <b>
                        {cartItems.length} items
                    </b>
                </h2>
                <div class="row d-flex justify-content-between">
                    <div class="mt-2">
                        {cartItems.map((item)=>
                        (<Fragment>
                            <div class="d-flex" id="cart_item">
                                <div class="col-6 col-lg-2">
                                    <img class="img_cart mt-3" src={item.product.images[0].image} alt={item.product.name}/>
                                </div>
                                <div class="mt-3 col-6 col-lg-2">
                                    <Link to={"/product/"+item.product._id} id="cart_description">
                                        {item.product.name}
                                    </Link>
                                </div>
                                <div class="p-5 pt-0">
                                    <p id="cart_amount" class="mt-5">
                                        ${item.product.price}
                                    </p>
                                </div>
                                <div class="mt-3">
                                    <div class="stockCounter d-inline">
                                        <span class="btn btn-danger minus" onClick={()=>decreaseQty(item)}>-</span>
                                        <input type="number" id="number" class="form-control count" value={item.qty} readOnly/>
                                        <span class="btn btn-primary plus" onClick={()=>increasQty(item)}>+</span>
                                    </div>
                                </div>
                                <div class="col-5 mt-5">
                                    <i id="delete_cart_item" class="fa fa-trash btn text-danger" onClick={()=>removeItem(item)}></i>
                                </div>
                            </div>
                        </Fragment>)
                        )}
                    </div>
                    <div class="col-12 mt-5">
                        <div id="order_summary">
                            <h4>
                                Order Summary
                            </h4>
                            <p id="order-summary-values">
                                Subtotal: 
                                <span class="order-summary-values">
                                    {cartItems.reduce((acc,item)=>(acc+item.qty),0)}(Units)
                                </span>
                            </p>
                            <p id="order-summary-values">
                                Est.total:
                                <span class="order-summary-values">
                                    ${cartItems.reduce((acc,item)=>(acc+item.product.price*item.qty),0)}
                                </span>
                            </p>
                            <button id="checkout_btn" class="btn p-4 pt-1 pb-1 text-center" onClick={placeOrderHandler}>
                                Place Order
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>:(!complete?<h2 className="mt-5 text-center">Your Cart is Empty!</h2>
        :<Fragment>
            <h2 className="mt-5 text-center">
                Order Completed!
            </h2>
            <p className="mt-2 text-center">
                Your order has been placed successfully!
            </p>
        </Fragment>)
    );
}
export default Cart;
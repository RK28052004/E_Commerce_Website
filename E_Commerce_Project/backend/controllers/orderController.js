const OrderModel=require('../models/orderModel');
const ProductModel=require('../models/productModel');


//Create Order - /api/v1/orders

exports.createOrder=async(req,res,next)=>{
    const cartItems=req.body;
    const amount=Number(cartItems.reduce((acc,item)=>(acc+item.product.price*item.qty),0)).toFixed(2);
    const status='pending';
    const orders=await OrderModel.create({cartItems,amount,status})

    //Updating Product Stock

    cartItems.forEach(async(item)=>
    {
        const product=await ProductModel.findById(item.product._id);
        product.stock=product.stock-item.qty;
        await product.save();
    })

    res.json({
        success:true,
        orders
    })
}
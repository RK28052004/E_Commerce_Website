const mongoose=require('mongoose');


const orderSchema=new mongoose.Schema({
    cartItems:Array,
    amount:Array,
    status:String,
    createdAt:Date
})



const orderModel=mongoose.model('Order',orderSchema);


module.exports=orderModel;
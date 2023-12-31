const express=require("express");

const router=express.Router();
const Review=require("../models/Review")
const Product=require("../models/Product")

const {isLoggedIn}=require('../middleware')

router.post("/products/:productid/review",isLoggedIn,async(req,res)=>{

    const {productid}=req.params;
    const {rating,comment}=req.body;

    //  find the product with given product id
    const product= await Product.findById(productid)

    const review=await Review.create({rating,comment});

    product.reviews.push(review);
    await product.save();

    res.redirect(`/products/${productid}`)

})

module.exports=router;
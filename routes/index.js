const express = require('express');
const Product = require('../models/product');
const router = express.Router();


router.post('/updateProducts', async (req, res)=>{
    try{
        let obj = req.body;
        for(var x of obj)
        {
            console.log(x.productId, x.quantity, x.operation);
            let product = await Product.findOne({productId: x.productId});
            if(product)
            {
                console.log('Product exists do the operation');
                if(x.operation === 'add')
                {
                    product.quantity += x.quantity;
                }else{
                    product.quantity -= x.quantity;
                }
                await product.save();
            }else{
                if(x.quantity < 0)
                {
                    console.log('Sufficient Quantity is not present in store');
                }
                product  = await Product.create({
                    productId: x.productId,
                    quantity: x.quantity
                });
                console.log(product);
                console.log('Product Created!');
            }
        }
        return res.status(200).json({
            message: 'API is running'
        });
    }catch(err){
        console.log("Error is => ", err);
        return res.status(400).json({
            message: `Error is ${err}`
        });
    }
});

module.exports = router;
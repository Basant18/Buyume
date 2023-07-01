const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productId:{
        type: Number,
        unique: true,
        require: true
    },
    quantity:{
        type: Number,
        require: true
    }
},{
    timestamps: true
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
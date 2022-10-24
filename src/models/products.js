const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String,
    },
    category: {
        required: true,
        type: String,
    },
    price: {
        required: true,
        type: Number,
    },
    quantity: {
        required: true,
        type: Number,
    },
    status: {
        required: true,
        type: Number,
    },
})

module.exports = mongoose.model('Product', productSchema)
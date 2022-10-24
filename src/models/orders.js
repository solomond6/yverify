const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    customerId: {
        required: true,
        type: String,
    },
    orderId: {
        required: true,
        type: String,
    },
    productId: {
        required: true,
        type: String,
    },
    amount: {
        required: true,
        type: Number,
    },
    status: {
        required: true,
        type: String,
    },
})

module.exports = mongoose.model('Order', orderSchema)
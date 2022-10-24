const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    customerId: {
        required: true,
        type: String,
    },
    productId: {
        required: true,
        type: String,
    },
    orderId: {
        required: true,
        type: String,
    },
    amount: {
        required: true,
        type: Number,
    },
    orderStatus: {
        required: true,
        type: String,
    },
    paymentStatus: {
        required: true,
        type: String,
    },
})

module.exports = mongoose.model('Payment', paymentSchema)
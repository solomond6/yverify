const Payment = require('../models/payments');
const { publishToQueue } = require("../services/MQService");

const processPayment = async ({ customerId, orderId, productId, amount, orderStatus, paymentStatus}) => {

  const payment = await new Payment({
            customerId,
            productId,
            orderId,
            amount,
            orderStatus,
            paymentStatus,
        }).save();
  
  let payload = [
    		            customerId,
    		            productId,
    		            orderId,
    		            amount,
    		            orderStatus,
    		            paymentStatus,
    		        ];

  await publishToQueue('payment', payload);

  return payment;
}

module.exports.processPayment = processPayment;
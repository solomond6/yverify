const Order = require('../models/orders');
const { processPayment } = require("../services/payment.service");

const saveOrder = async ({ customerId, orderId, productId, amount, status }) => {

  const order = await new Order({
            customerId,
            orderId,
            productId,
            amount,
            status
        }).save();

  orderStatus = 'pending';
  paymentStatus = 'pending';

  const payment = await processPayment({
                    customerId, orderId, productId, amount, orderStatus, paymentStatus
                });

  return payment;
}

const getOrders = async () => {
  const orders = await Order.find();
  if(!orders) throw new Error("No Order found");

  return orders
}

const getOrderById = async ({ id }) => {
  const order = await Order.findById({ id });
  if(!order) throw new Error("No order found with given Id");

  return order
}

module.exports.saveOrder = saveOrder;
module.exports.getOrders = getOrders;
module.exports.getOrderById = getOrderById;
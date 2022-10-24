const { saveOrder, getOrders, getOrderById } = require("../services/order.service");

module.exports = {

    //method to create users
    async createOrder(req, res, next) {

        try {

            const { customerId, orderId, productId, amount, status } = req.body;

            const order = await saveOrder({ customerId, orderId, productId, amount, status });   
            
            res.status(200).json({
              message: "Inserted Successfully",
              data: order,
            });
        }
        catch (error) {
            res.status(400).json({message: error.message})
        }
        
    },

    //listing all users
    async listOrders(req, res, next) {
        
        try{
             const orders = await getOrders();   
            
            res.status(200).json({
              message: "Fetched Successfully",
              data: orders,
            });
        }
        catch(error){
            res.status(500).json({message: error.message})
        }
    },


    async listOrderById(req, res, next) {
        
        try{
            const { id } = req.params;
            const order = await getOrderById({ id });   
            
            res.status(200).json({
              message: "Fetched Successfully",
              data: order,
            });
        }
        catch(error){
            res.status(500).json({message: error.message})
        }
    }

};
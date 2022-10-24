const { saveProduct, getProducts, getProductById } = require("../services/product.service");

module.exports = {

    //method to create users
    async createProduct(req, res) {

        try {
            const { name, category, price, quantity, status } = req.body;
            const product = await saveProduct({ name, category, price, quantity, status });   
            res.status(200).json({
              message: "Inserted Successfully",
              data: product,
            });
        } 
        catch(error){
            res.status(500).json({message: error.message})
        }
    },

    //listing all users
    async listProducts(req, res, next) {
        
        try{
            
            const products = await getProducts();   
            
            res.status(200).json({
              message: "Fetched Successfully",
              data: products,
            });
        }
        catch(error){
            res.status(500).json({message: error.message})
        }
    },


    async listProductById(req, res, next) {
        
        try {
            const { id } = req.params;
            const product = await getProductById({ id });   
            res.status(200).json({
              message: "Fetched Successfully",
              data: product,
            });
        }catch(error){
            res.status(500).json({message: error.message})
        }
    }
};
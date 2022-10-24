const Product = require('../models/products');

const saveProduct = async ({ name, category, price, quantity, status }) => {

  const product = await new Product({
            name,
            category,
            price,
            quantity,
            status
        }).save();

  return product;
}

const getProducts = async () => {
  const products = await Product.find();
  if(!products) throw new Error("No product found");

  return products
}

const getProductById = async ({ id }) => {
  const product = await Product.findById({ id });
  if(!product) throw new Error("No product found with given id");

  return product
}

module.exports.saveProduct = saveProduct;
module.exports.getProducts = getProducts;
module.exports.getProductById = getProductById;
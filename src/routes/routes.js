const seedUsers = [
    {
        name: 'test user',
        email: 'test@test.com',
        password: '1234567890'
    }
];

const seedProductss = [
    {
        name: 'test product 1',
        category: 'test',
        price: 10.00,
        quantity: 10,
        status: 1
    },
    {
        name: 'test product 2',
        category: 'test',
        price: 10.00,
        quantity: 10,
        status: 1
    },
    {
        name: 'test product 3',
        category: 'test',
        price: 10.00,
        quantity: 10,
        status: 1
    }
];

const seedDb = async () => {
    await User.deleteMany({});
    await User.insertMany(seedUsers);
    await Product.insertMany(seedProductss);
};

const productsController = require('../controllers').products;
const ordersController = require('../controllers').orders;
const usersController = require('../controllers').users;

module.exports = (app) => {
    app.get('/api', (req, res) => res.status(200).send({
        message: 'Welcome to the Fluid Contact API!',
    }));

    app.get('/api/products/list', productsController.listProducts);
    app.post('/api/products/create', productsController.createProduct);
    app.get('/api/products/:id', productsController.listProductById);
    
    app.get('/api/users/list', usersController.listUsers);
    app.post('/api/users/create', usersController.createUser);
    app.get('/api/users/:id', usersController.listUserById);

    app.get('/api/orders/list', ordersController.listOrders);
    app.post('/api/orders/create', ordersController.createOrder);
    app.get('/api/orders/:id', ordersController.listOrderById);
};
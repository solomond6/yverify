const User = require('../models/users');

const saveUser = async ({ name, category, price, quantity, status }) => {

  const product = await new User({
            name,
            email,
            password
        }).save();

  return product;
}

const getUsers = async () => {
  const users = await User.find();
  if(!users) throw new Error("No user found");

  return users
}

const getUserById = async ({ id }) => {
  const user = await User.findById({ id });
  if(!user) throw new Error("No user found with given Id");

  return product
}

module.exports.saveUser = saveUser;
module.exports.getUsers = getUsers;
module.exports.getUserById = getUserById;
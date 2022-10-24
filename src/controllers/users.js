const fs = require('fs');
const { saveUser, getUsers, getUserById } = require("../services/user.service");

module.exports = {

    //method to create users
    async createUser(req, res) {

        try {
            const { name, email, password } = req.body;
            const user = await saveUser({ name, email, password });   
            
            res.status(200).json({
              message: "Inserted Successfully",
              data: user,
            });
        } 
        catch(error){
            res.status(500).json({message: error.message})
        }
        
    },

    //listing all users
    async listUsers(req, res, next) {
        
        try{
            const users = await getUsers();   
            
            res.status(200).json({
              message: "Fetched Successfully",
              data: users,
            });
        }
        catch(error){
            res.status(500).json({message: error.message})
        }
    },


    async listUserById(req, res, next) {
        
        try{
            const { id } = req.params;
            const user = await getUserById({ id });   
            
            res.status(200).json({
              message: "Fetched Successfully",
              data: user,
            });
        }
        catch(error){
            res.status(500).json({message: error.message})
        }
    }

};
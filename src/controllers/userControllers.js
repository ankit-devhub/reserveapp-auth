const userModel = require('../models/user')


const addNewUser = async (req, res) => {
    try {
        console.log("post api hit for add user");
        const user = await userModel.create(req.body);
        user.save().then(() => {
            res.status(201).json(user);
        })

    }
    catch (e) {
        console.log("unable to add user : ", e);
        res.status(400).json({ data: "Bad Request" })
    }
}

const getUsers = async (req, res) => {
    try {
        console.log("get api hit");
        const users = await userModel.find();
        res.status(200).json(users);


    }
    catch (e) {
        console.log("unable to get users : ", e);
        res.status(400).json({ data: "Bad Request" })
    }
}



module.exports = { addNewUser, getUsers };
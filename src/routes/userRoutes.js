const express = require('express');
const router = express.Router();


//Imported controllers
const {addNewUser,getUsers} = require('../controllers/userControllers');




router.route('/adduser').post(addNewUser);
router.route('/users').get(getUsers);





module.exports = router;
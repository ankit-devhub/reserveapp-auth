const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  authToken: {
    type: String,
    required: true,
  },
  usertype:{
    type:String,
    default:"user",
  },
  registrationDate:{
    type:Date,
    default:Date.now
  },
  personalInfo:{
    name:{
        required:true,
        type:String
    },
    address:{
        required:false,
        type:String
    },
    phone:{
        required:false,
        type:String
    },
    email:{
        required:false,
        type:String
    },
  },
  accountInfo:{
    balance:{
        type:String,
        default:"0"
    }
  },
  config:{
    darkTheme: {
        type:Boolean,
        default:false
    }
  }
});

// Create a model using the schema

module.exports =  mongoose.model('User', userSchema,"users");

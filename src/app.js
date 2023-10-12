const express = require('express');
const app = express();



//Import Schema / Models
const userModel = require('./models/user');


//Import Routes
const user_Routes = require('./routes/userRoutes')




// Middlewares Setup
app.use('/',user_Routes);





//Database Connection
const db = require('./config/db/db')
db.on('error', () => {
  console.log('MongoDB connection error');
});
db.once('open', () => {
  console.log('Connected to MongoDB');
});



//Routes Setup



app.get('/test',(req,res)=>{
    res.send("triggered auth api")
})







module.exports = app;

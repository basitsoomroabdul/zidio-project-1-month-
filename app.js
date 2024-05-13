const app= require('express')();
const http= require('http').Server(app);

const mongoose =require('mongoose');
mongoose.connect("mongodb+srv://abasitsoomro20:<admin123>@mernprodb.cmphvy9.mongodb.net/?retryWrites=true&w=majority&appName=MERNPRODB")

const User =require('./models/userModel');

http.listen(3000, function(){
    console.log('server is running');
});
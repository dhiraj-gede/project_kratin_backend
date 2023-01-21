const express = require('express');
const app  = require('./app');
// const mongoose = require('mongoose');
const config = require('./src/config/config');

// const DB_URI = config.mongoose.url
// mongoose.set('strictQuery', false);


// mongoose.connect(DB_URI) 
// .then(()=>{
//     console.log('connection established at ' + DB_URI)
// })
// .catch(err=>console.log('connection error--> ', err))



const server = app;
const PORT = process.env.PORT
server.listen(PORT, ()=>{
    console.log('listening on port http://localhost:'+PORT);
}) 
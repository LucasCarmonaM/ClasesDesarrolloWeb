//Require config to server
require('./config/config.js');

// Require
const express = require('express');
const app = express();
const path = require('path');




app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname+'/index.html'));
  })
   
app.listen(process.env.PORT,()=>{
    console.log(`Escuchando port ${process.env.PORT}`);
})


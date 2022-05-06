const cloudinary = require("cloudinary").v2;

 let api_secret = process.env.REACT_APP_API_SECRET

 require('dotenv').config()

//initializing express
const express = require("express");
const app = express();
//setting up default port
const port = process.env.PORT || 5000;
//binding our server to a static directory
app.use(express.static("./client/build"));
//setting up a route handler
app.get("*", (req, res) => {
  res.sendFile(__dirname + "/client/build/index/html");
});
//open a connection to listen for, and respond to requests
app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});

cloudinary.config({ 
  cloud_name: 'shield-n-sheath', 
  api_key: '841471652594934', 
  api_secret: api_secret 
});
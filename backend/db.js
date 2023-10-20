const mongoose = require('mongoose');
require('dotenv').config();

//const mongoURI = "mongodb://127.0.0.1:27017/notebook";
const URI = process.env.MONGO_CLOUD_URL;

const connectToMongo = () => {
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 30000, // Set timeout to 30 seconds (default is 30 seconds)
      })
    .then(() => { 
        console.log("Database connected successfully");
    })
    .catch(err => {
        console.error(err);
    });
}

module.exports = connectToMongo;

const mongoose = require('mongoose');
const mongoURI = "mongodb://127.0.0.1:27017/notebook";
const connectToMongo = () => {
    mongoose.connect(mongoURI).then(() => { 
       console.log("database connected successfully")
    })
    .catch(err => {
        console.error(err);
    });
}
module.exports = connectToMongo;

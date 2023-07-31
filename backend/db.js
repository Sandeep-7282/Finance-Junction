const mongoose = require('mongoose');
const mongoURI = "mongodb://127.0.0.1:27017/notebook?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.1";
const connectToMongo = () => {
    mongoose.connect(mongoURI).then(() => { 
       console.log("database connected successfully")
    })
    .catch(err => {
        console.error(err);
    });
}
module.exports = connectToMongo;

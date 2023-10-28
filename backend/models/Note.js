const { default: mongoose } = require("mongoose")
const {Schema}=mongoose;
const notesSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
         ref: 'users'
       },
  title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    tag: {
        type:String,
           default:"general"
    }   ,
    date:{
      type:Date,
      default:Date.now
    }
})
  
module.exports= mongoose.model("notes", notesSchema)
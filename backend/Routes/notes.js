const express=require('express');
const router=express.Router();
const Fetchuser=require('../middlewares/Fetchuser');
const Note=require('../models/Note');
const { body, validationResult } = require('express-validator');

 router.get('/fetchallnotes',Fetchuser,async (req,res)=>{
   try{
      const notes=await Note.find({user:req.user.id});
      res.status(200).send(notes);
    }
    catch(error){
    
     res.status(500).send({error:error.message})
    }
 })
 router.post('/addnote',Fetchuser,[
   body('title','Enter valid title(characters more than 2)').isLength({ min: 3 }),
   body('description','description length must be greater than 4').isLength({ min: 5 }),
   body('tag')
], async (req, res) => {
   try{const errors = validationResult(req);
   if (!errors.isEmpty()) {
       return res.status(400).json({ errors: errors.array() });
   }
   const {title,description,tag}=req.body;
   const notes= new Note({
      title,description,tag,user:req.user.id
  })
 const savednotes=await notes.save();
  res.status(200).send(savednotes);}
  catch(error){
   res.status(500).send({error:error.message})
  }
 })

router.put('/update/:id',Fetchuser,async(req,res)=>{
   try{const errors = validationResult(req);
   if (!errors.isEmpty()) {
       return res.status(400).json({ errors: errors.array() });
   }
   const {title,description,tag}=req.body;
   let newnote={}
   if(title){
          newnote.title=title;
   }
   if(description){
      newnote.description=description}
if(tag){
   newnote.tag=tag;
}
   let note=await Note.findById(req.params.id);
   if(!note){
      return res.status(404).send("Not Found");
   }
   if(note.user.toString()!=req.user.id){
      return res.status(401).send('authentication failed');
   }
   note=await Note.findByIdAndUpdate(req.params.id,{$set:newnote},{new:true});
   res.status(200).send(note);}
   catch(error){
      
      res.status(500).send({error:error.message})
     }
})

router.delete('/delete/:id',Fetchuser,async(req,res)=>{
   try{
   let note=await Note.findById(req.params.id);
   if(!note){
      return res.status(404).send("Not Found");
   }
   if(note.user.toString()!=req.user.id){
      return res.status(401).send('authentication failed');
   }
   note=await Note.findByIdAndDelete(req.params.id);
   res.status(200).send({success:`Note with id ${req.params.id}has successfully deleted`});}
   catch(error){
  
      res.status(500).send({error:error.message})
     }
})
 module.exports=router;
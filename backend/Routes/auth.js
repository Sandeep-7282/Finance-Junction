const express=require('express');
require('dotenv').config();
const router=express.Router();
const User=require('../models/User');
const bcrypt = require('bcrypt');
const { body, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const PRIVATE_KEY = "jwttest@123";
const Fetchuser=require('../middlewares/Fetchuser');

router.post('/googlesignup', async (req, res) => {
    try{
        const saltRounds = 10;
        const salt=await bcrypt.genSalt(saltRounds);
        const securepassword=await bcrypt.hash("Googleusers",salt);
    let user=await User.findOne({email:req.body.email});
    if(!user){
        user=await User.create({
            name:req.body.name,
            email:req.body.email,
            password:securepassword
        })
    }
    const jwtdata={
        user:{
            id:user.id
        }
    }
   
  const authtoken=jwt.sign(jwtdata,PRIVATE_KEY);
  res.send({authtoken});
}

    catch(err){
        console.log(err.message)
        res.status(500).send('Internal Server Error')
    }
})

router.post('/createUser',[
    body('name','Enter valid name(characters more than 2)').isLength({ min: 3 }),
    body('email','enter valid email id').isEmail(),
    body('password','password length must be greater than 4').isLength({ min: 4 }),
] ,async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log(errors)
        return res.status(401).send({ error:"Please Fill All Fields Properly" });
    }
    try{
        const saltRounds = 10;
        const salt=await bcrypt.genSalt(saltRounds);
        const securepassword=await bcrypt.hash(req.body.password,salt);
    let user=await User.findOne({email:req.body.email});
    if(user){
       return res.status(400).send({error:'email already exists'});
    }
    user=await User.create({
        name:req.body.name,
        email:req.body.email,
        password:securepassword
    })
    const jwtdata={
        user:{
            id:user.id
        }
    }
  const authtoken=jwt.sign(jwtdata,PRIVATE_KEY);
  ;
  res.send({authtoken});
}

    catch(err){
        console.log(err.message)
        res.status(500).send({error:'Internal Server Error'})
    }
})

router.post('/login', [
     body('email','enter valid email id').isEmail(),
    body('password','password cant be blank').exists()
], async (req, res) => {
   
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).send({ error: "Please Fill in All Fields" });
    }
    try{
    const {email,password}=req.body;
    let user=await User.findOne({email});
    if(!user){
       return res.status(400).send({error:'Invalid User'});
    }
const passwordcompare=await bcrypt.compare(password,user.password);
if(!passwordcompare){
    return res.status(400).send({error:'Invalid Login Credentials'});
}
    const jwtdata={
        user:{
            id:user.id
        }
    }
  const authtoken=jwt.sign(jwtdata,PRIVATE_KEY);
  res.send({authtoken});
} catch(err){
    
        console.log(err.message)
        res.status(500).send('Some error occured')
    }
})

router.post('/getuser',Fetchuser,async (req,res)=>{
       try{
         id=req.user.id;
         const user=await User.findById(id).select('-password');
         res.status(200).send(user);
       }
       catch(error){
        console.log(error.message)
        res.status(500).send({error:'Some error occured'})
       }
})
module.exports = router;
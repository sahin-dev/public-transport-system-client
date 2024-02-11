
const User = require('../models/userModel')
const createError = require('http-errors');
const generateToken = require('../utils/generateToken');
const jwt = require('jsonwebtoken');

const getUser =  async(req,res,next)=>{
    res.json(req.user);
}

const loginUser = async(req,res,next)=>{
    const {email, password} = req.body;
    const user = await User.findOne({email});

    if(user && user.matchPassword(password)){
        res.json({id:user._id,name:user.name,email:user.email,token:generateToken(user._id)});
    }else{
        next(createError(401,"Invalid email or password"));
    }
}
const registerUser = async(req,res,next)=>{
    const {name,email,password,nid,dob} = req.body;
    const existUser = await User.findOne({email});
    
    if(existUser){
        next(createError(409, `User already exist with this email: ${email}`))
        return;
    }
    const user = await User.create({name,email,password,nid,birth_date:Date(dob)});
    res.json(user);
}
module.exports = {getUser,loginUser,registerUser};
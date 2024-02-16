const User = require('../models/userModel');
const Vehicle = require('../models/vehicleModel');

const assignDriver = async(req,res,next)=>{};
const assignSuperviser = async(req,res,next)=>{};
const addVehicle = async(req,res,next)=>{};
const removeVehicle = async(req,res,next)=>{};
const editVehicle = async(req,res,next)=>{};
const changeStatus = async(req,res,next)=>{};
const requestWithdraw = async(req,res,next)=>{};
const addBank = async(req,res,next)=>{};

module.exports = {assignDriver, assignSuperviser, addVehicle, removeVehicle, editVehicle, changeStatus, requestWithdraw, addBank};
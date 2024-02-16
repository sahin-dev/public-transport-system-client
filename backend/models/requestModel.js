const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
    user:{
        type:Object,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    isResolved:{
        type:Boolean,
        required:true,
        default:false
    }
},{
    timestamps:true
});

const Request = mongoose.model("Request", requestSchema);

module.exports = Request;
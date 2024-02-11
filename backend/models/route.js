const mongoose = require('mongoose');

const RouteSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    list:{
        type:Object,
        required:true
    }
})

const Route = mongoose.model("Route", RouteSchema);
module.exports = Route;
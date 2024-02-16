
const mongoose = require('mongoose');


const vehicleSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    desc:{
        type:String
    },

    number:{
        type:String,
        required:true
    },
    status:{
        type:Number,
        required:true,
        default:1
    },
    owner:{
        type:Object,
        required:true,
    },
    route:{
        type:Object,
        required:true,
    },
    supervisor:{
        type:Object,
        required:false,
    },
    driver:{
        type:Object,
        required:false,
    },
},
{
    timestamps:true
}
)

vehicleSchema.methods.getRoute = function(){
    return this.route;
}
vehicleSchema.pre('save',function(next){
    if(!this.isModified('name')){
        next();
    }
    this.name = this.name+"-"+this.number;
});

const Vehicle = mongoose.model("Vehicle", vehicleSchema);
module.exports = Vehicle;
const mongoose = require('mongoose');
const OwnTourPackageSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    passportNumber:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    places:{
        type:String,
        required:true
    },
    activities:{
        type:String,
        required:true
    },
    vehicle:{
        type:String,
        required:true
    },
    hotel:{
        type:String,
        required:true
    },
    NumOfTravellers:{
        type:Number,
        required:true
    },
    tourGuide:{
        type:String,
        required:true
    }
});
module.exports = mongoose.model('OwnTourPackages',OwnTourPackageSchema);



const mongoose=require('mongoose');
const TourPackagesSchema= new mongoose.Schema({
    tourPackageName:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    days:{
        type:Number,
        required:true
    },
    hotels:{
        type:String,
        required:true
    },
    visitingPlaces:{
        type:String,
        required:true
    },
    activities:{
        type:String,
        required:true
    },
    schedule:{
        type:String,
        required:true
    },
});

module.exports = mongoose.model('TourPackages', TourPackagesSchema);

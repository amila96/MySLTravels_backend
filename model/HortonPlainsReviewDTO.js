const mongoose = require('mongoose');
const HortonPlainsReviewSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    comment:{
        type:String,
        required:true
    }
});
module.exports = mongoose.model('HortonPlainsReview',HortonPlainsReviewSchema);



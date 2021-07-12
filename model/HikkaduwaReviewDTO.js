const mongoose = require('mongoose');
const HikkaduwaReviewSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    comment:{
        type:String,
        required:true
    }
});
module.exports = mongoose.model('HikkaduwaReview',HikkaduwaReviewSchema);



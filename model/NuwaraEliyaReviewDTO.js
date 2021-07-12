const mongoose = require('mongoose');
const NuwaraEliyaReviewSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    comment:{
        type:String,
        required:true
    }
});
module.exports = mongoose.model('NuwaraEliyaReview',NuwaraEliyaReviewSchema);



const mongoose = require('mongoose');
const BentotaReviewSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    comment:{
        type:String,
        required:true
    }
});
module.exports = mongoose.model('BentotaReview',BentotaReviewSchema);



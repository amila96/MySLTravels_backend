const mongoose = require('mongoose');
const EllaReviewSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    comment:{
        type:String,
        required:true
    }
});
module.exports = mongoose.model('EllaReview',EllaReviewSchema);



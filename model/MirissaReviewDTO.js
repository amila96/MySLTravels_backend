const mongoose = require('mongoose');
const MirissaReviewSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    comment:{
        type:String,
        required:true
    }
});
module.exports = mongoose.model('MirissaReview',MirissaReviewSchema);



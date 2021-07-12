const mongoose = require('mongoose');
const GalleFortReviewSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    comment:{
        type:String,
        required:true
    }
});
module.exports = mongoose.model('GalleFortReview',GalleFortReviewSchema);



const mongoose = require('mongoose');
const KalpitiyaReviewSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    comment:{
        type:String,
        required:true
    }
});
module.exports = mongoose.model('KalpitiyaReview',KalpitiyaReviewSchema);



const NuwaraEliyaReviewDTO= require('../model/NuwaraEliyaReviewDTO');

const saveReview = (req, resp) => {
    try {

        console.log(req.body);

        const nuwaraEliyaReview = new NuwaraEliyaReviewDTO({
            name: req.body.name,
            comment: req.body.comment
        });

        nuwaraEliyaReview.save().then(result => {
            resp.status(200).json({message: 'successfully submitted the comment'});
        }).catch(exception => {
            console.log(exception);
            resp.status(500).json({error: exception});
        });


    } catch (e) {/*JSON*/
        /*resp.status(500).json(e);*/
        resp.status(500).json({error: e});
    }
}

const getAllReviews = (req, resp) => {
    try {
        // pagination
        NuwaraEliyaReviewDTO.find().then(result => {

            resp.status(200).json({dataSet: result});

        }).catch(exception => {
            resp.status(500).json({error: exception});
        })

    } catch (e) {/*JSON*/
        /*resp.status(500).json(e);*/
        resp.status(500).json({error: e});
    }
}
module.exports = {
    saveReview,getAllReviews
}

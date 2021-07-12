const BentotaReviewDTO= require('../model/BentotaReviewDTO');

const saveReview = (req, resp) => {
    try {

        console.log(req.body);

        const bentotaReview = new BentotaReviewDTO({
            name: req.body.name,
            comment: req.body.comment
        });

        bentotaReview.save().then(result => {
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
        BentotaReviewDTO.find().then(result => {

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

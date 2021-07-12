const OwnTourPackageDTO= require('../model/OwnTourPackageDTO');

const saveOwnTourpackage = (req, resp) => {
    try {

        console.log(req.body);

        const ownTourPackage = new OwnTourPackageDTO({
            name: req.body.name,
            passportNumber: req.body.passportNumber,
            email: req.body.email,
            country: req.body.country,
            date: req.body.date,
            places: req.body.places,
            activities: req.body.activities,
            vehicle: req.body.vehicle,
            hotel: req.body.hotel,
            NumOfTravellers: req.body.NumOfTravellers,
            tourGuide: req.body.tourGuide
        });

        ownTourPackage.save().then(result => {
            resp.status(200).json({message: 'We will send you an email of confirmation'});
        }).catch(exception => {
            console.log(exception);
            resp.status(500).json({error: exception});
        });


    } catch (e) {/*JSON*/
        /*resp.status(500).json(e);*/
        resp.status(500).json({error: e});
    }
}
const deleteOwnTourPackage = (req, resp) => {
    try {

        OwnTourPackageDTO.deleteOne({_id: req.headers.id}).then(result => {

            if (result.deletedCount > 0) {
                resp.status(200).json({message: 'Deleted!'});
            } else {
                resp.status(500).json({message: 'Try Again!'});
            }

        }).catch(error => {
            resp.status(500).json({error: error});
        })

    } catch (e) {
        resp.status(500).json({error: e});
    }
}
const getAllOwnTourPackages = (req, resp) => {
    try {
        // pagination
        OwnTourPackageDTO.find().then(result => {

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
    saveOwnTourpackage,deleteOwnTourPackage,getAllOwnTourPackages
}

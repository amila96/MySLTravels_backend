const TourPackageDTO = require('../model/TourPackageDTO');

const saveTourPackage = (req, resp) => {
    try {

        console.log(req.body);

        const tourPackage = new TourPackageDTO({
            tourPackageName: req.body.tourPackageName,
            description: req.body.description,
            days: req.body.days,
            hotels: req.body.hotels,
            visitingPlaces: req.body.visitingPlaces,
            activities: req.body.activities,
            schedule: req.body.schedule
        });

        tourPackage.save().then(result => {
            resp.status(200).json({message: 'Successfully save the tour package!'});
        }).catch(exception => {
            console.log(exception);
            resp.status(500).json({error: exception});
        });


    } catch (e) {/*JSON*/
        /*resp.status(500).json(e);*/
        resp.status(500).json({error: e});
    }
}

const updateTourPackage = (req, resp) => {
    TourPackageDTO.updateOne({_id: req.body.id}, {
        $set: {
            tourPackageName: req.body.tourPackageName,
            description: req.body.description,
            days: req.body.days,
            hotels: req.body.hotels,
            visitingPlaces: req.body.visitingPlaces,
            activities: req.body.activities,
            schedule: req.body.schedule
        }
    }).then(result => {
        console.log(req.body.id);
        if (result.nModified>0) {
            resp.status(200).json({message: 'Updated!'});
        } else {
            resp.status(500).json({message: 'Try Again!'});
        }

    }).catch(error => {
        console.log(error);
        resp.status(500).json({error: error});
    })
}
const deleteTourPackage = (req, resp) => {
    try {

        TourPackageDTO.deleteOne({_id: req.headers.id}).then(result => {

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
const getTourPackage = (req, resp) => {

}
const getAllTourPackages = (req, resp) => {
    try {
        // pagination
        TourPackageDTO.find().then(result => {

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
    saveTourPackage, updateTourPackage, deleteTourPackage, getTourPackage, getAllTourPackages
}

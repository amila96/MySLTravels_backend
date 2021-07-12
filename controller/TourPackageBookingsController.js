const TourPackageBookingsDTO= require('../model/TourPackageBookingsDTO')

const saveTpBooking=(req,resp)=>{
    try {
        console.log(req.body);

        const tourPackageBookings=new TourPackageBookingsDTO({
            name: req.body.name,
            passportNumber: req.body.passportNumber,
            email: req.body.email,
            country: req.body.country,
            language: req.body.language,
            vehicleType: req.body.vehicleType,
            numberOfTravellers: req.body.numberOfTravellers,
            date: req.body.date,
            hotelRoomType: req.body.hotelRoomType,
            numberOfRooms: req.body.numberOfRooms,
            tourGuide: req.body.tourGuide
        });

        tourPackageBookings.save().then(result=>{
            resp.status(200).json({message:'We will send you an email of confirmation'});
        }).catch(exception=>{
            console.log(exception);
            resp.status(500).json({error:exception});
        });
    }catch (e){
        resp.status(500).json({error:e});
    }
}

/*const deleteTpBooking=(req, resp)=>{
    try {

        TourPackageBookingsDTO.deleteOne({_id: req.headers.id}).then(result => {

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
}*/
const deleteTpBooking = (req, resp) => {
    try {

        TourPackageBookingsDTO.deleteOne({_id: req.headers.id}).then(result => {

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

const getAllTpBookings = (req,resp)=>{
    try{
        TourPackageBookingsDTO.find().then(result=>{
            resp.status(200).json({dataSet: result});
        }).catch(exception=>{
            resp.status(500).json({error:exception});
        })
    }catch(e){
        resp.status(500).json({error: e});
    }
}

module.exports={
    saveTpBooking,deleteTpBooking,getAllTpBookings
}

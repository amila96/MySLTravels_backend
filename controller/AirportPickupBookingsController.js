const AirportPickupBookingDTO= require('../model/AirportPickupBookingsDTO')

const saveAirBooking=(req,resp)=>{
    try {
        console.log(req.body);

        const airportPickupBookings=new AirportPickupBookingDTO({
            name: req.body.name,
            passportNumber: req.body.passportNumber,
            email: req.body.email,
            numberOfPassengers: req.body.numberOfPassengers,
            vehicleType: req.body.vehicleType,
            date: req.body.date,
            time: req.body.time,
            location: req.body.location,
            distance: req.body.distance
        });

        airportPickupBookings.save().then(result=>{
            resp.status(200).json({message:'We will send you an email of confirmation'});
        }).catch(exception=>{
            console.log(exception);
            resp.status(500).json({error:exception});
        });
    }catch (e){
        resp.status(500).json({error:e});
    }
}

const deleteAirBooking=(req, resp)=>{
    try {

        AirportPickupBookingDTO.deleteOne({_id: req.headers.id}).then(result => {

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

const getAllAirBookings = (req,resp)=>{
    try{
        AirportPickupBookingDTO.find().then(result=>{
            resp.status(200).json({dataSet: result});
        }).catch(exception=>{
            resp.status(500).json({error:exception});
        })
    }catch(e){
        resp.status(500).json({error: e});
    }
}
module.exports={
    saveAirBooking,deleteAirBooking,getAllAirBookings
}

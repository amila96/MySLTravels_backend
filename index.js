const express= require('express');
const mongoose= require('mongoose');
const cors= require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

//--------------------------------
const AdminUserRoute = require('./routes/AdminUserRoute');
const ContactUsMessageRoute= require('./routes/ContactUsMessageRoute');
const AirportPickupBookingRoute= require('./routes/AirportPickupBookingsRoute');
const BentotaReviewRoute= require('./routes/BentotaReviewRoute');
const EllaReviewRoute= require('./routes/EllaReviewRoute');
const GalleFortReviewRoute= require('./routes/GalleFortReviewRoute');
const HikkaduwaReviewRoute= require('./routes/HikkaduwaReviewRoute');
const HortonPlainsReviewRoute= require('./routes/HortonPlainsReviewRoute');
const KalpitiyaReviewRoute= require('./routes/KalpitiyaReviewRoute');
const MirissaReviewRoute= require('./routes/MirissaReviewRoute');
const NuwaraEliyaReviewRoute= require('./routes/NuwaraEliyaReviewRoute');
const TourPackageRoute= require('./routes/TourPackageRoute');
const TourPackageBookingRoute= require('./routes/TourPackageBookingsRoute');
const OwnTourPackageRoute= require('./routes/OwnTourPackageRoute');

//--------------------------------

//const app = express();
//app.use(cors());
//app.use(bodyParser())

const app = express();
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(cors())

mongoose.connect(
    'mongodb://127.0.0.1:27017/MySLTravels',
    //jason objects
    {
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useFindAndModify:false,
        useCreateIndex:true
    }
).then(()=>{
    app.listen(3000, ()=>{
        console.log('MySLTravels service Stared on port 3000');
    })
}).catch((error)=>{
    console.log(error);
});

//------------------------------
app.use('/api/v1/adminUserRoute', AdminUserRoute);
app.use('/api/v1/contactUsMessageRoute', ContactUsMessageRoute);
app.use('/api/v1/airportPickupBookingRoute', AirportPickupBookingRoute);
app.use('/api/v1/bentotaReviewRoute', BentotaReviewRoute);
app.use('/api/v1/ellaReviewRoute', EllaReviewRoute);
app.use('/api/v1/galleFortReviewRoute', GalleFortReviewRoute);
app.use('/api/v1/hikkaduwaReviewRoute', HikkaduwaReviewRoute);
app.use('/api/v1/hortonPlainsReviewRoute', HortonPlainsReviewRoute);
app.use('/api/v1/kalpitiyaReviewRoute', KalpitiyaReviewRoute);
app.use('/api/v1/mirissaReviewRoute', MirissaReviewRoute);
app.use('/api/v1/nuwaraEliyaReviewRoute', NuwaraEliyaReviewRoute);
app.use('/api/v1/tourPackageRoute', TourPackageRoute);
app.use('/api/v1/tourPackageBookingRoute', TourPackageBookingRoute);
app.use('/api/v1/ownTourPackageRoute', OwnTourPackageRoute);


//------------------------------

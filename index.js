const express= require('express');
const mongoose= require('mongoose');
const cors= require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

//--------------------------------
const AdminUserRoute = require('./routes/AdminUserRoute');
const ContactUsMessageRoute= require('./routes/ContactUsMessageRoute');
const AirportPickupBookingRoute= require('./routes/AirportPickupBookingsRoute');
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
//------------------------------

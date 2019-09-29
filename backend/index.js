const express = require('express');
const app = express();
const dotenv = require('dotenv')
const mongoose = require('mongoose');
// IMPORT ROUTES
const authRoute = require('./routes/auth')
const checkUser = require('./routes/checkuser')

dotenv.config();
// CONNECT TO DB
const url = process.env.MONGOLAB_URI;
mongoose.connect(
    url,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
        console.log("Connect to DB");
    }
);

// MIDDLEWARE
app.use(express.json());
// ROUTES MIDDLEWARE
app.use('/api/user', authRoute);
app.use('/api/user', checkUser);


app.listen(5000, () => console.log("Started on 5000"));
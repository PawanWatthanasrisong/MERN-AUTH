const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const router = require('./routes/authRoutes.js');
const {mongoose} = require('mongoose');
const app = express();
const cookieParser = require('cookie-parser');

//database connection
mongoose.connect(process.env.MONGO_URL)
    .then(()=> console.log('Database Connected'))
    .catch((err)=> console.log('Database not connected', err))

//middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: false}));

app.use('/', router);

const PORT = process.env.PORT || 8000;

app.listen(PORT, ()=> console.log(`Server is running on Port ${PORT}`));
const express = require('express');
const dotenv = require('dotenv');
const bodyparser = require('body-parser');
const path = require('path');
const connectDB = require('./server/database/connection');

const app = express();

dotenv.config({path:'config.env'});
const PORT = process.env.PORT || 8000;

// mongodb connection
connectDB();

//parsing request to body-parse
app.use(bodyparser.urlencoded({extended:true}));

//setting view engine
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, "views"));

//loading public assets
app.use('/css', express.static(path.resolve(__dirname, "public/assets/css")));
app.use('/js', express.static(path.resolve(__dirname, "public/assets/js")));
app.use('/img', express.static(path.resolve(__dirname, "public/assets/img")));

//load Routes
app.use('/', require('./server/routes/router'));

app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`)});
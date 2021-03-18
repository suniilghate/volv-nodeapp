const express = require('express');
const morgan = require('morgan');
const route = express.Router();

const services = require('../services/render');
const userController = require('../controller/usercontroller'); 
const { exists } = require('../model/usermodel');

//Home User Route 
route.get('/', services.homeUserRoutes);

//Add User Route
route.get('/add-user', services.addUserRoutes);

//Update User Route
route.get('/update-user', services.updateUserRoutes)

//logging the request
route.use(morgan('tiny'));

// API
route.post('/api/users', userController.create);
route.get('/api/users', userController.find);
route.put('/api/users/:id', userController.update);
route.delete('/api/users/:id', userController.delete);

module.exports = route;
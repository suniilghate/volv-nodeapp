const axios = require('axios');

exports.homeUserRoutes = (req, res) => {
    // Make a get request to /api/users
    axios.get('http://localhost:3000/api/users')
        .then(function(response){
            res.render('users/index', { users : response.data});
        })
        .catch(err => {
            res.send(err);
        });
}

exports.addUserRoutes = (req, res) => {
    res.render('users/add_user');
}

exports.updateUserRoutes = (req, res) => {
    axios.get('http://localhost:3000/api/users', { params : { id : req.query.id }})
        .then(function(userdata){
            res.render('users/update_user', { user : userdata.data});
        })
        .catch(err => {
            res.send(err);
        })
        
}
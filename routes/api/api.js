var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/hello', function(req, res, next) {
  // res.render('index', { title: 'Express' });
    res.json({"response": "success"});
});


function login(username, password)
{
    var query = "SELECT * FROM users WHERE username=" + username + " AND password=" +password;

    // perform sql command

    // if we found a row
        // return true
    // return false


    return true;
}

// create account
router.post('/user', function(req, res, next) {
    res.json({"status": "success"});
}

router.post('/login', function(req, res, next) {
    var username = req.body.username;
    var password = req.body.password;

    var status = login(username, password);

    // console.log(username);
    // console.log(req.body);
    // res.json({"response": "success"});
    // res.send(req.body);
    // res.json(username);
    // res.send(username);


    res.send(username);
});

// updates username
router.put('/user/name', function(req, res, next) {
    res.json({"status": "error"});
}

module.exports = router;

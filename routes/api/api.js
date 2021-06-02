var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/hello', function(req, res, next) {
  // res.render('index', { title: 'Express' });
    res.json({"response": "success"});
});


router.post('/login', function(req, res, next) {
    var username = req.body.username;
    console.log(username);
    console.log(req.body);
    // res.json({"response": "success"});
    // res.send(req.body);
    // res.json(username);
    // res.send(username);
    res.send(username);

});

module.exports = router;

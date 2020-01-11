const router = require('express').Router();
let Messages = require('../models/messages.model');

router.route('/').get((req, res) => {
   Messages.find()
    .then(doc => res.json({name: "John", age: 31, city: "New York"}) )
    .catch(err => res.status(400).json('Error: ' + err));
   
});


module.exports = router;
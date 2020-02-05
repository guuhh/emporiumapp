var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var bear = require('./models/bear');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true},{ useUnifiedTopology: true});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


var port = process.env.PORT || 8080;

var router = express.Router();

router.get('/thing', function(req, res) {
      res.json({message: 'está funcionando!'})
});


app.use('/some', router);

app.listen(port);

console.log('A Magica acontece na porta '+ port);


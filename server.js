// server.js

// set up ======================================================================
// get all the tools we need
var express  = require('express');
var app      = express();
var port     = process.env.PORT || 8080;
var mongoose = require('mongoose');
var passport = require('passport');
var flash    = require('connect-flash');

var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');

var configDB = require('./config/database.js');
var path = require('path');

// configuration ===============================================================
mongoose.connect(configDB.url); // connect to our database

require('./config/passport')(passport); // pass passport for configuration

// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));

// required for passport
app.use(session({
    secret: 'ilovescotchscotchyscotchscotch', // session secret
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// routes ======================================================================
require('./app/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport
var Board = require('./app/models/board');
var BoardId = require('./app/models/boardId');

app.get('/board/:id', function(req,res) {
    Board.findOne({_id: req.params.id}, function(err, results) {
      //res.send("work");
      //res.json(results)
    res.render('board');
  });
});
//косячок
app.get('/boardid', function(req,res) {
    BoardId.find(function(err, results) {
      //res.send("work");
      //res.json(results)
        res.json(results);
  });
});
app.put('/boardid', function(req, res) {
    //var query = {_id: [req.params.id]};
	var body = req.body;
    BoardId.findOneAndUpdate({_id: '58f079828cb8ea390cc29392'}, req.body, function (err, place) {
        res.json(place);
    });
});

// launch ======================================================================
app.listen(port);
console.log('The magic happens on port ' + port);

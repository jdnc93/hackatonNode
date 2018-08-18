var express  = require('express');
var app      = express();   
var cors = require('cors');

var morgan = require('morgan');             // log requests to the console (express4)
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
app.use(cors());
app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ limit: '5mb', extended: false }));
app.use(express.static(__dirname + '/client'));                 // set the static files location /public/img will be /img for users
app.use(morgan('dev'));                                         // log every request to the console


app.use(methodOverride());
global.dbContext = {};
require('./mysqlconf');
// configuration =================
require('./modules/faceRecog/routes/faceRecog.routes')(app);
require('./modules/user/routes/user.routes')(app);


// listen (start app with node server.js) ======================================
app.listen(8080);

console.log("App listening on port 8080");
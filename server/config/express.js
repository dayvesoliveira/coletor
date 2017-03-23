var express 	= require('express')
    ,app 		= express()
    ,bodyParser = require('body-parser')
    ,routes 	= require('../routes');

app.use(express.static('../app'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

routes(app);

module.exports = app;
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

var PORT = process.env.PORT || 3002

// boilerplate body parser set up

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'app')));

// require function and passing app through argument
require('/routing/apiRoutes.js')(app);
require('/routing/htmlRoutes.js')(app);
// language to confirm server is live and listening

app.listen(PORT, function() {
    console.log('App is listening on port: ' + PORT)
});
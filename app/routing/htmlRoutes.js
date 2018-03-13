var path = require('path');

module.exports = function(app) {
//    get request hanlder for root / catch all
app.get('/', function(req, res) {
    res.sendFile(path.join(_dirname, './public/home.html'))
});

app.get('/survey', function(req, res){
    res.sendFile(path.join(_dirname, './public/survey.html'))
})
}
// get request to route to survey

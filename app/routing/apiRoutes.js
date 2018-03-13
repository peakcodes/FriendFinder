
module.exports = function(app) {

app.get('/api/friends', function(req, res) {
    res.send(data);
})

app.post('/api/friends', function(req, res) {
    var friends = req.body

    data[].push(friends);
})
}

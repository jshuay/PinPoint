module.exports = function(app){
    app.get('/places', function(req, res) {
        res.render('places');
    });
    app.get('/friends', function(req, res) {
        res.render('friends');
    });
};
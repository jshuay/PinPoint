module.exports = function(app){
    app.get('/signup', function(req, res) {
        res.render('sign_up');
    });
};
module.exports = function(app){
    app.get('/', function(req, res) {
        res.render('signin');
    });

    app.get("/test", function(req, res) {
        var i = 13;
        res.writeHead(200);
        res.write(i+"");
        res.end();
    });
};
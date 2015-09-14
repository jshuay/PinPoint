var Parse = require("node-parse-api").Parse;
var bodyParser = require('body-parser');
var parse = new Parse("suUtPe310db8ZhAblV0911lcI45QHVbeghuPIHLy", "KgZ504XbjxuDZmm0kgdYRSZdY0AuFqwinBEINFPJ");
module.exports = function(app){
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.get('/home', function(req, res) {
        res.render('index');
    });

    // app.post('/toHomeName', function(req, res) {
    //     var name = req.body.name;
    //     console.log(name);
    // });

    app.post('/toParse', function(req, res) {
        var lat = parseFloat(req.body.lat);
        var lon = parseFloat(req.body.long);
        var name = req.body.name;
        parse.insert("Location", {"user": name, "hashtag": "lol", "latitude": lat, "longitude": lon}, function(err, res) {
            console.log(res);
        });
        res.writeHead(200);
        res.end();
    });
};
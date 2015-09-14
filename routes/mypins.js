var Parse = require("node-parse-api").Parse;
var bodyParser = require('body-parser');
var parse = new Parse("suUtPe310db8ZhAblV0911lcI45QHVbeghuPIHLy", "KgZ504XbjxuDZmm0kgdYRSZdY0AuFqwinBEINFPJ");
module.exports = function(app, server){
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));

    // app.post('/query', function(req, res) {
    //     var cookie = req.headers.cookie;
    //     var name = cookie.substring(cookie.indexOf("name=") + 5);
    //     parse.find("Location", {where: {user: name}}, function(err, response) {
    //         res.json(response)
    //         res.send(response);
    //     });
    // });

    app.get('/mypins', function(req, res) {
        res.render('mypins');
    });
};
var http = require('http');
var express = require('express');
var ngrok = require('ngrok');

var app = express();
// http.createServer(app).listen(1331);
// ngrok.connect(function(err, url) {});
// ngrok.connect({proto: 'http', addr: 1331, authtoken: 'wanss5XMnvM91eRyiYYB_7uV4hKHPxWVWNRfmMRPMd'}, function(err, url) {
// });
var server = app.listen(1331, function() {
    var host = server.address().address;
    var port = server.address().port;
});

require('./routes/index')(app);
require('./routes/signup')(app);
require('./routes/places')(app);
require('./routes/home')(app);
require('./routes/explore')(app);
require('./routes/mypins')(app);
require('./config')(app);

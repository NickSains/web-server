var express = require('express');
var app = express();
var port = 3000;

var middleware = {
	requireAuthentication: function (req, res, next) {
		console.log('private route hit!');
		next();
	},
	logger: function (req, res, next) {
		// new Date().toString()
		console.log('request: ' + new Date().toString() + req.method + ' ' + req.originalURL);
		
		next();
	}
};

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function (req, res) {
	res.send('About Us!');
});

app.use(express.static(__dirname + '/public'));


app.listen(port, function () {
	console.log('Express server started on port number ' + port);
});
// use module exports to expose middleware

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

module.exports = middleware;


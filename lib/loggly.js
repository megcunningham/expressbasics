var loggly = require('loggly');



function logger(tag) {
	var client = loggly.createClient({
		token: '',
		subdomain: '',
		tags: ['NodeJS', tag],
		json: true
	});
};


module.exports = logger;
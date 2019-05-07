const proxy = require('http-proxy-middleware');
module.exports = function(app) {
	app.use(proxy('/api', {
		target: 'http://localhost:8080/',
		pathRewrite: {
			"^/api": "/"
		}
	}));
	//     app.use(proxy('/socket', {
	//         target: 'ws://localhost:6600',
	//         ws: true,
	//         pathRewrite: {
	//             "^/socket": "/"
	//         }
	//     }));
	// app.use(proxy('/auth', {
	//     target: 'http://127.0.0.1:4002/',
	//     pathRewrite: {
	//         "^/auth": "/"
	//     }
	// }));
};

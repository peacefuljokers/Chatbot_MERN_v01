const { createProxyMiddleware } = require('http-proxy-middleware');

//route /api to backend server
module.exports = function(app) {
    app.use(createProxyMiddleware("/api",{ target: "http://localhost:5000" }));
};
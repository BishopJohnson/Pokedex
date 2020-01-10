const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    proxy({
      target: 'https://pokedex-server.appspot.com',
      changeOrigin: true
    })
  );
};

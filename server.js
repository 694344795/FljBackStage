var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.js');

var server = new WebpackDevServer(webpack(config), {
  stats: config.devServer.stats,
  hot: true,
  publicPath: config.output.publicPath,

});

server.listen(555, 'localhost', function(err, result) {
  if (err) {
    return console.log(err);
  }
  return console.log('listening at locahost:555...');
})

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

var path = require('path');
var express = require('express');
var app = express();

//tw
var twRouter = require('./server/nodeServer/twrouter')
twRouter.router(app);

//dh
var dhRouter = require('./server/nodeServer/dhrouter')
dhRouter.router(app);

//app.use(express.static(path.join(__dirname,'/')));
var zbRouter = require('./server/nodeServer/zbrouter')
zbRouter.router(app);

var appServer = app.listen(888, function(){
    console.log(appServer.address());
})
var express = require('express');
var path = require('path');
var url = require('url');
var bodyParser = require('body-parser');
var sql = require('./sql');
var urlencodedParser = bodyParser.urlencoded({
	extended: false
})


exports.router = function(app) {
//  app.use(express.static(path.join(path.resolve(__dirname, '../') + '/')))
    app.get('/buylist', function(request, response) {
        sql.get({
            'DatabaseName': 'fanlestreet',
            'TableName': 'relation'
        }, function(err, data) {
            console.log(data);
            response.send(data);
        })
    });


}

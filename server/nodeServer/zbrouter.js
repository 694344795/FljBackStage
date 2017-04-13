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
    app.post('/buylist', urlencodedParser ,function(request, response) {
    	console.log(request.body);
    	console.log( request.body.id);
    	if (request.body.id != undefined) {
    		sql.delete({
    			'DatabaseName':'fanlestreet',
    			'TableName':'relation',
    			'Condition':'buyid='+request.body.id
    			},function(err,data){
    				console.log("删除成功");
    				response.send(data);
    			})
    	} else{
    		sql.get({
            'DatabaseName': 'fanlestreet',
            'TableName': 'relation'
	        }, function(err, data) {
	            console.log(data);
	            response.send(data);
	        })
    	}
    	console.log(request.body);
    });
	app.post('/buylist2', urlencodedParser ,function(request, response) {
		console.log(request.body);
		console.log('UPDATE relation SET room_id="'+request.body.roomid+'" userid="'+request.body.userid+'" buynum="'+request.body.buynum+'" time="'+request.body.time+'" WHERE buyid="'+request.body.buyid+'"');
		sql.updata({
			'DatabaseName':'fanlestreet',
			'Condition':'UPDATE relation SET room_id="'+request.body.roomid+'", userid="'+request.body.userid+'", buynum="'+request.body.buynum+'", time="'+request.body.time+'" WHERE buyid="'+request.body.buyid+'"',
			},function(err,data){
				
			})
	})

}

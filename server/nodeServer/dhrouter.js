var express = require('express');
var path = require('path');
var sql = require('./sql');

exports.router = function(app) {
    app.use(express.static(path.join(path.resolve(__dirname, '../') + '/')))
    // console.log(path.resolve(__dirname, '../'));
    app.get('/use', function(request, response) {
        sql.get({
            'DatabaseName': 'fanlestreet',
            'TableName': 'use_info'
        }, function(err, data) {
               console.log(data);
            response.send(data)
        })
    });

    //页面数据修改后，存入数据库
     app.get('/usechange', function(request, response) {
        if(request.query.useId){
            console.log("UPDATE use_info SET login_name=" + request.query.useName +" WHERE m_id="+request.query.useId);
            //更新数据库
            sql.updata({
                'DatabaseName': 'fanlestreet',
                'TableName': 'use_info',
                'Condition':"UPDATE use_info SET login_name='"+request.query.useName+"' WHERE m_id="+request.query.useId
            }, function(err, data) {
                response.send()
            })
        }
                //添加数据
        if(!request.query.useId){
            console.log(request.query.usename);
            sql.insert({
                'DatabaseName': 'fanlestreet',
                'TableName': 'use_info',
                "data":{
                "login_name":request.query.usename,
                "group":request.query.usegroup,
                "buil_time":request.query.createTime,
                "on_time":request.query.createTime
            }
            }, function(err, data) {
                response.send()
            })
        }

    });

     //删除数据
    app.get('/useDel', function(request, response) {
        console.log(request.query)
        // console.log(request.query.m_id)
        if(request.query.m_id){
            sql.delete({'DatabaseName':'fanlestreet','TableName':'use_info','Condition':'m_id='+request.query.m_id+''},function(res,data){response.send('{"state":true}')})
        }
    });
}

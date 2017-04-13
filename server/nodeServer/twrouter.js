var express = require('express');
var path = require('path');
var sql = require('./sql');

exports.router = function(app) {
    app.use(express.static(path.join(path.resolve(__dirname, '../') + '/')))
    app.get('/product', function(request, response) {
        if(request.query.type !='search'){
        sql.get({
            'DatabaseName': 'fanlestreet',
            'TableName': 'goods'
          }, function(err, data) {
                  var datas = JSON.stringify(data)
                  response.send(datas);
                })
        }

            if(request.query.type =='change'){
               var upData = request.query.dataVal;
                sql.updata({
                  'DatabaseName':'fanlestreet',
                  'Condition':'UPDATE goods SET name="'+upData[1]+'" ,price="'+upData[2]+'",discount="'+upData[3]+'",discount="'+upData[3]+'",map="'+upData[4]+'",phone="'+upData[5]+'",star="'+upData[6]+'",message="'+upData[7]+'",src="'+upData[8]+'",status="'+upData[9]+'" WHERE goodsid="'+upData[0]+'"'},function(err,data){
               
                  })
            }


           if(request.query.type =='delete'){
              console.log(request.query)
               var upData = request.query.dataVal;
               console.log(upData)
                sql.delete({'DatabaseName':'fanlestreet','TableName':'goods','Condition':'goodsid="'+parseInt(upData[0]) +'"'},function(res,data){})
            }



            if(request.query.type =='search'){
              console.log(request.query)
               var upData = request.query.dataVal;
               console.log(upData)
               console.log('SELECT * FROM goods WHERE '+upData[0]+' like "%'+upData[1]+'%"')
              if(upData[0] == ''){
                  sql.get({
                    'DatabaseName': 'fanlestreet',
                    'TableName': 'goods'
                     }, function(err, data) {
                          var datas = JSON.stringify(data)
                          response.send(datas);

                        })
                
              }else{
                  sql.get({
                    'DatabaseName':'fanlestreet','Condition':'SELECT * FROM goods WHERE '+upData[0]+' like "%'+upData[1]+'%"'
                        }, function(err, data){
                          var datas = JSON.stringify(data)
                          console.log(data)
                          
                            response.send(datas);
                         
                          
                          
                })
              
              }
         
            }

                
            if(request.query.type =='add'){
                var upData = request.query.dataVal;
                 console.log(upData[9])
                sql.insert({"DatabaseName":"fanlestreet",
                  "TableName":"goods",
                  "data":{
                  "goodsid":upData[0],
                  "name":upData[1],
                  "price":upData[2],
                  "discount":upData[3],
                  "map":upData[4],
                  "phone":upData[5],
                  "star":upData[6],
                  "message":upData[7],
                  "src":upData[8],
                  "status":upData[9]
                }
              },
              function(err,data){
              })
           }
              
               
           


          });

    
}

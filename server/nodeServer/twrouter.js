var express = require('express');
var path = require('path');
var sql = require('./sql');

exports.router = function(app) {
    app.use(express.static(path.join(path.resolve(__dirname, '../') + '/')))
    app.get('/product', function(request, response) {
      console.log(request.query)
        // var sqlStr = "SELECT SQL_CALC_FOUND_ROWS * from goods where concat(goodsid,name,price,discount,map,message,src) like '%"+(request.query.dataVal[2] ? request.query.dataVal[2] :'')+"%' limit "+((request.query.dataVal[0]-1)*request.query.dataVal[1] ? (request.query.pageNum-1)*request.query.dataVal[1] : 0)+","+request.query.dataVal[1]+"; SELECT FOUND_ROWS();"
        if(request.query.type !='search'&&request.query.type !='page'){
          console.log('get')
        sql.get({
            'DatabaseName': 'fanlestreet',
            'Condition':'SELECT SQL_CALC_FOUND_ROWS * from goods limit 0, 8;SELECT FOUND_ROWS();'
          }, function(err, data) {

                  var datas = JSON.stringify(data)
                  response.send(datas);
                  // console.log(datas.length  + '111')
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




            if(request.query.type =='page'){
              // console.log(request.query)
               var upData = request.query.dataVal;
               var str='SELECT SQL_CALC_FOUND_ROWS * from goods limit '+(( parseInt(upData[0]) -1)* parseInt(upData[1]))+', '+( parseInt(upData[1]))+';SELECT FOUND_ROWS();'
              console.log(str)
               sql.get({
                'DatabaseName': 'fanlestreet',
                'Condition':str
              }, function(err, data) {
                      var datas = JSON.stringify(data)
                      response.send(datas);
                      console.log(datas.length  + '113')
                    })
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

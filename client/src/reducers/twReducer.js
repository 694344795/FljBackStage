var {CHANGE_GREEN,CHANGE_YELLOW,CHANGE_RED} = require('../constants/twConstant');
var $ = require('jquery');

function tw(state,action){
    var twState;
    var data;
    var get = ajax(); 
    data = get; 
    // console.log(data)

    // switch(action.type){
    //     case CHANGE:
    //         datas={"type":"change"}
    //         var newData=ajax(); 
    //         backDatas = backData;
    //         break;
    //     case DELETE:
    //        backDatas = backData;
    //         break;
    //     default:
    //         backDatas = backData;
    // }
    return data;
}
module.exports = tw;

function ajax(callback){
$.ajax({
    type:"GET",
    url:"http://localhost:888/product",
    dataType:"json",
    async:false,
    success:function(response){ 
     Data={datas:response};
 } 
});


return Data; 
}



// module.exports = function(state,action){
//     var backData; 
//     function ajax() 
//     { 
//         $.ajax({
//             type:"GET",
//             url:"http://localhost:888/product",
//             dataType:"json",
//             async:false,
//             success:function(response){ 
//                backData={datas:response};
//             } 
//         });
//         // console.log(backData)
//         return backData; 
//     }
//      var newData=ajax(); 
//      console.log(backData);
//      return backData;
// }

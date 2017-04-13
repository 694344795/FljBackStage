var {CHANGE,DELETE,ADD,SHOW,SEARCH} = require('../constants/twConstant');
var $ = require('jquery');

var  updatedata;
function tw(state,action){
    var twState;
    var data;
    var updatedata;
    var get = ajax(); 
    data = get; 
    // console.log(data)
    switch(action.type){
        case CHANGE:
            updatedata={"type":"change"}
            var Val = []
            for(var i=0;i<=event.target.closest('tr').children.length-3;i++){
                Val.push( $(event.target.closest('tr').children).find('input')[i].value)
             }
             console.log(Val);
             
             updatedata={
                "type":"change",
                "dataVal":Val
            }
           var r= confirm('是否确定更新数据')
           if(r){
            var a =ajax(updatedata); 
            alert("你更新数据成功!")
              location.reload() 
            data = Data;
           }else{
            alert("你取消了更新数据")
           }
            // console.log(updatedata)
             
        break;
        case DELETE:
            console.log(111)
            var Val = []
            for(var i=0;i<=event.target.closest('tr').children.length-3;i++){
                Val.push( $(event.target.closest('tr').children).find('input')[i].value)
             }
             console.log(Val);
             
             updatedata={
                "type":"delete",
                "dataVal":Val
            }
            // console.log(updatedata)
             var r= confirm('是否确定删除数据')
           if(r){
            var a =ajax(updatedata); 
            alert("你删除数据成功!")
              location.reload() 
            data = Data;
           }else{
            alert("你取消了删除数据")
           }
        break;

        case ADD:
            console.log(111)
            var Val = []
            for(var i=0;i<=event.target.closest('tr').children.length-2;i++){
                Val.push( $(event.target.closest('tr').children).find('input')[i].value)
             }
             console.log(Val);
             
             updatedata={
                "type":"add",
                "dataVal":Val
            }
            // console.log(updatedata)
             var r= confirm('是否确定增加数据成功')
           if(r){
            var a =ajax(updatedata); 
            alert("你增加数据成功成功!")
             location.reload() 
             // console.log(a)
            data = Data;
           }else{
            alert("你取消了增加数据成功")
           }
        break;



        case SEARCH:
            console.log(111)
            var Val = []
           
            console.log($('.sel').get(0).value)
            Val.push($('.sel').get(0).value);
            Val.push($('.search').get(0).value);

              console.log(Val);
             
             updatedata={
                "type":"search",
                "dataVal":Val
            }
            console.log(updatedata)
            
            var a =ajax(updatedata); 
            
             // location.reload() 
             // console.log(a)
            data = Data;
           
        break;

        case SHOW:
           $('.addTr').get(0).style.display=""
        break;
        default:
        data = Data;
    }
    return data;
}
module.exports = tw;
var Data;
function ajax(updatedata){
    $.ajax({
        type:"GET",
        url:"http://localhost:888/product",
        dataType:"json",
        async:false,
        data:updatedata,
        success:function(response){ 
           Data={datas:response};
       } 
   });
    return Data; 
}

// function ajaxsend(updatedata){
//     $.ajax({
//         type:"GET",
//         url:"http://localhost:888/twproduct1",
//         dataType:"json",
//         async:false,
//         data:updatedata,
//         success:function(response){ 
//            Data={datas:response};
//        } 
//    });
//     return Data; 
// }



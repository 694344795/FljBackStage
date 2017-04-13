var {CHANGE,DELETE,ADDITEM} = require('../constants/dhConstant');
var $ = require('jquery');
require('../components/user/dk.dialog.css')
require("../components/user/dhaddstyle.css")
var Dom=require("../components/user/dhaddcomponent")
var confirmBox = require('./confirmBox')
module.exports = function(state,action){
    var backDatas,backData;
    var datas;
    function ajax(data){
        $.ajax({
            type:"GET",
            url:'http://localhost:888/use',
            dataType:"json",
            data:data,
            async:false,
            success:function(response){
               backData={datas:response};
            }
        });
        return backData;
    }

      function sendAjax(data){
          $.ajax({
              type:"GET",
              url:'http://localhost:888/useDel',
              dataType:"json",
              data:data,
              async:false,
              success:function(response){
                // console.log(response)
                state = response;
              }
          });
          return state;
      }
    var newData=ajax();
    switch(action.type){
        case CHANGE:
          datas={"type":"change"};
          backDatas = backData;
          $(event.path[2]).children("td.usename").find('input').css({"background":"white"})
        for (var i = 0; i < event.path[2].children.length; i++) {
            if(event.path[2].children[i].getAttribute('class')=="usename"){
                event.path[2].children[i].children[0].removeAttribute('disabled');
                document.onclick=function(){
                  $('td input').css({"background":"#f5f5f5"})}
                event.path[2].children[i].children[0].onchange=function(){
                 usename=this.value;
                 $(event.path[2]).children("td.usename").find('input').css({"background":"#f5f5f5"})
                 datas={"useId":$(event.path[2]).children("td.useId").find('input').val(),"useName":usename};
                 //发送ajax请求修改到数据库
                 $.ajax({
                    type:"GET",
                    url:'http://localhost:888/usechange',
                    dataType:"json",
                    async:false,
                    data:datas,
                    success:function(response){
                        backData={datas:response};
                    }
              });
            }
          }
        }
        break;
        case DELETE:
              backDatas = backData;
              var obj = {"m_id":$(event.path[2]).children("td.useId").children("input").val(),"login_name":$(event.path[2]).children("td.usename").children("input").val()}
              confirmBox(function(){
              //发起删除ajax
                if(obj.m_id && obj.login_name){
                  if(sendAjax(obj).state){
                      //发起获取数据ajax
                      backDatas = ajax()
                     window.location.reload()
                  }
                }
              })
              break;
        case ADDITEM:
          datas={"type":"addItem"}
             Dom();
             $(".enter").click(function(){
                console.log(123)
             var time=new Date().getFullYear()+"-"+new Date().getMonth() + '-' + new Date().getDate() + ' ' + new Date().getHours() + ':' + new Date().getMinutes();
             datas= {
              "usename":$(".content .usename input").val(),
              "usegroup":$(".content .usegroup select").val(),
              "createTime":time
               };
             $.ajax({
              type:"GET",
              url:'http://localhost:888/usechange',
              dataType:"json",
              async:false,
              data:datas,
              success:function(response){
                  backData={datas:response};
              }
            });
              ajax();
              $("#add").remove();
              window.location.reload()
        })
            $(".del").click(function(){
             $("#add").remove()
            })
             var newData=ajax();
             backDatas = backData;
              break;
          default:
              backDatas = backData;
      }
    return backDatas;

}

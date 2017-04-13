var $ = require('jquery')
function confirmBox(callback){
  $('body').append('<div class="mask">\
    <div class="dialog">\
      <h3 class="title">您确定要删除吗？</h3>\
      <div class="btn"><button id="yes">删除</button>\
       <button id="cancel">取消</button></div>\
  </div>')
  $(function(){
    $('#cancel').click(function(){
      $('.mask').remove()
      $('.mask').css({'display':'none'})
    })
    $('#yes').click(function(){
      $('.mask').remove()
      $('.mask').css({'display':'none'})
        if(callback){
          callback()
        }

    })
  })
}
module.exports = confirmBox

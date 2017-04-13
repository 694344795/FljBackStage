var $ = require('jquery');
module.exports=function(){
  var str=`<div id="add">
    <div class="content">
      <div class="usename">请您输入用户名:&nbsp;&nbsp;<input type="" name=""/></div>
      <div class="usegroup">请选择用户身份:&nbsp;
        <select>
        <option value="Admin">admin</option>
        <option value="use" >use</option>
        </select>
      </div>
      <div class="btn">
        <input type="button" name="" value="确定" class="enter"/>
        <input type="button" name="" value="取消" class="del"/>
      </div>
    </div>
  </div>`

  $("body").append(str)
}

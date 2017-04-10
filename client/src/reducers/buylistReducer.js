var {CHANGE_GREEN, CHANGE_YELLOW, CHANGE_RED} = require('../constants/buyConstant');
var $ = require('jquery');
module.exports = function(state,action){
	var initState;	
	$.ajax({
		type:"GET",
		url:"http://localhost:888/buylist",
		async:false,
		dataType:"json",
		success:function(res){
			initState ={datas:res};
		}
	});
	return initState;
}
var {CHANGE_GREEN, CHANGE_YELLOW, CHANGE_RED, CHANGE_LOGIN} = require('../constants/loginConstant');

module.exports = function(state,action){
	var initState;	
	var _id;
	function ajax2(id){
		$.ajax({
			type:"post",
			url:"http://localhost:888/login",
			async:false,
			data:{"id":id},
			dataType:"json",
			success:function(res){
				initState ={datas:res};
			}
		});
		console.log(id);
		return initState;
	};
	switch(action.type){
			case CHANGE_LOGIN:
			var obj = event.target;
			console.log(obj);
			initState = {
				color: 'red',
				time: 7
			};
			break;
		default:
			initState = {
				color: 'red',
				time: 7
			};			
	}
	return initState;
}
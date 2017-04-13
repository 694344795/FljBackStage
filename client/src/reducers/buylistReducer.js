var {CHANGE_GREEN, CHANGE_YELLOW, CHANGE_RED, CHANGE_DELBUY , CHANGE_XGBUY} = require('../constants/buyConstant');
var $ = require('jquery');
module.exports = function(state,action){
	var initState;
	function ajax1(){
		$.ajax({
			type:"post",
			url:"http://localhost:888/buylist",
			async:false,
			dataType:"json",
			success:function(res){
				initState ={datas:res};
			}
		});
		return initState;
	};
	function ajax2(id){
		$.ajax({
			type:"post",
			url:"http://localhost:888/buylist",
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
	function xgajax(id,room_id,user_id,buy_num,h_time){
		$.ajax({
			type:"post",
			url:"http://localhost:888/buylist2",
			data:{"buyid":id,"roomid":room_id,"userid":user_id,"buynum":buy_num,"time":h_time},
			dataType:"json",
			success:function(res){
				initState ={datas:res};
			}
		});
		console.log(id);
		return initState;		
	}
	var _id="";
	var init = ajax1();
		switch(action.type){
		case CHANGE_GREEN:
			initState = {
				color: 'green',
				time: 5,
				data:init
			};
			break;
		case CHANGE_YELLOW:
			initState = {
				color: 'yellow',
				time:3,
				data:init
			}
			break;
		case CHANGE_XGBUY:
		var obj = event.target;
		_id = $(obj).closest('tr').find('td:eq(1)').html();
		var room_id = $(obj).closest('tr').find('input:eq(1)').val();
		var user_id = $(obj).closest('tr').find('input:eq(2)').val();
		var buy_num = $(obj).closest('tr').find('input:eq(3)').val();
		var h_time = $(obj).closest('tr').find('input:eq(4)').val();
		var init = xgajax(_id,room_id,user_id,buy_num,h_time);
			initState = {
				id:_id,
				roomid:room_id,
				userid:user_id,
				buy_num:buy_num,
				time:h_time,
				data:init
			};
			break;
		case CHANGE_DELBUY:
		var obj = event.target;
		_id = $(obj).closest('tr').find('td:eq(1)').html();
		var init = ajax2(_id);
			initState = {
				color: 'red',
				id:_id,
				data:init
			};

			break;
		default:
		initState = {
			color: 'black',
			time: 9,
			data:init
		}
	}
	return initState;
}
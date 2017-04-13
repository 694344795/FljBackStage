var {CHANGE_1, CHANGE_2, CHANGE_3,CHANGE_4, CHANGE_5, CHANGE_6,CHANGE_7} = require('../constants/zzbConstant');

module.exports = function(state,action){
	var initState;	
	switch(action.type){
		case CHANGE_1:
			initState = {
				color: 'green',
				time: 5
			};
			break;
		case CHANGE_2:
			initState = {
				color: 'yellow',
				time:3
			}
			break;
		case CHANGE_3:
			initState = {
				color: 'red',
				time: 7
			};
			break;
		case CHANGE_4:
			initState = {
				color: 'red',
				time: 7
			};
			break;	
		case CHANGE_5:
			initState = {
				color: 'red',
				time: 7
			};
			break;
		case CHANGE_6:
			initState = {
				color: 'red',
				time: 7
			};
			break;
		case CHANGE_7:
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
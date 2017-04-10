var {CHANGE_1, CHANGE_2, CHANGE_3,CHANGE_4, CHANGE_5, CHANGE_6,CHANGE_7} = require('../constants/zzbConstant');

exports.change1 = function(){
	console.log(11111111111)
	return {type: CHANGE_1};
}

exports.change2 = function(){
	return {type: CHANGE_2};
}

exports.change3 = function(){
	return {type: CHANGE_3};
}
exports.change4 = function(){
	return {type: CHANGE_4};
}

exports.change5 = function(){
	return {type: CHANGE_5};
}

exports.change6 = function(){
	return {type: CHANGE_6};
}
exports.change7 = function(){
	return {type: CHANGE_7};
}
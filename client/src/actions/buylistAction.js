var {CHANGE_GREEN, CHANGE_YELLOW, CHANGE_RED, CHANGE_DELBUY, CHANGE_XGBUY} = require('../constants/buyConstant');

exports.changeGreen = function(){
	return {type: CHANGE_GREEN};
}

exports.changeYellow = function(){
	return {type: CHANGE_YELLOW};
}

exports.changeRed = function(){
	return {type: CHANGE_RED};
}
exports.delBuy = function(){
	return {type: CHANGE_DELBUY};
}
exports.xgbtn = function(){
	return {type: CHANGE_XGBUY};
}
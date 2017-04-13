var {CHANGE_GREEN, CHANGE_YELLOW, CHANGE_RED, CHANGE_LOGIN} = require('../constants/loginConstant');

exports.changeGreen = function(){
	return {type: CHANGE_GREEN};
}

exports.changeYellow = function(){
	return {type: CHANGE_YELLOW};
}

exports.changeRed = function(){
	return {type: CHANGE_RED};
}
exports.login = function(){
	return {type: CHANGE_LOGIN};
}
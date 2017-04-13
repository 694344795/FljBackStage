var {CHANGE, DELETE,ADDITEM} = require('../constants/dhConstant');

exports.change= function(){
  return {type: CHANGE};
}

exports.delete= function(){
  return {type:DELETE};
}

exports.addItem = function(){
  return {type: ADDITEM};
}

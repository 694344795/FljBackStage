var {CHANGE,DELETE,ADD}  = require('../constants/twConstant')


exports.add = function(){
    return{
        type:ADD
    };
    
}
exports.del = function(){
   return{
        type:DELETE
    };
    
}
exports.change = function(){
    return{
        type:CHANGE
    };
}
var {CHANGE,DELETE,ADD,SHOW}  = require('../constants/twConstant')


exports.add = function(){

    return{
        type:ADD
    };
    
}
exports.show = function(){

    return{
        type:SHOW
    };
    
}
exports.del = function(){
    
   return{
        type:DELETE,

    };
    
}
exports.change = function(){
    
    return{
        type:CHANGE
    };
}
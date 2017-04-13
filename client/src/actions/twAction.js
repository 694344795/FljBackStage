var {CHANGE,DELETE,ADD,SHOW,SEARCH}  = require('../constants/twConstant')


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
exports.search = function(){

    return{
        type:SEARCH
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
var {CHANGE_GREEN,CHANGE_YELLOW,CHANGE_RED} = require('../constants/twConstant');
module.exports = function(state,action){
    var twState;
    switch(action.type){
        case    CHANGE_GREEN:
            twState = {
                color: 'green',
                time:5
            };
            break;
        case CHANGE_YELLOW:
            twState = {
                color:'yellow',
                time: 3
            };
            break;
        case CHANGE_RED:
            twState = {
                color: 'red',
                time: 7
            };
            break;
        default:
            twState = {
                color:'red',
                time:9
            };
    }
    return twState;
}
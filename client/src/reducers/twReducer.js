var {CHANGE_GREEN,CHANGE_YELLOW,CHANGE_RED} = require('../constants/twConstant');
var $ = require('jquery');
module.exports = function(state,action){
    var twState;
    getData();
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

function getData(){

// $.get(this.props.api, function(_response){
//             console.log(4);
//             this.setState({data: _response.data});
//         }.bind(this))
}

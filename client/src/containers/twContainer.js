var React = require('react')
var redux = require('react-redux')
var {bindActionCreators} = require('redux');
var twComponent = require('../components/twComponent.js')
var twAction = require('../actions/twAction.js')
function mapStateToProps(state){
    return state;
}
function mapDispatchToProps(dispatch){
    console.log(dispatch);
    return bindActionCreators(
        twAction,dispatch
        )
}
module.exports = redux.connect(
    mapStateToProps,mapDispatchToProps
    )(twComponent)
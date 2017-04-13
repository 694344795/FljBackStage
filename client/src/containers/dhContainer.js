var React = require('react');
var redux = require('react-redux');
var {bindActionCreators} = require('redux');
var dhComponent = require('../components/user/dhComponent');
var dhAction = require('../actions/dhAction');

//将reducer绑定到props上
function mapStateToProps(state){
  // console.log(state)
  return state;
}

//将action的所有方法绑定到props上
function mapDispatchToProps(dispatch) {
  // console.log(dispatch);
    return bindActionCreators(dhAction, dispatch)
}

module.exports = redux.connect(mapStateToProps, mapDispatchToProps)(dhComponent);

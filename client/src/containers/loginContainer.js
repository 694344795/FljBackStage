var React = require('react');
var redux = require('react-redux');
var {bindActionCreators} = require('redux');
var LoginComponent = require('../components/login/loginComponent');
var loginAction = require('../actions/loginAction');

//将reducer绑定到props上
function mapStateToProps(state){
	return state;
}

//将action的所有方法绑定到props上
function mapDispatchToProps(dispatch) {
	console.log(dispatch);
  	return bindActionCreators(loginAction, dispatch)
}

module.exports = redux.connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
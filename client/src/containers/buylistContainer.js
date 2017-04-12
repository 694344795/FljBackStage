var React = require('react');
var redux = require('react-redux');
var {bindActionCreators} = require('redux');
var BuylistComponent = require('../components/buylist/buylistComponent');
var buylistAction = require('../actions/buylistAction');

//将reducer绑定到props上
function mapStateToProps(state){
	return state;
}

//将action的所有方法绑定到props上
function mapDispatchToProps(dispatch) {
	console.log(dispatch);
	return bindActionCreators(buylistAction, dispatch)
}

module.exports = redux.connect(mapStateToProps, mapDispatchToProps)(BuylistComponent);
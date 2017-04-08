var React = require('react');
var redux = require('redux');

var counterReducer = require('../reducers/counterReducer.js');
var counterAction = require('../actions/conterAction.js');

//创建 store
//stroe 是对 reducer 的一种实现
var store = redux.createStore(counterReducer);

var CounterComponent = React.createClass({
	getInitialState: function(){
		return {value: store.getState()}
	},
	increment: function(){
		//分发具体要执行的事件1
		store.dispatch(counterAction.increment());
    //获取改变后对应的状态渲染具体的页面操作
		this.setState({value: store.getState()});
	},
	decrement: function(){
		//分发具体要执行的事件2
		store.dispatch(counterAction.decrement());
		//获取改变后对应的状态来对应渲染具体的页面
		this.setState({value: store.getState()});
	},
	render: function(){
	    return (
	      <p>
	        Clicked: {this.state.value} times
	        {' '}
	        <button onClick={this.increment}>+</button>
	        {' '}
	        <button onClick={this.decrement}>-</button>
	      </p>
	    )
	}
})

module.exports = CounterComponent;




// var React=require('react');
// var redux=require('redux');

// var counterReducer = require('../reducers/counterReducer.js');
// var counterAction = require('../actions/conterAction.js');

// var store=redux.createStore(counterReducer);

// var CounterComponent=function(){
// 	  getInitialState:function(){
// 	  	return{value:store.getState()}
// 	  },
// 	  increment:function(){
// 	  	//分发加的任务
// 	  	store.dispatch(counterAction.increment());
// 	  	//获取状态状态渲染页面
// 	  	this.setState({value:store.getState()})
// 	  },
// 	  decrement:function(){
// 	  	//分发减的任务
//       store.dispatch(counterAction.decrement());
//       //获取状态渲染页面
//       this.setState({value:store.getState()});
// 	  }
// 	  render:function(){
// 	  	return(
// 	  		  <p>
// 	        Clicked: {this.state.value} times
// 	        {' '}
// 	        <button onClick={this.increment}>+</button>
// 	        {' '}
// 	        <button onClick={this.decrement}>-</button>
// 	      </p>
// 	  		)
// 	  }
// }


// module.exports=CounterComponent;


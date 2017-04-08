// var React = require('react')
// var ReactDOM = require('react-dom')
// var CounterComponent = require('./components/counterComponent.js');
// ReactDOM.render(
//     <CounterComponent/>,document.getElementById('counter')
// )


var redux = require('redux')
var {Provider}  = require('react-redux');
var twReducer = require('./reducers/twReducer.js');
var TwComponent = require('./containers/twContainer.js');
var store = redux.createStore(twReducer);
ReactDOM.render(
    <Provider store = {store}>
           <TwComponent/>
    </Provider>,document.getElementById("del")

)
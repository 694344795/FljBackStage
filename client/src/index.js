var React = require('react')
var ReactDOM = require('react-dom');
var redux = require('redux')
var {Provider}  = require('react-redux');


var {Router, Route, hashHistory, Link, IndexRoute, browserHistory} = require('react-router');

//tw
var TwComponent = require('./containers/twContainer.js');

//dh
var DhComponent = require('./containers/dhContainer.js');

//var zzbReducer = require('./reducers/zzbReducer.js');
var ZzbComponent = require('./containers/zzbContainer.js');
//var BuylistComponent = require('./containers/buylistContainer.js');

//var buylistReducer = require('./reducers/buylistReducer.js');
var BuylistComponent = require('./containers/buylistContainer.js');

//var loginReducer = require('./reducers/loginReducer.js');
var LoginComponent = require('./containers/loginContainer.js');


import RootReducer from './reducers/allReducer';

var store = redux.createStore(RootReducer);
ReactDOM.render(
    <Provider store = {store}>
    	<Router history={hashHistory}>
			  <Route path='/' component={ZzbComponent}>
        			<Route path='buylist' component={BuylistComponent}/>
        			<Route path='tw' component={TwComponent}/>
      			  <Route path='dh' component={DhComponent}/>
        </Route>
        <Route path='/login' component={LoginComponent}/>
		</Router>
    </Provider>,document.getElementById("main"));








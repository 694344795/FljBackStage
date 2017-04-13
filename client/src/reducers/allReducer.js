//var React = require('react')
//var ReactDOM = require('react-dom');
//var redux = require('redux')
//var {Provider}  = require('react-redux');
import {combineReducers} from 'redux';
import zzbReducer from './zzbReducer.js';
import buylistReducer from './buylistReducer.js';
import loginReducer from './loginReducer.js';
import twReducer from './twReducer.js';
import dhReducer from './dhReducer.js';

//使用redux的combineReducers方法将所有reducer打包起来
const RootReducer = combineReducers({
	zzbReducer,buylistReducer,loginReducer,twReducer
})

export default RootReducer;
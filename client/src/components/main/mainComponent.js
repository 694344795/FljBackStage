var React = require('react');
var stype = require('./mainComponent.css');
var ReactRouter = require("react-router");
var {Router, Route, hashHistory, Link, IndexRoute, browserHistory} = ReactRouter;
var MainComponent = React.createClass({
	componentWillMount: function() {
		//判断是当前用户是否有权限，如果没有，则跳车到 login
	},
	render: function(){
		return (
			<div className="dk-container">
				<div className="dk-header"><a className="navbar-brand" href="#"><span>凡乐街</span>后台管理系统</a></div>
				<div className="dk-body">
				<div className="dk-menu">
				<input type="text" className="form-control" placeholder="输入查询信息" />
					<ul className="nav-menu">
						<li className="active"><Link to="/"><a href="#">信息汇总</a></Link></li>
						<li><Link to="/"><a href="#">销售总额</a></Link></li>
						<li><Link to="/"><a href="#">商品信息</a></Link></li>
						<li><Link to="/"><a href="#">各类排行</a></Link></li>
						<li><Link to="/"><a href="#">客户列表</a></Link></li>
						<li><Link to="/buylist"><a href="#">订单列表</a></Link></li>
						<li><Link to="/"><a href="login.html">登录页面</a></Link></li>
					</ul>
				</div>
				<div className="dk-content"></div>
				</div>
				<div className="dk-footer">@凡乐街</div>
			</div>
		)
	}
})

module.exports = MainComponent;
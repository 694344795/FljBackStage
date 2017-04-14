var React = require('react');
var stype = require('./mainComponent.css');
require("./css/datepicker3.css");
require("./css/styles.css");
var ReactRouter = require("react-router");
var {Router, Route, hashHistory, Link, IndexRoute, browserHistory} = ReactRouter;
var MainComponent = React.createClass({
	componentWillMount: function() {
		//判断是当前用户是否有权限，如果没有，则跳车到 login
	},
	render: function(){
		console.log(this.props);
		return (
			<div>
			<nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
			<div className="container-fluid">
				<div className="navbar-header">
					<a className="navbar-brand" href="#"><span>凡乐街</span>后台管理系统</a>
					<ul className="user-menu">
						<li className="dropdown pull-right">
							<a href="javascipt:;" className="dropdown-toggle" data-toggle="dropdown"> 用户 <span className="caret"></span></a>
							<ul className="dropdown-menu" role="menu">
								<li><a href="#"> 个人中心</a></li>
								<li><a href="#"> 设置</a></li>
								<li><a href="#"> 注销</a></li>
								</ul>
							</li>
						</ul>
					</div>
					</div>
				</nav>
				<div id="sidebar-collapse" className="col-sm-3 col-lg-2 sidebar">
				<form role="search">
					<div className="form-group">
						<input type="text" className="form-control" placeholder="输入查询信息" />
					</div>
				</form>
				<ul className="nav menu">
					<li><Link to="/"><a href="#">信息汇总</a></Link></li>
					<li><Link to="/"><a href="#">销售总额</a></Link></li>
					<li><Link to="/tw"><a href="#">商品信息</a></Link></li>
					<li><Link to="/"><a href="#">各类排行</a></Link></li>
					<li><Link to="/dh"><a href="#">客户列表</a></Link></li>
					<li><Link to="/buylist"><a href="#">订单列表</a></Link></li>
					<li className="parent ">
						<a href="#">
							 新建项
						</a>
						<ul className="children collapse" id="sub-item-1">
							<li>
								<a className="" href="#">
									 新建项1
								</a>
							</li>
							<li>
								<a className="" href="#">
									 新建项2
								</a>
							</li>
							<li>
								<a className="" href="#">
									 新建项3
								</a>
							</li>
						</ul>
					</li>
					<li role="presentation" className="divider"></li>
					<li><Link to="/login"><a href="login.html">登录页面</a></Link></li>
				</ul>
			</div>
			<div className="right_content">
				  <div>{this.props.children}</div>
			</div>
		</div>
		)
	}
})

module.exports = MainComponent;
//			<div className="dk-container">
//				<div className="dk-header"><a className="navbar-brand" href="#"><span>凡乐街</span>后台管理系统</a></div>
//				<div className="dk-body">
//				<div className="dk-menu">
//				<input type="text" className="form-control" placeholder="输入查询信息" />
//					<ul className="nav-menu">
//						<li className="active"><Link to="/"><a href="#">信息汇总</a></Link></li>
//						<li><Link to="/"><a href="#">销售总额</a></Link></li>
//						<li><Link to="/"><a href="#">商品信息</a></Link></li>
//						<li><Link to="/"><a href="#">各类排行</a></Link></li>
//						<li><Link to="/"><a href="#">客户列表</a></Link></li>
//						<li><Link to="/buylist"><a href="#">订单列表</a></Link></li>
//						<li><Link to="/login"><a href="login.html">登录页面</a></Link></li>
//					</ul>
//				</div>
//				<div className="dk-content"></div>
//				</div>
//				<div className="dk-footer">@凡乐街</div>
//			</div>

var React = require('react');
var stype = require('./mainComponent.css');

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
						<li className="active"><a href="#"><span className="glyphicon glyphicon-dashboard"></span> 信息汇总</a></li>
						<li><a href="#"><span className="glyphicon glyphicon-th"></span> 销售总额</a></li>
						<li><a href="#"><span className="glyphicon glyphicon-stats"></span> 商品信息</a></li>
						<li><a href="#"><span className="glyphicon glyphicon-list-alt"></span> 各类排行</a></li>
						<li><a href="#"><span className="glyphicon glyphicon-pencil"></span> 客户列表</a></li>
						<li><a href="#"><span className="glyphicon glyphicon-info-sign"></span> 订单列表</a></li>
						
						<li role="presentation" className="divider"></li>
						<li><a href="login.html"><span className="glyphicon glyphicon-user"></span> 登录页面</a></li>
					</ul>
				</div>
				<div className="dk-content" data-ui-view=""></div>
				</div>
				<div className="dk-footer">@dk</div>
			</div>
		)
	}
})

module.exports = MainComponent;
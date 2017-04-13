var React = require('react');
var ReactRouter = require("react-router");
var $ = require('jquery');
var style = require('./buylist.css');
var {Router, Route, hashHistory, Link, IndexRoute, browserHistory} = ReactRouter;
var buylistComponent = React.createClass({
    render: function(){
    	console.log(this.props);
    	var self = this;
    	var item = this.props.data.datas.map(function(val,index){
    		return(
    			<tr className="newtr" key={index}>
    				<td><input type="checkbox"/></td>
	    			<td className="xginpt">{val.buyid}</td>
	    			<td><input type="text" className="xginpt" defaultValue={val.room_id} /></td>
	    			<td><input type="text" className="xginpt" defaultValue={val.userid} /></td>
	    			<td><input type="text" className="xginpt" defaultValue={val.buynum} /></td>
	    			<td><input type="text" className="xginpt" defaultValue={val.time} /></td>
	    			<td><input type="button" value="修改" className="delbtn" onClick={self.props.xgbtn}/>
	    				<input type="button" value="删除" className="delbtn" onClick={self.props.delBuy}/></td>
    			</tr>
    		) 
    	});
        return (
			<div className="dk-container">
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
				<div className="dk-body">
					<div id="sidebar-collapse" className="col-sm-3 col-lg-2 sidebar">
				<form role="search">
					<div className="form-group">
						<input type="text" className="form-control" placeholder="输入查询信息" />
					</div>
				</form>
				<ul className="nav menu">
					<li><Link to="/"><a href="#">信息汇总</a></Link></li>
					<li><Link to="/"><a href="#">销售总额</a></Link></li>
					<li><Link to="/"><a href="#">商品信息</a></Link></li>
					<li><Link to="/"><a href="#">各类排行</a></Link></li>
					<li><Link to="/"><a href="#">客户列表</a></Link></li>
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
				<div className="dk-content">
//					<span>增加订单<input type="text" placeholder="输入信息" /></span>
//					<span>删除订单<input type="text" placeholder="输入信息" /></span>
//					<span>修改订单<input type="text" placeholder="输入信息" /></span>
					<table>
				      <thead>
				        <tr>
				          <th>全选<input type="checkbox"/></th>
				          <th>buy id</th>
				          <th>room_id</th>
				          <th>userid</th>
				          <th>buynum</th>
				          <th>time</th>
				          <th><input type="button" value="删除" className="delbtn" /></th>
				        </tr>
				      </thead>
				      <tbody>{item}</tbody>
   				 	</table>
				</div>
				</div>
				<div className="dk-footer">@凡乐街</div>
			</div>
        )
    },
    componentDidMount: function() {
    	$('.newtr').css({'background':' #eee'}).mouseenter(function(){
    		$(this).css({'background':' #ddd'})
    	}).mouseleave(function(){
    		$('.newtr').css({'background':' #eee'})
    	}).on('click','td',function(){
//  		console.log($(this).parent().find('input').prop('checked'))
    			$(this).parent().find('input').prop('checked',!$(this).parent().find('input').prop('checked'));
    	})
    }
})
module.exports = buylistComponent;
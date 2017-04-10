var React = require('react');
var ReactRouter = require("react-router");
var $ = require('jquery');
var style = require('./buylist.css');
var {Router, Route, hashHistory, Link, IndexRoute, browserHistory} = ReactRouter;
var buylistComponent = React.createClass({
    render: function(){
    	console.log(this.props.datas);
    	var item = this.props.datas.map(function(val,index){
    		return(
    			<tr className="newtr" key={index}>
    				<td><input type="checkbox"/></td>
	    			<td>{val.buyid}</td>
	    			<td>{val.room_id}</td>
	    			<td>{val.userid}</td>
	    			<td>{val.buynum}</td>
	    			<td>{val.time}</td>
    			</tr>
    		) 
    	});
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
				<div className="dk-content">
					<span>增加订单<input type="text" placeholder="输入信息" /></span>
					<span>删除订单<input type="text" placeholder="输入信息" /></span>
					<span>修改订单<input type="text" placeholder="输入信息" /></span>
					<table>
				      <thead>
				        <tr>
				          <th>全选<input type="checkbox"/></th>
				          <th>buy id</th>
				          <th>room_id</th>
				          <th>userid</th>
				          <th>buynum</th>
				          <th>time</th>
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
    		$(this).css({'background':' #fff'})
    	}).mouseleave(function(){
    		$('.newtr').css({'background':' #eee'})
    	}).on('click','td',function(){
    		console.log($(this).parent().find('input').prop('checked'))
    			$(this).parent().find('input').prop('checked',!$(this).parent().find('input').prop('checked'));

    	})
    }
})
module.exports = buylistComponent;
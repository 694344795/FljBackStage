var React = require('react');
   var $ = require('jquery');
var style1 = require('./css/datepicker.css')
var style2 = require('./css/datepicker3.css')
var stype = require('./loginComponent.css');


var LoginComponent = React.createClass({
	loginHandler: function(){
		// $.post('''',function(){
		// //跳转路由
		// })

		//
	},
	render: function(){
		// this.props.params.userid
		return (
		<div className="row">
			<div className="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 col-md-4 col-md-offset-4">
				<div className="login-panel panel panel-default">
					<div className="panel-heading">登录</div>
					<div className="panel-body">
						<form role="form">
							<fieldset>
								<div className="form-group">
									<input className="form-control" placeholder="邮箱" type="email"/>
								</div>
								<div className="form-group">
									<input className="form-control" placeholder="密码" type="password"/>
								</div>
								<div className="checkbox">
									<label>
										<input name="remember" type="checkbox" value="Remember Me" />Remember Me
									</label>
								</div>
								<a href="#/login" className="btn btn-primary" onClick={this.props.login}>登录</a>
							</fieldset>
						</form>
					</div>
				</div>
			</div>
		</div>
		)
	}
})

module.exports = LoginComponent;
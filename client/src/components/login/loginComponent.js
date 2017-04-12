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
					<div className="panel-heading">Log in</div>
					<div className="panel-body">
						<form role="form">
							<fieldset>
								<div className="form-group">
									<input className="form-control" placeholder="E-mail" name="email" type="email" autofocus=""/>
								</div>
								<div className="form-group">
									<input className="form-control" placeholder="Password" name="password" type="password" value=""/>
								</div>
								<div className="checkbox">
									<label>
										<input name="remember" type="checkbox" value="Remember Me" />Remember Me
									</label>
								</div>
								<a href="index.html" className="btn btn-primary" >Login</a>
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
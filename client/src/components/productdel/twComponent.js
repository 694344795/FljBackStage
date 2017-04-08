var React = require('react');

var TwComponent = React.createClass({
    render:function(){
        return(
            <div>
                <img style={{width: '50px'}} src={'./imgs/' + this.props.color + '.jpg'} />
                <br/>
                <button onClick={this.props.changeRed}>red</button>
                <button onClick={this.props.changeGreen}>Green</button>
                <button onClick={this.props.changeYellow}>Yellow</button>
            </div>
        )
    }
})
module.exports = TwComponent;
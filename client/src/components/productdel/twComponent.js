var React = require('react');
var style = require('./twComponent.css')
var $ = require('jquery');
var TwComponent = React.createClass({
    render: function(){
        var self = this;
        var columns = [];
        var tb = [];
        for(var key in this.props.datas[0]){
            columns.push(key);
        }
        for(var key in this.props.datas){
            tb.push(this.props.datas[key]);
        }
        // console.log(tb)
        return (
            <table>
            <thead>
           <tr><th><input type= "button" className='add' value ='添加新的数据' onClick={this.props.show} /></th></tr>
            <tr>
            {
                columns.map(function(index, elem) {
                    return <th name={index} key={index}><input value = {index}/></th>;
                })          
            }
            <th><input className='dd' value ='update' /></th>
            <th><input className='dd' value ='del' /></th>
            
            </tr>
            </thead>
            <tbody>
            <tr  style = {{display:'none'}} className = 'addTr'>
            
                {
                columns.map(function(index, elem) {
                    return <td name={index} key={index}><input defaultValue =''/></td>;
                })          
            }
            <td><input  type="button" value="添加" onClick={self.props.add}/></td>
            </tr>
            

            
            {
                tb.map(function(elem, index) {

                    return <tr>
                    <td ><input defaultValue = {tb[index].goodsid}/></td>
                    <td ><input defaultValue = {tb[index].name}/></td>
                    <td ><input defaultValue = {tb[index].price}/></td>
                    <td ><input defaultValue = {tb[index].discount}/></td>
                    <td ><input defaultValue = {tb[index].map}/></td>
                    <td ><input defaultValue = {tb[index].phone}/></td>
                    <td ><input defaultValue = {tb[index].star}/></td>
                    <td ><input defaultValue = {tb[index].message}/></td>
                    <td ><input defaultValue = {tb[index].src}/></td>
                    <td ><input defaultValue = {tb[index].status}/></td>
                    <td><input className="change" type="button" value="编辑" onClick={self.props.change}/></td>
                    <td><input className="del" type="button" value="删除" onClick={self.props.del}/></td>

                    </tr>
                })          
            }

            </tbody>
            </table>
            )
        }
    })
    module.exports = TwComponent;
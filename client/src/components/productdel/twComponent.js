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
        console.log(tb)
        return (
            <table>
            <thead>
            <tr>
            {
                columns.map(function(index, elem) {
                    return <th name={index} key={index}><input value = {index}/></th>;
                })          
            }
            </tr>
            </thead>
            <tbody>

            
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
                    <td><input id="change" type="button" value="编辑" onClick={self.props.change}/></td>
                    <td><input id="change" type="button" value="删除" onClick={self.props.delete}/></td>

                    </tr>
                })          
            }

            </tbody>
            </table>
            )
        }
    })
    module.exports = TwComponent;
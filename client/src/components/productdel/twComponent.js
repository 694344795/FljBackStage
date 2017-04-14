var React = require('react');
var style = require('./twComponent.css')
var $ = require('jquery');
var TwComponent = React.createClass({

    render: function(){
        var self = this;
        var columns = [];
        var tb = [],page=[];
        var row= 6 ;
        // console.log(this.props)
        for(var key in this.props.twReducer.datas[0]){
            columns.push(key);
        }
        for(var key in this.props.twReducer.datas){
            tb.push(this.props.twReducer.datas[key]);
        }
         for(var i=0;i<=this.props.twReducer.datas.length/row;i++){
            page.push(i)
         }
         // console.log(page)
        console.log(tb)
        return (
            <table className="tw">
            <thead>
           <tr>
                <th>
                 <input type= "button" className='add' value ='添加新的数据' onClick={this.props.show} />
                </th>
             <th>
               <select defaultValue='' className = "sel">
                    {
                        columns.map(function(index, elem) {
                             return <option defaultValue ="index">{index}</option>
                        })
                    }
                </select>

             </th>
              <td>
                <input className='search' defaultValue =''  placeholder="请输入搜索内容"/>
              </td>
              <td><input className="search" type="button" value="搜索" onClick={self.props.search}/>
              </td>
              <td>
                 <input type= "text" className='search'
                    id='row'
                 placeholder ='选择表格行数' defaultValue='8'  onChange={self.props.row =8} />
                </td>
           </tr>
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
            <tr  style = {{display:'none'}} className = 'addTr' >

                {
                columns.map(function(index, elem) {
                    return <td name={index} key={index}><input defaultValue =''/></td>;
                })
            }
            <td><input  type="button" value="添加" onClick={self.props.add}/></td>
            </tr>



            {
                tb.map(function(elem, index) {

                    return <tr key={elem.goodsid}>
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
             <tr>
            {
                page.map(function(elem, index) {
                    return <th className='btn' name={index} key={index}><input value = {index+1} type="button" onClick={self.props.page}/></th>;
                })
            }
            </tr>
            </tbody>
            </table>
            )
        }
    })


    module.exports = TwComponent;

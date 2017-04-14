var  React=require("react");
require("./dhstyle.css")
var UserComponent=React.createClass({
  render:function(){
    var user=[]
      // console.log(this.props)
    for(var k in this.props.dhReducer.datas[0]){
      user.push(k)
    }
    return(
      <div className="bs-example" data-example-id="contextual-table">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th></th>
              {
              user.map(function(elem,index) {
                return <th>{elem}</th>;
              })
            }
            <th>编辑</th>
            <th>删除</th>
            <th>增加</th>
            </tr>
          </thead>
          <tbody>
          {
            this.props.dhReducer.datas.map(function(elem,index) {
              return(<tr key={index} className="active">
                <th></th>
                <th></th>
                <td  className="useId "><input type="text" name="" defaultValue={elem.m_id} disabled="ture"/></td>
                <td>{elem.m_name}</td>
                <td  className="usename"><input type="text" name="" defaultValue={elem.login_name} disabled="ture"/></td>
                <td>{elem.group}</td>
                <td><input type="text" defaultValue={elem.desc}/></td>
                <td>{elem.buil_time}</td>
                <td>{elem.on_time}</td>
                <td className="edit"><button type="button" value="" onClick={this.props.change}>编辑</button></td>
                <td className="del"><button type="button" value="" onClick={this.props.delete}>删除</button></td>
                <td className="add"><button onClick={this.props.addItem} >增加</button></td>
               </tr>)
            }.bind(this))
          }
          </tbody>
        </table>
    </div>
      )
  }
})

module.exports=UserComponent;

var  React=require("react");
var UserComponent=React.createClass({
   getInitialState:function(){
      return {
        user:[userid,username,]
     }
   },
  render:function(){
    return(
      <div className="bs-example" data-example-id="contextual-table">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr className="active">
              <th></th>
              <td></td>
            <td ></td>
            <td></td>
            </tr>
          </tbody>
        <tfoot>er
          <tr>
            <td colspan="10">
                <div>
                    <ul>
                      <li class="">
                        <a href="#"></a>
                      </li>
                    </ul>
                  </div>
            </td>
          </tr>
        </tfoot>
        </table>
    </div>
      )
  }
})

module.exports=UserComponent;

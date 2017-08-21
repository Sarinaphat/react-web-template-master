import React,{Component} from 'react';
import TextField from 'material-ui/TextField';
export default class ContractFromEndUser extends Component{
  constructor(props){
    super(props);
  }
  setEndUser=(e,value)=>{
    this.props.setEndUser(value);
  }
  render(){
    var {EndUser} = this.props;
    return(
      <div>
        <TextField value={EndUser} onChange={this.setContract_no} floatingLabelText="EndUser" hintText="EndUser" style={{width:'100%'}} type="text" />
      </div>
    )
  }
}

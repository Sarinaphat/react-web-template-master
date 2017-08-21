import React,{Component} from 'react';
import TextField from 'material-ui/TextField';
export default class ContractFromEndUserAddress extends Component {
  constructor(props) {
    super(props);
  }
  setEndUserAddress=(e,value)=>{
    this.props.setEndUserAddress(value);
  }
  render(){
    var {EndUserAddress}=this.props;
    return(
      <div>
        <TextField value={EndUserAddress}
        onChange={this.setEndUserAddress}
        floatingLabelText="EndUserAddress"
        hintText="EndUserAddress" style={{width:'100%'}} type="text" />
      </div>
    )
  }
}

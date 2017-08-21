import React,{Component} from 'react';
import TextField from 'material-ui/TextField';
export default class ContractFromContractno extends Component{
  constructor(props){
    super(props);
  }
  setcontract_no = (e,value) => {
      this.props.setcontract_no(value);
    }


  render(){
    var {contract_no} = this.props;
    return(
      <div>
        <TextField value={contract_no}
        onChange={this.setcontract_no}
        floatingLabelText="contract_no"
        hintText="contract_no"
        style={{width:'100%'}}
        type="text" />
      </div>
    )
  }
}

import React,{Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import ContractFromContractno from './ContractFromContractno';
import ContractFormProject from './ContractFormProject';
import ContractFromEndUser from './ContractFromEndUser';
import ContractFromEndUserAddress from './ContractFromEndUserAddress';
export default class ContractCreateForm extends Component{
  constructor(props) {
    super(props);
    this.state = {contract_no:'',Project:'',EndUser:'',EndUserAddress:''}
  }
  submit = () => {
   var {contract_no, Project, EndUser, EndUserAddress} = this.state;
   console.log(this.state.notifications);
  }
  renderButtonSubmit = () => {
   var {contract_no} = this.state;
   if(contract_no.length>4!=""){
     return (<div>
       <RaisedButton fullWidth={true} primary={true} backgroundColor='#03A9F4' label="Save" onClick={()=>this.submit()} />
     </div>);
   }else {
     return <spam />
   }
  }
  setcontract_no = (contract_no) => this.setState({contract_no})
  setProject = (Project) => this.setState({Project})
  setEndUser = (EndUser) => this.setState({EndUser})
  setEndUserAddress= (EndUserAddress) => this.setState({EndUserAddress})

  render(){
    var {contract_no, Project, EndUser, EndUserAddress} = this.state;
    return(
      <div>
        <div><h2>Create Contract</h2></div>
          <ContractFromContractno contract_no={contract_no} setcontract_no={this.setcontract_no} />
          <ContractFormProject Project={Project} setProject={this.setProject} />
          <ContractFromEndUser EndUser={EndUser} setEndUser={this.setEndUser} />
          <ContractFromEndUserAddress EndUserAddress={EndUserAddress} setEndUserAddress={this.setEndUserAddress} />
          <div>
              {this.renderButtonSubmit()}
          </div>
      </div>
    )
  }
}

import React, {Component} from 'react';

import ContractFromContractno from './ContractFromContractno';
import ContractFormProject from './ContractFormProject';
import ContractFromEndUser from './ContractFromEndUser';
import ContractFromEndUserAddress from './ContractFromEndUserAddress';
export default class ContractDetail extends Component {
  constructor(props){
    super(props);
    this.state = {contract_no:'',Project:'', EndUser:'',EndUserAddress:'', loaded:false}
  }

  componentDidMount(){
    this.loadData();
  }
  loadData = () => {
    console.log('loadData', this.state.sid);
    this.setState({contract_no:'0001', Project:'A', EndUser:'Firstlogic', loaded:true});

  }
  setcontract_no = (contract_no) => this.setState({contract_no})
  setProject = (Project) => this.setState({Project})
  setEndUser = (EndUser) => this.setState({EndUser})
  setEndUserAddress = (EndUserAddress) => this.setState({EndUserAddress})
  render(){
    var {contract_no, Project, EndUser, EndUserAddress, loaded} = this.state;
    console.log('debug contract_no',contract_no);
    if(loaded){
      return (
        <div>
          <div>
            <ContractFromContractno setcontract_no={this.setcontract_no} contract_no={contract_no} />
            <ContractFormProject setProject={this.setProject} Project={Project} />
            <ContractFromEndUser setEndUser={this.setEndUser} EndUser={EndUser} />
            <ContractFromEndUserAddress setEndUserAddress={this.setEndUserAddress} EndUserAddress={EndUserAddress} />
          </div>
        </div>);
    }else{
      return (<div>Loading...</div>)
    }
  }
}

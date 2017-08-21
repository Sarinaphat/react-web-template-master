import React,{Component} from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentClear from 'material-ui/svg-icons/content/clear';
import ContractTable from './ContractTable.js';
import ContractCreateForm from './ContractCreateForm.js';
import ContractButtonFloat from './ContractButtonFloat.js';
export default class ContractMain extends Component {
  constructor(props) {
    super();
    this.state={content:true}
  }
  toggleContent=()=>{
    this.setState({content:!this.state.content});
  }
  renderContent=()=>{
    var {content}=this.state;
    if (content==true){
      return <ContractTable/>;
    }else {
      return <ContractCreateForm/>;
    }
  }
  render(){
    return(
      <div>
        {this.renderContent()}
        <ContractButtonFloat toggleContent={this.toggleContent} content={this.state.content}/>
      </div>
    )
  }
}

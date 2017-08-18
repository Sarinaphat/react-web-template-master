import React,{Component} from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentClear from 'material-ui/svg-icons/content/clear';
import RoleTable from './RoleTable.js';
import RoleButtonFloat from './RoleButtonFloat.js';
import RoleCreateForm from './RoleCreateForm.js';
export default class TimeSheetMain extends Component{
  constructor(props){
    super();
    this.state={
      content:true
    }
  }
  renderContent=()=>{
    var {content} = this.state;
    if(content == true){
      return <RoleTable />;
    }else {
      return <RoleCreateForm />
    }
  }
  toggleContent=()=>{
    this.setState({content:!this.state.content});
  }
  render(){
    return(
       <div>
          {this.renderContent()}
          <RoleButtonFloat toggleContent={this.toggleContent} content={this.state.content} />
       </div>
    )
  }
}

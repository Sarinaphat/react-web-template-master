import React,{Component} from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentClear from 'material-ui/svg-icons/content/clear';
import UserTable from './UserTable.js';
import UserButtonFloat from './UserButtonFloat.js';
import UserCreateForm from './UserCreateForm.js';
import UserMainColumns from './UserMainColumns.js';
export default class UserMain extends Component{
  constructor(props){
    super();
    this.state={
      content:true
    }
  }
  renderContent=()=>{
    var {content} = this.state;
    if(content == true){
      return <UserTable />;
    }else {
      return <UserCreateForm />
    }
  }
  toggleContent=()=>{
    this.setState({content:!this.state.content});
  }
  render(){
    return(
       <div>
          {this.renderContent()}
          <UserButtonFloat toggleContent={this.toggleContent} content={this.state.content} />
       </div>
    )
  }
}

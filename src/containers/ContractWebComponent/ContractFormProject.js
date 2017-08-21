import React,{Component} from 'react';
import TextField from 'material-ui/TextField';
export default class ContractFormProject extends Component {
  constructor(props) {
    super(props);
  }
  setProject=(e,value)=>{
    this.props.setProject(value);
  }
  render(){
    var {Project}=this.props;
    return(
      <div>
        <TextField value={Project} onChange={this.setProject} floatingLabelText="Project" hintText="Project" style={{width:'100%'}} type="text" />
      </div>
    )
  }
}

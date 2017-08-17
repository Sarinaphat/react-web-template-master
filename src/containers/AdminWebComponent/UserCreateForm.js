import React,{Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class UserCreateForm extends Component{
  constructor(props){
    super(props);
    this.state = {role_name:''}

  }
  submit = () => {
     var {role_name} = this.state;
     console.log(this.state);
   }

   renderButtonSubmit = () => {
     var {role_name} = this.state;
     console.log(role_name);
     if(role_name.length>1!=""){
       return (<div>
         <RaisedButton fullWidth={true} primary={true} label="Save" onClick={()=>this.submit()} />
       </div>);
     }else {
       return <spam />
     }
   }
  render(){
      var {role_name}=this.state;
    return(
      <div>
      <div><h2>Create Role</h2></div>
      <div>
          <TextField value={role_name}
            onChange={(e)=>this.setState({role_name:e.target.value})}
            floatingLabelText="role name" hintText="role name" style={{width:'100%'}} type="text"  />
      </div>
            <div>
              {this.renderButtonSubmit()}
            </div>
      </div>
    )


  }
}

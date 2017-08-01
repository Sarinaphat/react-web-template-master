import React,{Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class TeamSlaCreateTeam extends Component{
  constructor(props){
    super(props);
    this.state={
      team_level_1:'',
      team_level_2:''
    }
  }
    submit =()=>{
      var {team_level_1,team_level_2}=this.state;
      return this.setState({result:team_level_1+team_level_2})
    }

  render(){
    var {team_level_1,team_level_2,result}=this.state;
    return(
      <div>
          <TextField hintText="Name Level 1" floatingLabelText="Name Level 1" value={team_level_1}
          onChange={(e)=>this.setState({team_level_1:e.target.value})} />
          <TextField hintText="Name Level 2" floatingLabelText="Name Level 2" value={team_level_2}
          onChange={(e)=>this.setState({team_level_2:e.target.value})}/>
          <RaisedButton label="Sumit"  onClick={()=>this.submit()} />
          <div>
            {result}
          </div>
      </div>

    )
  }
}

import React,{Component} from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import MenuItem from 'material-ui/MenuItem';

export default class SlaTeamDefaultDefault extends Component{
  constructor(props){
    super(props);
    this.state={
      team:'',
      dataSource: ["Apple","Banana","Orange"],
    }
  }
  handleUpdateInput = (value) => {
  this.setState({team:value});
  console.log(value);
 };
  render(){
    return(
      <div>
          <AutoComplete
            hintText="Team Name"
            floatingLabelText = "Team"
            filter={AutoComplete.fuzzyFilter}
            dataSource={this.state.dataSource}
            onUpdateInput={this.handleUpdateInput}
          />
      </div>
    )
  }
}

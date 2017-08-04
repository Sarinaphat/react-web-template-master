import React,{Component} from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import MenuItem from 'material-ui/MenuItem';

export default class SlaEnduserCompany extends Component{
  constructor(props){
    super(props);
    this.state={
      enduser:'',
      dataSource: ["Apple","Banana","Orange"],
    }
}

  handleUpdateInput = (value) => {
  this.setState({enduser:value});
  console.log(value);
 };
  render(){
    var {dataSource}=this.state;
    return(
      <div>
            <AutoComplete
              hintText="End user company name"
              floatingLabelText = "End user"
              filter={AutoComplete.fuzzyFilter}
              dataSource={this.state.dataSource}
              onUpdateInput={this.handleUpdateInput}
            />
      </div>
    )
  }
}

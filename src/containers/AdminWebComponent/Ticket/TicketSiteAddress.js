import React,{Component} from 'react';
import TextField from 'material-ui/TextField';
import AutoComplete from 'material-ui/AutoComplete';

export default class TicketSiteAddress extends Component{
  constructor(props){
    super(props);

  }
  render(){
    return(
      <div>
      
      <TextField hintText="กรอก Address" />

      </div>
    )
  }
}

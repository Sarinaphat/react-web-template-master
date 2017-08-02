import React,{Component} from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export default class SlaNumberTeamSupport extends Component {
  constructor(props) {
    super(props)
    this.state={
      NumberTeamSupport:15,
    }
  }
  render(){
    var {NumberTeamSupport}=this.state;
    return(
      <div>
        <div className="row">
          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 m-b-15 " style={{textAlign:'right', margin:'auto'}}>
            <h3>NumberTeamSupport</h3>
          </div>
          <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8 m-b-15 ">
            <div className="row">
              <div className="col-xs-12 col-sm-2 col-md-2 col-lg-2 m-b-15 ">
                <TextField value={NumberTeamSupport}
                  onChange={(e)=>this.setState({NumberTeamSupport:e.target.value})}
                  floatingLabelText="Number Team Service" hintText="จำนวนทีม Support" style={{width:'100%'}} type="number" />
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

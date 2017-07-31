import React,{Component} from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export default class SlaResolutionForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      resolution_critical:15,
      resolution_hight:15,
      resolution_medium:15,
      resolution_low:15,
      resolution_unit:'Min'
    }
  }
  handleUnitChange = (event, index, value) => {
    this.setState({resolution_unit:value});
  }
  render(){
    var {resolution_critical,resolution_unit,resolution_hight,resolution_medium,resolution_low} = this.state;
    return(
      <div>
        <div className="row">
          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 m-b-15 " style={{textAlign:'right', margin:'auto'}}>
            <h3>Resolution</h3>
          </div>
          <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8 m-b-15 ">
            <div className="row">
              <div className="col-xs-12 col-sm-2 col-md-2 col-lg-2 m-b-15 ">
                <TextField value={resolution_critical}
                  onChange={(e)=>this.setState({resolution_critical:e.target.value})}
                  floatingLabelText="Critical" hintText="Critical" style={{width:'100%'}} type="number" />
              </div>
              <div className="col-xs-12 col-sm-2 col-md-2 col-lg-2 m-b-15 ">
                <TextField value={resolution_hight}
                  onChange={(e)=>this.setState({resolution_hight:e.target.value})}
                floatingLabelText="High" hintText="High" style={{width:'100%'}} type="number" />
              </div>
              <div className="col-xs-12 col-sm-2 col-md-2 col-lg-2 m-b-15 ">
                <TextField value={resolution_medium}
                  onChange={(e)=>this.setState({resolution_medium:e.target.value})}
                  floatingLabelText="Medium" hintText="Medium" style={{width:'100%'}} type="number" />
              </div>
              <div className="col-xs-12 col-sm-2 col-md-2 col-lg-2 m-b-15 ">
                <TextField value={resolution_low}
                  onChange={(e)=>this.setState({resolution_low:e.target.value})}
                  floatingLabelText="Low" hintText="Low" style={{width:'100%'}} type="number" />
              </div>
              <div className="col-xs-12 col-sm-2 col-md-2 col-lg-2 m-b-15 ">
                  <SelectField style={{width:'100%'}}
                    floatingLabelText="Unit"
                    value={resolution_unit}
                    onChange={this.handleUnitChange}
                  >
                    <MenuItem value={"Min"} primaryText="Min" />
                    <MenuItem value={"Hour"} primaryText="Hour" />
                    <MenuItem value={"Day"} primaryText="Day" />
                  </SelectField>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

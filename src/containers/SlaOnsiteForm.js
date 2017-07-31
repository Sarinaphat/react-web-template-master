import React,{Component} from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';


export default class SlaOnsiteForm extends Component{
  constructor(props){
    super(props)
    this.state={
      onsite_critical:15,
      onsite_hight:15,
      onsite_medium:15,
      onsite_low:15,
      onsite_unit:'Min'
    }

  }
  handleUnitChange = (event, index, value) => {
    this.setState({onsite_unit:value});
  }
  render(){
    var {onsite_critical,onsite_hight,onsite_medium,onsite_low,onsite_unit}=this.state;
    return(
      <div>
        <div className="row">
          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 m-b-15 " style={{textAlign:'right', margin:'auto'}}>
            <h3>Onsite</h3>
          </div>
          <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8 m-b-15 ">
            <div className="row">
              <div className="col-xs-12 col-sm-2 col-md-2 col-lg-2 m-b-15 ">
                <TextField value={onsite_critical}
                  onChange={(e)=>this.setState({onsite_critical:e.target.value})}
                  floatingLabelText="Critical" hintText="Critical" style={{width:'100%'}} type="number" />
              </div>
              <div className="col-xs-12 col-sm-2 col-md-2 col-lg-2 m-b-15 ">
                <TextField value={onsite_hight}
                  onChange={(e)=>this.setState({onsite_hight:e.target.value})}
                floatingLabelText="High" hintText="High" style={{width:'100%'}} type="number" />
              </div>
              <div className="col-xs-12 col-sm-2 col-md-2 col-lg-2 m-b-15 ">
                <TextField value={onsite_medium}
                  onChange={(e)=>this.setState({onsite_medium:e.target.value})}
                  floatingLabelText="Medium" hintText="Medium" style={{width:'100%'}} type="number" />
              </div>
              <div className="col-xs-12 col-sm-2 col-md-2 col-lg-2 m-b-15 ">
                <TextField value={onsite_low}
                  onChange={(e)=>this.setState({onsite_low:e.target.value})}
                  floatingLabelText="Low" hintText="Low" style={{width:'100%'}} type="number" />
              </div>
              <div className="col-xs-12 col-sm-2 col-md-2 col-lg-2 m-b-15 ">
                  <SelectField style={{width:'100%'}}
                    floatingLabelText="Unit"
                    value={onsite_unit}
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

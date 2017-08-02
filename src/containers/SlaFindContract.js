import React,{Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class SlaFindContract extends Component{
  constructor(props){
    super(props);
    this.state={
    findContract:''
    }
  }
  find=()=>{
    var {findContract}=this.state;
    return console.log(this.state);
  }
  render(){
    var {findContract}=this.state;
    return(
      <div>
        <div className="row">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 m-b-15 " style={{textAlign:'right', margin:'auto'}}>
                <h3>Find Contract</h3>
            </div>
            <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8 m-b-15 ">
                <div className="row">
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 m-b-15 ">
                      <TextField value={findContract}
                        onChange={(e)=>this.setState({findContract:e.target.value})}
                        floatingLabelText="Find contract" hintText="พิมพ์ contract" style={{width:'100%'}}  />

                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 m-b-15 ">
                        <RaisedButton style={{marginTop:20}} label="FIND"  onTouchTap={()=>this.find()} />
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

import React,{Component} from 'react';


export default class SlaRenderProjectInfo extends Component{
  constructor(props){
    super(props);
    this.state={
      contract:'',
      project:'',
      endUser:'',
      ma_start:'',
      ma_end:''
    }
  }
  render(){
    var {contract,project,endUser,ma_start,ma_end}=this.state;
    return(
      <div>
          <div className="row">
              <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                <div>Contract</div>
              </div>
              <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8">
                      <div>{this.props.contract}</div>
              </div>
          </div>
          <div className="row">
              <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                <div>Project Name</div>
              </div>
              <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8">
                <div>{this.props.project}</div>
              </div>
          </div>
          <div className="row">
                  <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                    <div>End User</div>
                  </div>
                  <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8">
                    <div>{this.props.endUser}</div>
                  </div>
          </div>
          <div className="row">
                  <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                    <div>MA Start</div>
                  </div>
                  <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8">
                    <div>{this.props.ma_start}</div>
                  </div>
          </div>
          <div className="row">
                  <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                    <div>MA End</div>
                  </div>
                  <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8">
                    <div>{this.props.ma_end}</div>
                  </div>
          </div>
      </div>
    )
  }
}

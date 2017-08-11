import React,{Component} from 'react';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import RaisedButton from 'material-ui/RaisedButton';

export default class CreateTaskForm extends Component{
  constructor(props){
    super(props)
    this.state={
      subject:'',
      date:'',
      time:'',
      expect_duration:''
    }
  }
  handleChange = (event, date) => {
   this.setState({
     date: date,
   });
 };

 handleChangeTime = (event, time) => {
  this.setState({
    time: time,
  });
};

 submit = () => {
    var {subject,date,time,expect_duration} = this.state;
    console.log(this.state);
  }

  renderButtonSubmit = () => {
    var {subject,date,time,expect_duration} = this.state;
    console.log(date, time);
    if(subject.length>1!="" && date!='' &&time!=''&&expect_duration.length>0!=""){
      return (<div>
        <RaisedButton label="Save" onClick={()=>this.submit()} />
      </div>);
    }else {
      return <spam />
    }
  }
  render(){
    var {subject,date,time,expect_duration}=this.state;
    return(
      <div>
      <div><h2>Create Task</h2></div>
      <div>
      <TextField value={subject}
        onChange={(e)=>this.setState({subject:e.target.value})}
        floatingLabelText="subject" hintText="subject" style={{width:'100%'}} type="text" />
        <DatePicker
          hintText="Date"
          value={this.state.date}
          onChange={this.handleChange}
        />
        <TimePicker
          hintText="Time"
          okLabel="OK"
          cancelLabel="Cancel"
          onChange={this.handleChangeTime}
        />
      <TextField value={expect_duration}
        onChange={(e)=>this.setState({expect_duration:e.target.value})}
        floatingLabelText="expect_duration" hintText="expect_duration" style={{width:'100%'}} type="number" max="8" min="1" />
        </div>
        <div>
          {this.renderButtonSubmit()}
        </div>
      </div>
    )
  }
}

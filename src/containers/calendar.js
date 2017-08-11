import React,{Component} from 'react';
import { render } from 'react-dom';
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css'; // only needs to be imported once
import moment from 'moment';

export default class calendar extends Component{
  constructor(props){
    super(props)

}

render(){
  var today = new Date();
  var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
      return(
        <div>
        <InfiniteCalendar
          width={400}
          height={600}
          selected={today}
          disabledDays={[0,6]}
          minDate={lastWeek}
          onSelect={function(date) {alert('You selected: ' + moment().format('YYYY MM DD'))}} />

        </div>
      );
      }
}

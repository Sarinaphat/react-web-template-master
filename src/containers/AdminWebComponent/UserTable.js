import React,{Component} from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import {UserMainColumns} from './UserMainColumns';


export default class UserTable extends Component{
  constructor(props){
    super();
      this.state =  {data:[
      {sid:1,user:'ACE',created_by:'Autsakorn Tanyianniti', created_datetime:'2017-07-01 08:00:00'},
      {sid:2,user:'CCD',created_by:'Autsakorn Tanyianniti', created_datetime:'2017-07-01 08:22:00'},
      {sid:3,user:'GSP',created_by:'Autsakorn Tanyianniti', created_datetime:'2017-07-01 08:55:00'},
      ]}
  }

  render(){
    return(
      <div>
        <div>
          <h2>Role Management</h2>
        </div>
        <div className="table-wrap">
          <ReactTable
            className="-striped -highlight"
            data={this.state.data}
            columns={UserMainColumns}
             showPagination={false}
          />
      </div>
    </div>
    )
  }
}

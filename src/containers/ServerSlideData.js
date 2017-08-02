import React, {Component} from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import {columns} from './SlaTableColumns';
import TextField from 'material-ui/TextField';

export default class ServerSlideData extends Component{
  constructor(props){
    super(props);

  }
  render(){
    var data=[
      {firstname:'kaew',lastname:'ka' ,age:'24'},
      {firstname:'mas',lastname:'ma',age:'28'},
      {firstname:'nat',lastname:'na',age:'31'}
    ]

    return(
      <div>
        <div>React Table</div>
        <TextField hintText="Name Level 1"  />
        <div className="table-wrap">
          <ReactTable
            className="-striped -highlight"
            data={data}
            columns={columns}
            defaultPageSize={10}
            SubComponent={(row) => {
              console.log(row);
              return (
                <div style={{padding: '20px'}}>
                  <em>{row.row.firstname}</em><br />
                  <em>{row.row.lastname}</em><br />
                  <em>{row.row.age}</em>
                </div>
              )
            }}
          />
        </div>
      </div>
    )
  }
}

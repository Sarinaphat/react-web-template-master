import React,{Component} from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import {columns} from './TeamSlaTableColumns';


export default class TeamSlaTable extends Component{
  constructor(props){
    super(props);

  }
  render(){
    var data=[
      {TeamName:'TIS',NumberMember:'001'},
      {TeamName:'SSS',NumberMember:'002'},
      {TeamName:'GIS',NumberMember:'003'},
    ]
    return(
      <div>
        <div>React Table</div>

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
                  <em>{row.row.TeamName}</em><br />
                  <em>{row.row.NumberMember}</em><br />
                </div>
              )
            }}
          />
        </div>
      </div>
    )
  }
}

import React,{Component} from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import {ContractTableColumns} from './ContractTableColumns';
import ContractFromContractno from './ContractFromContractno';
import ContractDetail from './ContractDetail';
export default class ContractTable extends Component {
  constructor(props) {
    super();
    this.state =  {data:[
      {contract_no:'0001',created_by:'Nut', created_datetime:'2017-07-01 08:00:00'},
      {contract_no:'0002',created_by:'Mas', created_datetime:'2017-04-01 15:22:00'},
      {contract_no:'0003',created_by:'Nat', created_datetime:'2017-01-01 18:55:00'},
      ],
      loaded:false
    }
  }
  componentDidMount(){
    this.loadData();
  }
  loadData = () => {
    //LOAD DATA FROM SERVER
    this.setState({ loaded:true});
  }
   render(){
     if(this.state.loaded){
      return(
        <div>
          <div>
            <h2>Contract Management</h2>
          </div>
          <div className="table-wrap">
            <ReactTable
              className="-striped -highlight"
              data={this.state.data}
              columns={ContractTableColumns}
               showPagination={false}
               SubComponent={(row) => {
                 console.log(row);
                 return (
                   <div style={{padding: '20px'}}>
                     <ContractDetail  contract_no={row.original.contract_no} />
                   </div>
                 )
               }}
            />
        </div>
      </div>
      )
    }else{
      return (<div>Loading...</div>);
    }
  }
}

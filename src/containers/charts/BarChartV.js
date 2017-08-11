import React,{Component} from 'react';
import {LineChart,YAxis,XAxis,CartesianGrid,Tooltip,Legend,Line} from 'recharts';


const data = [
      {name: 'Page A', uv: 4000, pv: 2400,rv:1000, amt: 2400},
      {name: 'Page B', uv: 3000, pv: 1398,rv:2000, amt: 2210},
      {name: 'Page C', uv: 2000, pv: 9800,rv:3000, amt: 2290},
      {name: 'Page D', uv: 2780, pv: 3908,rv:1000, amt: 2000},
      {name: 'Page E', uv: 1890, pv: 4800,rv:6000, amt: 2181},
      {name: 'Page F', uv: 2390, pv: 3800,rv:4000, amt: 2500},
      {name: 'Page G', uv: 3490, pv: 4300,rv:1000, amt: 2100},
];


export default class BarChartV extends Component{
  constructor(props){
    super(props)

  }

render(){
  return(
    <div>
          <LineChart width={730} height={250} data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="2 2" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            <Line type="monotone" dataKey="rv" stroke="#ffb3b3" />
          </LineChart>
    </div>

  )
}
}

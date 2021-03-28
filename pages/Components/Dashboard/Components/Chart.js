import React from 'react';
import {Bar, Doughnut} from 'react-chartjs-2';

const state = {
  labels: [],
  datasets: [
    {
      label: 'doughnet',
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,0)',
      borderWidth: 1,
      data: [65, 59, 80, 81, 56]
    }
  ]
}

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Doughnut
          data={state}
          options={{
            title:{
              display:true,
              text:'',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    );
  }
}
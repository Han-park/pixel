import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import { Line } from "react-chartjs-2";

const data = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
      {
        label: '# of Posts',
        data: [12, 19, 3, 5, 2, 3],
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
    ],
  };
  
  const options = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };


export default function OverviewGraph() {

  return (
    <div>
     <Typography variant="h5" gutterBottom component="div" sx={{ml: 1, mt: 3, fontSize: 20}}>
        최근 한달 간 n개의 포스트를 남겼습니다.
      </Typography> 
      <Paper variant="outlined" sx={{ p: 2}}>
        <Line data={data} options={options} />
      </Paper>
    </div>
  );
}
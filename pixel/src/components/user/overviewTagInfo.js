import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import { Radar } from 'react-chartjs-2';

const data = {
    labels: ['Thing 1', 'Thing 2', 'Thing 3', 'Thing 4', 'Thing 5', 'Thing 6'],
    datasets: [
      {
        label: '# of Votes',
        data: [2, 9, 3, 5, 2, 3],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };
  
  const options = {
    scale: {
      ticks: { beginAtZero: true },
    },
  };

export default function OverviewTagInfo() {
  return (
    <div>
     <Typography variant="h5" gutterBottom component="div" sx={{ml: 1, mt: 3, fontSize: 20}}>
        최근 한달 간 가장 많이 사용한 태그는 '테크', '예술', '생각' 입니다.
      </Typography> 
      <Paper variant="outlined" sx={{ p: 2}}>
      <Radar data={data} options={options} />

      </Paper>
    </div>
  );
}
import {ChartOptions} from 'chart.js';

export const options: ChartOptions = {
  elements: {
    rectangle: {
      borderWidth: 2,
    }
  },
  responsive: true,
  legend: {
    position: 'right',
  },
  title: {
    display: true,
    text: 'Chart.js Horizontal Bar Chart'
  },
  scales: {
    xAxes: [{display: true}],
    yAxes: [
      {display: true, ticks: {beginAtZero: true}}
      ]
  }
};

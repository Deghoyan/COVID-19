import React from 'react';
import ReactApexChart from 'react-apexcharts';


export const DailyGraph = ({ graphCode }) => {

  const arr = graphCode.timeline ? [...graphCode.timeline] : [];

  const recovered = arr.map(res => res.new_recovered);
  const deaths = arr.map(res => res.new_deaths);
  const confirmed = arr.map(res => res.new_confirmed);
  const date = arr.map(res => res.date);

  const series = [{
    name: 'new recovered',
    type: 'line',
    data: [...recovered],
    color: '#48bb78'
  }, {
    name: 'new deaths',
    type: 'line',
    data: [...deaths],
    color: '#f56565'
  },
  {
    name: 'new confirmed',
    type: 'area',
    data: [...confirmed],
    color: '#a0aec0',
  }
  ];
  const options = {
    chart: {
      height: 350,
      type: 'line',
      toolbar: {
        show: false,
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: 1.5,
      curve: 'straight'
    },
    title: {
      text: 'Total',
      align: 'bottom',
      offsetY: 30,
      style: {
        fontSize: '1.875rem',
        color: 'color: rgba(45,55,72,1)',
        marginTop: 50,
      },
    },
    fill: {
      type: 'solid',
      opacity: [1, 1],
    },
    markers: {
      size: 0
    },
    yaxis: [
      {
        title: {
          text: 'active (gray area)',
        },
      },
      {
        opposite: true,
        title: {
          text: 'recovered|deaths',
        },
      },
    ],
    xaxis: {
      type: 'datetime',
      categories: [...date]
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function (y) {
          if (typeof y !== "undefined") {
            return y.toFixed(0) + " points";
          }
          return y;
        }
      },
      x: {
        format: 'mm-dd'
      }

    }
  }
  return (

    <div id='apexchart'>
      <ReactApexChart options={options} series={series} type="line" height={350} width={470} />
    </div>

  )
}
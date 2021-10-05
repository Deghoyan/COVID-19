import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { useState, useEffect } from 'react';


export const Graph = () => {
  const [timeLine, setTimeLine] = useState([]);
  
  useEffect(() => {
    fetch("https://corona-api.com/timeline")
      .then((res) => res.json())
      .then((res) => {
        setTimeLine(res.data);
      })
      .catch(err => console.log(err));
  }, [])
  
  const recovered = timeLine.map(res => res.recovered)
  const deaths = timeLine.map(res => res.deaths)
  const active = timeLine.map(res => res.active)
  const date = timeLine.map(res => res.date)

  const series = [
    {
      name: 'recovered',
      type: 'line',
      data: [...recovered],
      color: '#48bb78'
    },
    {
      name: 'deaths',
      type: 'line',
      data: [...deaths],
      color: '#f56565'
    },
    {
      name: 'active',
      type: 'area',
      data: [...active],
      color: '#a0aec0',
    }
  ];
  const options = {
    chart: {
      height: 350,
      type: 'line',
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 1.5,
      curve: 'straight'
    },
    fill: {
      type: 'diagonal1',
      pattern: {
        style: 'circles',
        width: 2,
        height: 2,
        strokeWidth: 1
      }
    },
    markers: {
      size: 0,
    },
    yaxis: [
      {
        title: {
          text: 'active (gray area)',
        }
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
    <>
      <div id='apexchart'>
        <ReactApexChart options={options} series={series} type="line" height={200} width={992} />
      </div>
    </>
  )
}
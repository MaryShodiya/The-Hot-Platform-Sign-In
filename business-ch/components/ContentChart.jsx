import React, { useState, useEffect } from "react";
import Chart from "chart.js";
//import "chartjs-plugin-datalabels";
import "tailwindcss/tailwind.css";

function ChartContent() {
  const [chart, setChart] = useState(null);

  useEffect(() => {
    const ctx = document.getElementById("myChart").getContext("2d");

    const currentWeekData = [3000, 2350, 2618, 2100, 3500, 3800, 3000, 2500, 2704, 2100, 3400, 3700,];
    const prevWeekData = [1800, 3000 , 1500, 2600, 2357, 1709, 1140, 1400, 3000, 1200, 2700, 2500];

    const data = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [
        {
          label: "Current Week",
          backgroundColor: "rgba(0, 0, 0)",
          borderColor: "rgb(0,0,0.5)",
          borderWidth:0.01,
          data: currentWeekData,
        },
        {
          label: "Previous Week",
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          borderColor: "rgb(0, 0, 0)",
          borderWidth:0.01,
          data: prevWeekData,
        },
      ],
    };

    const options = {
      plugins: {
        datalabels: {
          align: "end",
          anchor: "end",
          font: {
            size: 14,
          },
          formatter: function (value, context) {
            return value + " visits";
          },
        },
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              callback: function (value) {
                if (value % 1 === 0) {
                  return value;
                }
              },
            },
            scaleLabel: {
              display: true,
              //labelString: "Number of Visits",
            },
          },
        ],
        xAxes: [
          {
            scaleLabel: {
              display: true,
              //labelString: "Day of Week",
            },
          },
        ],
      },
    };

    const myChart = new Chart(ctx, {
      type: "bar",
      data: data,
      options: options,
    });

    setChart(myChart);

    return () => {
      myChart.destroy();
    };
  }, []);

  return (
    <div className="flex flex-col items-center  justify-center">
      <div className="grid grid-cols-3">
      <h1 className="text-left font-medium mb-4 pl-3 ">Total Users</h1>
      <p className="text-xs text-grey"> Profile visit </p>
      <p className="text-xs text-grey"> Operating Status </p>
</div>
<canvas id="myChart" width="900" height="500"></canvas>
      
    </div>
  );
}

export default ChartContent;



import React, { useState, useEffect } from "react";
import PieChart from "chart.js";
//import "chartjs-plugin-datalabels";
import "tailwindcss/tailwind.css";

function PieContentChart() {
  const [chart, setChart] = useState(null);

  useEffect(() => {
    const ctx = document.getElementById("myPieChart").getContext("2d");

    const data = {
      labels: ["Likes", "Comment", "Share"],
      datasets: [
        {
          backgroundColor: ["#E2b852", "#f5e7c5", '#000000'],
          data: [255, 124, 100],
          active: false,
        },
      ],
    };

    const options = {
      plugins: {
        datalabels: {
          color: "#fff",
          formatter: function (value, context) {
            return value + " (" + context.dataset.labels[context.dataIndex] + ")";
          },
        },
      },
    };

    const myPieChart = new PieChart(ctx, {
      type: "doughnut",
      data: data,
      options: options,
    });

    setChart(myPieChart);

    return () => {
      myPieChart.destroy();
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-left font-medium mb-4 pl-3 pt-4">Last 30 Days Performance </h1>
      <canvas id="myPieChart" width="400" height="400"></canvas>
  </div>
  );
}

export default PieContentChart;

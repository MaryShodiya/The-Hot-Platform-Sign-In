import React, { useState, useEffect } from "react";
import RatingChart from "chart.js";
//import "chartjs-plugin-datalabels";
import "tailwindcss/tailwind.css";

function RatingCharts() {
  const [chart, setChart] = useState(null);

  useEffect(() => {
    const ctx = document.getElementById("myRatingChart").getContext("2d")

    const data = {
      labels: ["Non Followers", "Followers", "Weekly Target"],
      datasets: [
        {
          backgroundColor: ["#000000", "#f5e7c5", '#000000'],
          data: [20, 80, 50],
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

    const myRatingChart = new RatingChart(ctx, {
      type: 'pie',
      data: data,
      options: options,
    });

    setChart(myRatingChart);

    return () => {
      myRatingChart.destroy();
    };
  }, []);

  return (
    <div className="flex flex-col justify-center">
      <h1 className="text-left font-medium mb-4 pl-3 pt-4">Your Rating </h1>
      <p className="text-xs text-grey"> Lorem ipsum dolor sit amet, consectetur adipiscing</p>
      <canvas className="mt-5" id="myRatingChart" width="400" height="400"></canvas>
  </div>
  );
}

export default RatingCharts;
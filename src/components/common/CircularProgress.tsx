"use client";

import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
// import ChartDataLabels from "chartjs-plugin-datalabels"; // Import plugin
import type { ChartOptions } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend); // Register plugin

const CircularProgress = ({ progress = 75 }) => {
  const data = {
    labels: ["Tech", "HealthCare", "Education", "Environment"],
    datasets: [
      {
        label: "Progress",
        data: [60, 70, 20, 50],
        backgroundColor: ["#F9BA0F", "#FFCE48", "#FFDC7C", "#FFEAB2"],
        borderWidth: 0,
        borderRadius: 20,
        cutout: "70%",
      },
    ],
  };

  const options: ChartOptions<"doughnut"> = {
    plugins: {
      tooltip: {
        enabled: false,
      },
      legend: {
        display: true,
        position: "right" as const,
        labels: {
          padding: 20,
          boxWidth: 20,
          usePointStyle: true,
          font: {
            size: 12,
            family: "Roboto",
          },
        },
      },
      title: {
        display: true,
        text: `${progress}%`,
        position: "left" as const,
        color: "#333",
        font: {
          size: 20,
          weight: "bold",
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="w-fit mx-auto">
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default CircularProgress;

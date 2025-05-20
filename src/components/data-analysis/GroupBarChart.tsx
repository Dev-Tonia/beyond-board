"use client";

import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { CategoryScale, Chart as ChartJS } from "chart.js";

ChartJS.register(CategoryScale);

export default function GroupedBarChart() {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      // Destroy existing chart instance if it exists
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const ctx = chartRef.current.getContext("2d");

      if (ctx) {
        chartInstance.current = new Chart(ctx, {
          type: "bar",
          data: {
            labels: [
              "Accounting & Finance",
              "Communication",
              "Computer & Information",
              "Entrepreneurship",
              "Human Resources",
              "Journalism & Media",
              "IT & Cybersecurity",
              "Law Enforcement",
              "Law Practice",
              "Media & Communication",
              "Other",
              "Project Management",
              "Science & Engineering",
              "Security & Risk Mgmt",
            ],
            datasets: [
              {
                label: "In Africa",
                data: [150, 0, 90, 35, 25, 25, 0, 0, 0, 15, 0, 2, 15, 0],
                backgroundColor: "#FFB800", // Yellow color
                borderRadius: {
                  topLeft: 4,
                  topRight: 4,
                  bottomLeft: 0,
                  bottomRight: 0,
                },
                borderSkipped: false,
              },
              {
                label: "In U.S.",
                data: [20, 10, 35, 0, 0, 0, 105, 35, 8, 15, 0, 0, 0, 15],
                backgroundColor: "#FF6B00", // Orange color
                borderRadius: {
                  topLeft: 4,
                  topRight: 4,
                  bottomLeft: 0,
                  bottomRight: 0,
                },
                borderSkipped: false,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: "top",
                align: "start",
                labels: {
                  boxWidth: 15,
                  usePointStyle: true,
                  pointStyle: "rect",
                },
              },
              title: {
                display: true,
                text: "Stacked Bar Chart: Total Years Of Experience By Profession (Africa And U.S.)",
                font: {
                  size: 16,
                  weight: "bold",
                },
                padding: {
                  bottom: 30,
                },
              },
              tooltip: {
                mode: "index",
                intersect: false,
              },
            },
            scales: {
              x: {
                ticks: {
                  autoSkip: false,
                  maxRotation: 45,
                  minRotation: 45,
                  font: {
                    size: 20,
                  },
                },
                grid: {
                  display: false,
                },
                // barPercentage: 0.9,
                // categoryPercentage: 0.8,
              },
              y: {
                beginAtZero: true,
                max: 160,
                ticks: {
                  stepSize: 20,
                },
                title: {
                  display: false,
                },
              },
            },
          },
        });
      }
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="w-full h-full">
      <canvas ref={chartRef}></canvas>
    </div>
  );
}

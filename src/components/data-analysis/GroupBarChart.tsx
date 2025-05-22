"use client";

import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { CategoryScale, Chart as ChartJS } from "chart.js";

ChartJS.register(CategoryScale);

export default function GroupedBarChart({
  africaData,
  usData,
  maxCount = 150,
  stepSize = 20,
  title,
}: {
  africaData: number[];
  usData: number[];
  maxCount?: number;
  stepSize?: number;
  title: string;
}) {
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
                data: africaData,
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
                data: usData,
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
                text: title,
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
                max: maxCount,
                ticks: {
                  stepSize: stepSize,
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

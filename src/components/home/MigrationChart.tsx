"use client";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { useEffect } from "react";
import { Doughnut } from "react-chartjs-2";

//  Register required Chart.js components and plugins
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

export default function MigrationChart({
  title = " Before Migrating",
  data: chartData,
}: {
  title?: string;
  data?: any;
}) {
  useEffect(() => {
    const event = new Event("resize");
    window.dispatchEvent(event);
  }, []);

  // Data for the chart
  const data = {
    labels: ["Education", "Healthcare", "IT", "Others"],
    datasets: [
      {
        label: "Progress",
        data: chartData,
        backgroundColor: [
          "#F9C74F", // Education
          "#F8961E", // Healthcare
          "#FAEDCD", // IT
          "#F9E5B1", // Others
        ],
        borderWidth: 0,
        borderRadius: 50, // Add rounded corners to segments
        spacing: -50, // Add spacing between segments for stacked effect
        // offset: [2, 4, 6, 8], // Offset segments to create stacking effect
        cutout: "70%",
      },
    ],
  };

  // Counts for each category
  const counts = [4, 13, 5, 8];

  // Chart options
  const options: ChartOptions<"doughnut"> = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: {
        // top: 20,
        right: 100, // Add significant padding to ensure title has space
        // bottom: 20,
        // left: 20,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            const label = context.label || "";
            const value = context.formattedValue;
            const index = context.dataIndex;
            return `${label} (${counts[index]}): ${value}%`;
          },
        },
      },
      datalabels: {
        color: "#000",
        font: {
          weight: "bold" as const,
          size: 10,
        },
        formatter: (value: number) => {
          return value + "%";
        },
        // Position the labels - using specific allowed values
        anchor: "start" as const,
        align: "center" as const,
        // offset: -30,
      },
    },
  };

  return (
    <div className="flex items-center relative  w-full  ">
      {/* Chart Container */}
      {/* <div className=" w-full h-full flex items-center justify-center"> */}
      <div className=" w-full relative">
        <Doughnut data={data} options={options} width={320} height={300} />
      </div>
      {/* </div> */}

      {/* Legend and Title */}
      <div className="flex flex-col items-start -ml-20">
        <h2 className="text-md font-bold mb-2 text-black text-nowrap">
          {title}
        </h2>
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#F9C74F]"></div>
            <span>Education</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#F8961E]"></div>
            <span>Healthcare</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#FAEDCD]"></div>
            <span>IT</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#F9E5B1]"></div>
            <span>Others</span>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";
import React, { useState, useEffect } from "react";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
} from "chart.js";

ChartJS.register(Title, Tooltip, Legend, PointElement, LineElement);
import style from "./styles/barChart.module.css";

function RevenueLine({ selectedSection }) {

  const labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Dec",
  ]
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({
    animations: {
        tension: {
          duration: 1000,
          easing: "linear",
          from: 1,
          to: 0,
          loop: true,
        },
      },
  });

  useEffect(() => {
    if (selectedSection === "2022/2023") {
      setChartData({
        labels: labels,
        datasets: [
          {
            label: "First Term",
            data: [80, 75, 90, 65, 95, 20, 50, 60, 80, 90, 70, 95],
            backgroundColor: ["#0b75ee"],
            borderColor: "#0b75ee",
            tension: 0.4,
          },
          {
            label: "Second Term",
            data: [50, 40, 30, 55, 25, 40, 60, 46, 70, 94, 10, 15],
            backgroundColor: ["#0c7b00"],
            borderColor: "#0c7b00",
            tension: 0.4,
          },
          {
            label: "Third Term",
            data: [30, 20, 40, 15, 85, 40, 60, 43, 60, 70, 88, 90],
            backgroundColor: ["#f0ca2d"],
            borderColor: "#f0ca2d",
            tension: 0.4,
          },
        ],
      });
    } else if (selectedSection === "2023/2024") {
      setChartData({
        labels: labels,
        datasets: [
          {
            label: "First Term",
            data: [62, 24, 90, 40, 50],
            backgroundColor: ["#03254b"],
            borderColor: "#03254b",
            tension: 0.1,
          },
          {
            label: "Second Term",
            data: [60, 45, 35, 60, 30],
            backgroundColor: ["#64a4ec"],
            borderColor: "#64a4ec",
            tension: 0.4,
          },
          {
            label: "Third Term",
            data: ["40", "30", "50", "20", "90"],
            backgroundColor: ["#c410eb"],
            borderColor: "#c410eb",
            tension: 0.4,
          },
        ],
      });
    } else if (selectedSection === "2024/2025") {
      setChartData({
        labels: labels,
        datasets: [
          {
            label: "First Term",
            data: [50, 60, 30, 40, 70],
            backgroundColor: ["#0b75ee"],
            borderWidth: 0,
            barThickness: 10,
            borderRadius: 10,
          },
          {
            label: "Second Term",
            data: [60, 45, 35, 60, 30],
            backgroundColor: ["#0c7b00"],
            borderWidth: 0,
            barThickness: 10,
            borderRadius: 10,
          },
          {
            label: "Third Term",
            data: [29, 40, 60, 70, 90],
            backgroundColor: ["#34023f"],
            borderWidth: 0,
            barThickness: 10,
            borderRadius: 10,
          },
        ],
      });
    } else if (selectedSection === "2025/2026") {
      setChartData({
        labels: labels,
        datasets: [
          {
            label: "First Term",
            data: [60, 45, 85, 95, 63],
            //   backgroundColor: ["#9a7a0b"],
            fill: false,
            borderColor: "rgb(75, 192, 192)",
            tension: 0.1,
          },
          {
            label: "Second Term",
            data: [40, 85, 38, 45, 90],
            backgroundColor: ["#375209"],
            borderColor: "#375209",
            tension: 0.4,
          },
          {
            label: "Third Term",
            data: [40, 90, 40, 67, 75],
            backgroundColor: ["#523605"],
            borderColor: "#523605",
            tension: 0.4,
          },
        ],
      });
    } else if (selectedSection === "2026/2027") {
      setChartData({
        labels: labels,
        datasets: [
          {
            label: "First Term",
            data: [55, 45, 85, 45, 80],
            backgroundColor: ["#990419"],
            borderColor: "#990419",
            tension: 0.4,
          },
          {
            label: "Second Term",
            data: [60, 50, 85, 65, 60],
            backgroundColor: ["#7b303b"],
            borderColor: "#7b303b",
            tension: 0.4,
          },
          {
            label: "Third Term",
            data: [20, 95, 90, 80, 70],
            backgroundColor: ["#1e40b1"],
            borderColor: "#1e40b1",
            tension: 1.4,
          },
        ],
      });
    }

    setChartOptions({
      type: "line",
      plugins: {
        legend: {
          position: "bottom",
          labels: {
            boxWidth: 40,
            usePointStyle: true,
            pointStyle: "circle",
            padding: 25,
            font: {
              size: 12,
            },
          },
        },
        animations: {
          tension: {
            duration: 1000,
            easing: "linear",
            from: 1,
            to: 0,
            loop: true,
          },
        },       

        title: {
          display: true,
          text: `Revenue Statistics ${selectedSection}`,
        },
      },
      responsive: true,
      maintainAspectRatio: false,
    });
  }, [selectedSection]);
  return (
    <section className={style.BarChart__main}>
      <Line
        type="line"
        data={chartData}
        options={chartOptions}
        width={160}
        height={140}
      />
    </section>
  );
}

export default RevenueLine;

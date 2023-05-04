"use client";
import React, { useState, useEffect } from "react";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
import style from "./styles/barChart.module.css";

function BarChart({ selectedSection }) {
  const labels = ["Student", "Teacher", "Parent", "Staff", "Management"];
  const datasets = [
    {
      label: "First Term",
      data: [80, 75, 90, 65, 95],      
      backgroundColor: "#0b75ee",
      borderWidth: 0,
      barThickness: 10,
      borderRadius: 10,
    },

    {
      label: "Second Term",
      data: [50, 40, 30, 55, 25],
      backgroundColor: ["#0c7b00"],
      borderWidth: 0,
      barThickness: 10,
      borderRadius: 10,
    },

    {
      label: "Third Term",
      data: ["30", "20", "40", "15", "85"],
      backgroundColor: ["#f0ca2d"],
      borderWidth: 0,
      barThickness: 10,
      borderRadius: 10,
    },

  ];
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    if (selectedSection === "2022/2023") {
      setChartData({
        labels: labels,
        datasets: datasets,
      });
    } else if (selectedSection === "2023/2024") {
      setChartData({
        labels: labels,
        datasets: [
          {
            label: "First Term",
            data: [62, 24, 90, 40, 50],
            backgroundColor: ["#03254b"],
            borderWidth: 0,
            barThickness: 10,
            borderRadius: 10,
          },
          {
            label: "Second Term",
            data: [60, 45, 35, 60, 30],
            backgroundColor: ["#64a4ec"],
            borderWidth: 0,
            barThickness: 10,
            borderRadius: 10,
          },
          {
            label: "Third Term",
            data: ["40", "30", "50", "20", "90"],
            backgroundColor: ["#c410eb"],
            borderWidth: 0,
            barThickness: 10,
            borderRadius: 10,
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
            backgroundColor: ["#9a7a0b"],
            borderWidth: 0,
            barThickness: 10,
            borderRadius: 10,
          },
          {
            label: "Second Term",
            data: [40, 85, 38, 45, 90],
            backgroundColor: ["#375209"],
            borderWidth: 0,
            barThickness: 10,
            borderRadius: 10,
          },
          {
            label: "Third Term",
            data: [40, 90, 40, 67, 75],
            backgroundColor: ["#523605"],
            borderWidth: 0,
            barThickness: 10,
            borderRadius: 10,
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
            borderWidth: 0,
            barThickness: 10,
            borderRadius: 10,
          },
          {
            label: "Second Term",
            data: [60, 50, 85, 65, 60],
            backgroundColor: ["#7b303b"],
            borderWidth: 0,
            barThickness: 10,
            borderRadius: 10,
          },
          {
            label: "Third Term",
            data: [20, 95, 90, 80, 70],
            backgroundColor: ["#1e40b1"],
            borderWidth: 0,
            barThickness: 10,
            borderRadius: 10,
          },
        ],
      });
    }

    setChartOptions({
      type: "bar",
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

        title: {
          display: true,
          text: `Population ${selectedSection}`,
        },
      },
      responsive: true,
      maintainAspectRatio: false,
    });
  }, [selectedSection]);
  return (
    <section className={style.BarChart__main}>
      <Bar data={chartData} options={chartOptions} width={160} height={140} />
    </section>
  );
}

export default BarChart;

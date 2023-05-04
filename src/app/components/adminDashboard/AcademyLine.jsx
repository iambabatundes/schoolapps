"use client";
import React, { useState, useEffect, useRef } from "react";

import jsPDF from "jspdf";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
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

import style from "./styles/academyLine.module.css";
import Icon from "./Icon";

function AcademyLine({ selectedSection }) {
  const chartRef = useRef(null);
  const dropdownRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lineOptions, setLineOptions] = useState({});
  const [lineData, setLineData] = useState({
    datasets: [],
  });

  const labels = ["Primary", "Junior", "Secondary", "Staff", "Management"];

  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    if (selectedSection === "2022/2023") {
      setLineData({
        labels: labels,
        datasets: [
          {
            label: "First Term",
            data: [80, 75, 90, 65, 95],
            backgroundColor: ["#0b75ee"],
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
        ],
      });
    } else if (selectedSection === "2023/2024") {
      setLineData({
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
      setLineData({
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
      setLineData({
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
      setLineData({
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

    setLineOptions({
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

        title: {
          display: true,
          text: `Performance ${selectedSection}`,
        },
      },
      responsive: true,
      // maintainAspectRatio: false,
    });
  }, [selectedSection]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setMenuOpen(true);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  useEffect(() => {
    if (menuOpen) {
      function handleClickInside(event) {
        setMenuOpen(false);
      }

      const dropdownLinks = dropdownRef.current.querySelectorAll("div");
      dropdownLinks.forEach((link) =>
        link.addEventListener("click", handleClickInside)
      );

      return () => {
        dropdownLinks.forEach((link) =>
          link.removeEventListener("click", handleClickInside)
        );
      };
    }
  }, [menuOpen]);

  const downloadChart = () => {
    const canvas = document.getElementsByTagName("canvas")[0];
    const url = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.download = `chart-${selectedSection}.png`;
    link.href = url;
    link.click();
  };

  const handlePdfDownload = () => {
    const chartCanvas = document.querySelector("canvas");
    const chartImg = chartCanvas.toDataURL("image/png");
    const pdf = new jsPDF();
    pdf.addImage(chartImg, "PNG", 10, 10, 150, 120);
    pdf.save(`chart_${selectedSection}.pdf`);
  };

  // const handlePrintCart = () => {
  //   const chart = chartRef.current;
  //   if (chart) {
  //     const canvas = chart.chartInstance?.canvas;
  //     const dataUrl = canvas?.toDataURL();
  //     let windowContent = "<!DOCTYPE html>";
  //     windowContent += "<html>";
  //     windowContent += "<head><title>Print chart</title></head>";
  //     windowContent += "<body>";
  //     windowContent +=
  //       "<Bar ref={chartRef} data={lineData} options={lineOptions}width={160} height={140}/>";
  //     windowContent += "</body>";
  //     windowContent += "</html>";
  //     let printWindow = window.open("", "", "height=400,width=800");
  //     printWindow.document.write(windowContent);
  //     printWindow.document.close();
  //     printWindow.focus();
  //     setTimeout(() => {
  //       printWindow.print();
  //       printWindow.close();
  //     }, 9000); // wait 1 second before printing
  //   }
  // };

  function handleExcelDownload() {
    /* create a new workbook and add a worksheet */
    const workbook = XLSX.utils.book_new();
    const worksheetData = [
      labels,
      lineData.datasets[0].data,
      lineData.datasets[1].data,
      lineData.datasets[2].data,
    ];
    const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);

    /* add the worksheet to the workbook */
    XLSX.utils.book_append_sheet(workbook, worksheet, "Performance");

    /* convert the workbook to an Excel file and download it */
    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });
    const fileName = `Performance_${selectedSection}.xlsx`;
    const file = new Blob([excelBuffer], { type: "application/octet-stream" });
    saveAs(file, fileName);
  }

  return (
    <section className={style.AcademyLine__main}>
      <div className={style.PerformanceMenu}>
        <Icon menu className={style.PerformanceMenu__icon1} />
        <h1 className={style.PerformanceMenu__title}>
          Performance {selectedSection}
        </h1>
        <Icon
          menu
          className={style.PerformanceMenu__icon}
          onClick={handleClick}
        />

        {menuOpen && (
          <div ref={dropdownRef} className={style.PerformanceMenu__dropdown}>
            <span>Full screen</span>            
            <a onClick={downloadChart}>Download PNG</a>
            <a onClick={handlePdfDownload}>Download PDF</a>
            <span onClick={handleExcelDownload}>Download Excel</span>
          </div>
        )}
      </div>
      <Bar
        ref={chartRef}
        data={lineData}
        options={lineOptions}
        width={160}
        height={140}
      />
    </section>
  );
}

export default AcademyLine;

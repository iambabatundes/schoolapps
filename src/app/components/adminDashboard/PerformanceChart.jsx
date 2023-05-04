import { Bar } from "react-chartjs-2";
import _ from "lodash";
import Chart from "chart.js/auto";
import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.register(ChartDataLabels);

export default function PerformanceChart({ data }) {
  const chartData = {
    labels: _.map(data, "label"),
    datasets: [
      {
        label: "Student Performance",
        data: _.map(data, "student"),
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
      {
        label: "Teacher Performance",
        data: _.map(data, "teacher"),
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
      {
        label: "Parent Performance",
        data: _.map(data, "parent"),
        backgroundColor: "rgba(255, 206, 86, 0.2)",
        borderColor: "rgba(255, 206, 86, 1)",
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    plugins: {
      datalabels: {
        color: "red",
        anchor: "end",
        align: "start",
        offset: 4,
        clamp: true,
        formatter: (value, ctx) => {
          return ctx.chart.data.labels[ctx.dataIndex];
        },
      },
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <div>
      <h1>Performance Chart</h1>
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
}

export async function getStaticProps() {
  const data = [
    { label: "Section A - Term 1", student: 80, teacher: 90, parent: 70 },
    { label: "Section A - Term 2", student: 85, teacher: 95, parent: 75 },
    { label: "Section B - Term 1", student: 70, teacher: 80, parent: 60 },
    { label: "Section B - Term 2", student: 75, teacher: 85, parent: 65 },
  ];

  return {
    props: { data },
  };
}

const chartDatas = [  
  {
    id: 1,
    labels: ["Student", "Teacher", "Parent", "Staff", "Management"],
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
  },
];


export function getchartDatas() {
  return chartDatas;
}

export function getchartDatas(id) {
  return chartDatas.find((p) => p._id === id);
}

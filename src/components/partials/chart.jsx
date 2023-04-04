import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = () => {
  // function handleHover(evt, item, legend) {
  //   legend.chart.data.datasets[0].backgroundColor.forEach(
  //     (color, index, colors) => {
  //       colors[index] =
  //         index === item.index || color.length === 9 ? color : color + "4D";
  //     }
  //   );
  //   legend.chart.update();
  // }

  // function handleLeave(evt, item, legend) {
  //   legend.chart.data.datasets[0].backgroundColor.forEach(
  //     (color, index, colors) => {
  //       colors[index] = color.length === 9 ? color.slice(0, -2) : color;
  //     }
  //   );
  //   legend.chart.update();
  // }

  const data = {
    labels: [
      "Once-off Burnt",
      "Seed Phase",
      "Team Allocation",
      "Staking Allocation",
      "Blockchain Development",
      "ICO Sales",
      "Marketing",
      "Airdrops",
      "Exchange Listing",
      "Welfare",
    ],
    datasets: [
      {
        label: "Token Distribution (%)",
        data: [40, 5, 17, 10, 10, 11, 3, 2, 1, 1],
        backgroundColor: [
          "rgba(255, 99, 132, 0.7)",
          "rgba(54, 162, 235, 0.7)",
          "rgba(255, 206, 86, 0.7)",
          "rgba(75, 192, 192, 0.7)",
          "rgba(153, 102, 255, 0.7)",
          "rgba(255, 159, 64, 0.7)",
          "rgba(255, 99, 132, 0.7)",
          "rgba(54, 162, 235, 0.7)",
          "rgba(255, 206, 86, 0.7)",
          "rgba(75, 192, 192, 0.7)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      Tooltip: {
        backgroundColor: "Red",
      },
      render: "Percentage",
      legend: {
        title: {
          display: false,
          text: "Token Distribution",
        },
        position: "right",
      },
    },
  };

  const styling = {
    backgroundColor: "#fff",
  };

  return <Pie data={data} style={styling} options={options} />;
};

export default Chart;

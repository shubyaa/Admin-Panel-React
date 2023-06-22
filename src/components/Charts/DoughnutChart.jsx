import React from "react";
import { Doughnut } from "react-chartjs-2";
import { ArcElement, Chart } from "chart.js";

Chart.register(ArcElement);

const DoughnutChart = (props) => {
  //PieChart Options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  return (
    <div className=" flex flex-col object-contain w-[150px] h-[150px]">
      <Doughnut data={props.data} options={options} />
      <h5 className=" text-titleBlack text-[16px] font-poppins font-semibold text-center p-2">
        {props.title}
      </h5>
    </div>
  );
};

export default DoughnutChart;

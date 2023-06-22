import React from "react";
import DoughnutChart from "./Charts/DoughnutChart";
import AreaChart from "./Charts/AreaChart";

const Charts = () => {
  const orderVal = 81;
  const custVal = 22;
  const revenueVal = 62;

  //Pie Chart Values (Doughnut)
  const orderData = {
    labels: [""],
    datasets: [
      {
        data: [orderVal, 100 - orderVal],
        backgroundColor: ["#FF5B5B", "rgba(255, 91, 91, 0.15)"],
        borderWidth: 1,
      },
    ],
  };

  const custData = {
    labels: ["Total Order"],
    datasets: [
      {
        data: [custVal, 100 - custVal],
        backgroundColor: ["#00B074", "rgba(0, 176, 116, 0.15)"],
        borderWidth: 1,
      },
    ],
  };

  const revenueData = {
    labels: ["Total Order"],
    datasets: [
      {
        data: [revenueVal, 100 - revenueVal],
        backgroundColor: ["#2D9CDB", "rgba(45, 156, 219, 0.15)"],
        borderWidth: 1,
      },
    ],
  };

  //Area Chart Values

  const state = {
    series: [
      {
        name: "series1",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  };

  return (
    <div className=" flex flex-row items-center justify-evenly">
      <div className=" bg-white p-4 rounded-[15px] text-titleBlack   shadow-sm flex flex-col items-start justify-start w-[720px] h-[330px] mx-3">
        <h2 className=" text-titleBlack text-start w-full text-[24px] px-3 py-2 font-poppins font-semibold">
          Pie Chart
        </h2>
        <div className=" flex flex-row w-full items-center justify-evenly mt-10">
          <DoughnutChart title="Total Order" data={orderData} />
          <DoughnutChart title="Customer Growth" data={custData} />
          <DoughnutChart title="Total Revenue" data={revenueData} />
        </div>
      </div>
      <div className=" bg-white p-4 rounded-[15px] text-titleBlack  shadow-sm flex flex-col w-[720px] h-[330px] mx-3">
        <h2 className=" text-titleBlack text-start w-full text-[24px] px-3 py-2 font-poppins font-semibold">
          Chart Order
        </h2>
        <div className=" flex w-[600px] items-end justify-center max-h-96 h-4/5">
          <AreaChart height={250} width={600} series={state.series} />
        </div>
      </div>
    </div>
  );
};

export default Charts;

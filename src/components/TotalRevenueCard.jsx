import React from "react";
import MultiLineChart from "./Charts/MultiLineChart";

const TotalRevenueCard = () => {
  const labels = ["Jan", "Feb", "Mar", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const state = {
    series: [
      {
        name: "2020",
        data: [
          31000, 40000, 28000, 51000, 42000, 109000, 100000, 17000, 45000,
          52222, 45555, 48888,
        ],
      },
      {
        name: "2021",
        data: [
          11000, 32000, 4500, 32000, 34000, 52000, 41000, 28000, 51000, 42000,
          31000, 40000,
        ],
      },
    ],
  };

  return (
    <div className=" rounded-[15px] flex flex-col bg-white py-4 px-5 m-2 w-[970px]">
      {/* <Line className="" data={lineData} options={lineOptions} /> */}
      <h2 className=" text-titleBlack text-start w-full text-[24px] px-3 py-2 font-poppins font-semibold">
        Total Revenue
      </h2>

      <MultiLineChart height={360} width={830} series={state.series} />
    </div>
  );
};

export default TotalRevenueCard;

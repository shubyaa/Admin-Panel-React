import React from "react";
import BarChart from "./Charts/BarChart";

const WeeklyCard = () => {
  return (
    <div className=" flex flex-col p-4 bg-white rounded-[15px] py-5 px-4 m-2">
      <h2 className=" text-titleBlack text-start w-full text-[24px] px-3 py-2 font-poppins font-semibold">
        Weekly Revenue
      </h2>
      <BarChart />
    </div>
  );
};

export default WeeklyCard;

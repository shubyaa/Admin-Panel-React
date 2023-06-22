import React from "react";
import { up, down } from "../assets";

const Card = (props) => (
  <div className=" bg-white rounded-[15px] flex flex-row items-center justify-center  shadow-sm p-6 w-[330px] h-[180px] mx-3">
    <img
      src={props.icon}
      alt="Order Icon"
      className=" object-contain w-[85px] h-[85px] m-2"
    />
    <div className=" flex flex-col pl-2">
      <h2 className=" text-titleBlack text-[46px] font-poppins font-semibold">
        {props.title}
      </h2>
      <h5 className="text-titleBlack text-[16px] font-poppins ">
        {props.desc}
      </h5>
      <div className=" flex flex-row items-center">
        <img
          src={props.percent > 0 ? up : down}
          alt="Indicatior"
          className=" object-contain w-[16px] h-[16px]"
        />

        <h6 className=" text-hintGrey text-[12px] ">
          {props.percent}% (30 days)
        </h6>
      </div>
    </div>
  </div>
);

const InfoCard = (props) => {
  const data = props.data;
  return (
    <div className=" flex flex-row justify-evenly">
      {data.map((item) => (
        <Card
          key={item.key}
          icon={item.icon}
          title={item.title}
          desc={item.desc}
          percent={item.percent}
        />
      ))}
    </div>
  );
};

export default InfoCard;

import React, { useState } from "react";
import { calender, dropdown } from "../assets";

import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";

const FilterCard = () => {
  const [date, setDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-row sm:p-4 p-2 items-center bg-white rounded-[15px] sm:w-[300px] w-[150px]">
      <div
        className="flex items-center justify-center p-2
         bg-blue_faded rounded-[15px]"
      >
        <img src={calender} alt="" className="sm:w-[34px] w-[20px] sm:h-[34px] h-[20px]" />
      </div>
      <div className=" flex flex-1 flex-col px-3 !border-none">
        <h2 className=" text-titleBlack sm:text-[18px] text-[10px] font-medium font-poppins">
          Filter Periods
        </h2>
        <DatePicker
          value={date}
          isOpen={isOpen}
          clearIcon={null}
          format="dd-MM-y"
          calendarIcon={null}
          onChange={(date) => setDate(date)}
          className="text-filterDates text-[10px] !border-none font-poppins focus:border-none"
        />
      </div>
      <img
        src={dropdown}
        alt=""
        className="sm:w-[24px] w-[8px] sm:h-[24px] h-[8px] object-contain"
        onClick={() => {
          if (isOpen == false) {
            setIsOpen(true);
          } else {
            setIsOpen(false);
          }
        }}
      />
    </div>
  );
};

export default FilterCard;

import React from "react";
import { bell, gift, message, profile_img, search, settings } from "../assets";
const Navbar = () => {
  return (
    <div className=" flex justify-between items-center navbar">
      <div className="relative flex-auto grow m-3">
        <SearchBar />
      </div>

      <Button
        image={bell}
        count="3"
        count_color="bg-blue"
        tint_color="bg-blue_faded"
      />
      <Button
        image={message}
        count="15"
        count_color="bg-blue"
        tint_color="bg-blue_faded"
      />
      <Button
        image={gift}
        count="10"
        count_color="bg-grey"
        tint_color="bg-grey_faded"
      />
      <Button
        image={settings}
        count="30"
        count_color="bg-red"
        tint_color="bg-red_faded"
      />

      <div className=" w-[1px] bg-lightGrey mx-2 h-[30px] rounded-full" />

      <UserInfo image={profile_img} name="Suresh" />
    </div>
  );
};

const Button = (props) => (
  <div className="p-2 items-center">
    <div className="relative inline-flex">
      <div
        className={`${props.count_color} absolute bottom-auto left-auto right-0 top-1 z-10 inline-block -translate-y-1/2 translate-x-2/4
         rounded-full bg-blue text-center border-dashboard border-[3px] sm:w-[20px] w-[10px] sm:h-[20px] h-[10px] p-[3px]
       align-baseline text-[8px] font-bold leading-none text-white`}
      >
        {props.count}
      </div>
      <div
        className={`${props.tint_color} flex items-center justify-center sm:rounded-[10px] rounded-[5px] sm:p-2 p-1`}
      >
        <img src={props.image} alt="" className="sm:w-[18px] w-[15px] sm:h-[18px] h-[15px] " />
      </div>
    </div>
  </div>
);

const SearchBar = () => (
  <div
    className=" px-3 py-1 flex justify-between 
    items-center bg-white border-none w-full min-w-[15  0px]
  rounded-[8px] border flex-row"
  >
    <input
      type="search"
      placeholder="Search here"
      className=" sm:text-[16px] text-[10px] h-[30px]
      leading-[2]  outline-none w-full
      transition duration-200 ease-in-out focus:z-[3]
       focus:text-gray-600         
        dark:text-gray-400
    dark:placeholder:text-hintGrey "
    />
    <img src={search} alt="Search Icon" className="sm:h-[18px] h-[10px] w-[18px]" />
  </div>
);

const UserInfo = (props) => (
  <div className=" flex flex-row items-center">
    <h2 className=" text-[12px] font-poppins text-gray-800">
      Hello, <span className="font-bold">{props.name}</span>
    </h2>
    <img
      src={props.image}
      alt="Image"
      className=" sm:w-[60px] w-[50px] sm:h-[60px] h-[50px]  rounded-full sm:p-2 p-1"
    />
  </div>
);

export default Navbar;

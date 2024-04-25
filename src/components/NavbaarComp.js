import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { GoSearch } from "react-icons/go";
import { AiOutlineUser } from "react-icons/ai";
import logoImg from "../Images/logo.png";

export default function NavbaarComp() {
  return (
    <>
      <div className="w-[100%] h-[100px] sticky top-0 bg-white flex justify-center overflow-hidden z-20 drop-shadow-md">
        <div className="w-[1366px] h-full flex bg-white">
          <div className=" h-full w-[25%] flex items-center justify-center">
            <img
              src={logoImg}
              alt="logo"
              className=" h-[50px] cursor-pointer"
            />
            <p className="text-[25px] font-bold text-black ml-1">TravelPulse</p>
          </div>
          <div className="h-full w-[50%] flex items-center">
            <ul className="h-full flex text-[#757783] font-medium">
              <li className="flex items-center cursor-pointer hover:text-[#313041] mr-6 h-full  border-b-2 border-transparent hover:border-b-[#E8604C]">
                Home
                <IoIosArrowDown className="mt-1" />
              </li>
              <li className="flex items-center cursor-pointer hover:text-[#313041] mr-6 h-full  border-b-2 border-transparent hover:border-b-[#E8604C]">
                Tours Page
                <IoIosArrowDown className="mt-1" />
              </li>
              <li className="flex items-center cursor-pointer hover:text-[#313041] mr-6 h-full  border-b-2 border-transparent hover:border-b-[#E8604C]">
                Destination
                <IoIosArrowDown className="mt-1" />
              </li>
              <li className="flex items-center cursor-pointer hover:text-[#313041] mr-6 h-full  border-b-2 border-transparent hover:border-b-[#E8604C]">
                News
                <IoIosArrowDown className="mt-1" />
              </li>
              <li className="flex items-center cursor-pointer hover:text-[#313041] mr-6 h-full  border-b-2 border-transparent hover:border-b-[#E8604C]">
                Page
                <IoIosArrowDown className="mt-1" />
              </li>
              <li className="flex items-center cursor-pointer hover:text-[#313041] mr-5 h-full  border-b-2 border-transparent hover:border-b-[#E8604C]">
                Contact
              </li>
            </ul>
          </div>
          <div className="h-full w-[25%] flex justify-center items-center ">
            <div className=" w-[45px] rounded-full bg-[#FAF5EE] text-[#757783] mr-5 cursor-pointer hover:text-[#E8604C]">
              <GoSearch className="w-[45px] h-[45px] p-2" />
            </div>
            <div className=" w-[45px] rounded-full bg-[#FAF5EE] text-[#757783] cursor-pointer hover:text-[#E8604C]">
              <AiOutlineUser className="w-[45px] h-[45px] p-2" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

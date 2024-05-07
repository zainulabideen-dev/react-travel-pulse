import React from "react";
import { FaPhone } from "react-icons/fa6";
import { HiMail } from "react-icons/hi";
import { FaTwitter } from "react-icons/fa";
import { RiFacebookCircleFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

export default function HeaderComp() {
  return (
    <>
      <div className="w-[100%] bg-[#313041] flex justify-center overflow-hidden">
        <div className="w-[1366px] h-[42px] flex justify-center">
          <div className="h-full w-[87%] grid grid-cols-2">
            <div className=" flex items-center">
              <div className=" cursor-pointer flex">
                <div>
                  <FaPhone className="text-[#3498DB]" />
                </div>
                <div className=" ml-3 text-sm font-semibold">
                  <p className="text-[#9D9D9D] hover:text-[#E8604C]">
                    666 888 0000
                  </p>
                </div>
              </div>
              <div className="ml-6 cursor-pointer flex">
                <div className="">
                  <HiMail className="text-[#3498DB]" />
                </div>
                <div className=" ml-3 text-sm font-semibold ">
                  <p className="text-[#9D9D9D] hover:text-[#E8604C]">
                    contact@example.com
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <div className=" flex">
                <div className="flex h-full w-[40px] items-center justify-center text-white hover:text-[#E8604C] cursor-pointer">
                  <FaTwitter className="w-7 h-7 p-1" />
                </div>
                <div className="flex h-full w-[40px] items-center justify-center text-white hover:text-[#E8604C] cursor-pointer">
                  <RiFacebookCircleFill className="w-7 h-7 p-1" />
                </div>
                <div className="flex h-full w-[40px] items-center justify-center text-white hover:text-[#E8604C] cursor-pointer">
                  <FaInstagram className="w-7 h-7 p-1" />
                </div>
                <div className="flex h-full w-[40px] items-center justify-center text-white hover:text-[#E8604C] cursor-pointer">
                  <FaPinterest className="w-7 h-7 p-1" />
                </div>
              </div>
              <div className="h- full w-[230px] bg-[#3498DB] flex items-center justify-center font-sans text-[12px] font-semibold text-white cursor-pointer ml-1">
                <p>BECOME A LOCAL GUIDE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

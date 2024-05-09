import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { Carousel } from "primereact/carousel";
import { HiMiniAdjustmentsHorizontal } from "react-icons/hi2";
import { BsCalendar2Date } from "react-icons/bs";
import { BiCurrentLocation } from "react-icons/bi";
import { RiGroupLine } from "react-icons/ri";
import { crosal_images } from "../config";

export default function CarouselComp() {
  const productTemplate = (product) => {
    return (
      <div className="w-full h-[100%]">
        <img
          alt="..."
          className="w-[100%] h-[100%] object-contain object-center"
          src={product?.image}
        />
      </div>
    );
  };

  return (
    <>
      <div className="w-[100%] h-[600px] ">
        <div className=" w-[100%] h-[500px] flex justify-center items-center overflow-hidden">
          <div className="card">
            <Carousel
              showNavigators={false}
              value={crosal_images}
              className="custom-carousel"
              circular
              autoplayInterval={3000}
              itemTemplate={productTemplate}
            />
          </div>
        </div>
        <div className=" w-[100%] h-[200px] flex justify-center  mt-[-45px] z-10 overflow-hidden">
          <div className="w-[1200px] h-[100px] bg-white rounded-xl  drop-shadow-2xl grid grid-cols-5">
            <div className=" flex justify-center items-center ">
              <div className=" w-[90%] h-[65px] border-[#c5c5c9] cursor-pointer border-b-2 flex items-center ">
                <BiCurrentLocation size={25} className="text-[#3498DB]" />
                <div className="ml-5">
                  <p className=" flex text-sm text-[#757783] font-semibold">
                    Where are you going?
                    <IoIosArrowDown className="ml-2 text-[#676978]" />
                  </p>
                  <p className="text-sm text-[#313041] font-bold">
                    Destinations
                  </p>
                </div>
              </div>{" "}
            </div>
            <div className=" flex justify-center items-center ">
              <div className=" w-[90%] h-[65px] border-[#c5c5c9] cursor-pointer border-b-2 flex items-center ">
                <BsCalendar2Date size={25} className="text-[#3498DB]" />
                <div className="ml-5">
                  <p className=" flex text-sm text-[#757783] font-semibold">
                    Departure Date?
                    <IoIosArrowDown className="ml-[60px] text-[#676978]" />
                  </p>
                  <p className="text-sm text-[#313041] font-bold">--</p>
                </div>
              </div>{" "}
            </div>
            <div className=" flex justify-center items-center ">
              <div className=" w-[90%] h-[65px] border-[#c5c5c9] cursor-pointer border-b-2 flex items-center ">
                <BsCalendar2Date size={25} className="text-[#3498DB]" />
                <div className="ml-5">
                  <p className="text-sm text-[#757783] font-semibold">Return</p>
                  <p className="text-sm text-[#313041] font-bold">--</p>
                </div>
              </div>{" "}
            </div>
            <div className=" flex justify-center items-center ">
              <div className=" w-[80%] h-[65px] border-[#c5c5c9] cursor-pointer border-b-2 flex items-center ">
                <RiGroupLine size={25} className="text-[#3498DB]" />
                <div className="ml-5">
                  <p className=" text-sm text-[#757783] font-semibold">
                    Guests
                  </p>
                  <p className="text-sm text-[#313041] font-bold">0</p>
                </div>
              </div>{" "}
            </div>
            <div className="flex items-center ">
              <div className=" w-[90%] h-[65px] cursor-pointer flex items-center ">
                <HiMiniAdjustmentsHorizontal
                  size={30}
                  className="text-[#3498DB]"
                />
                <div className="ml-3 bg-[#3498DB] w-[190px] h-full rounded-lg flex justify-center items-center">
                  <FaSearch className="mr-3 text-white" />
                  <p className="text-white text-sm font-bold">SEARCH</p>
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

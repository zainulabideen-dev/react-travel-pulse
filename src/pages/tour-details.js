import React from "react";
import HeaderComp from "../components/headerComp";
import NavbaarComp from "../components/NavbaarComp";
import { FooterComp } from "../components/FooterComp";
import { useLocation } from "react-router-dom";
import { Carousel } from "primereact/carousel";
import { IoLocationSharp } from "react-icons/io5";
import { FaMoneyBillWave } from "react-icons/fa";
import { IoIosTime } from "react-icons/io";
import { RiPlaneFill } from "react-icons/ri";
import { FaStar } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

export function TourDetailPage(props) {
  let { state } = useLocation();

  const tourImagesComp = (item) => {
    return (
      <div className="m-5">
        <img
          alt="..."
          className="w-[100%] h-[300px] z-0 object-cover m-0 p-0"
          src={item}
        />
      </div>
    );
  };

  return (
    <>
      <HeaderComp />
      <NavbaarComp />
      <div className="">
        <div className="card mt-10 px-5">
          <Carousel
            value={state?.images}
            numVisible={3}
            numScroll={3}
            className="custom-carousel"
            circular
            itemTemplate={tourImagesComp}
          />
        </div>
        <div className="grid grid-cols-2 p-10 bg-[#faf5ee]">
          <div>
            <p className="text-3xl font-bold">{state?.title}</p>
            <div className="flex items-center mt-2">
              <IoLocationSharp color="red" className="m-0 p-0" />
              <p className="ml-2 text-sm">{state?.location}</p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="flex">
              <div className="flex items-center">
                <FaMoneyBillWave className="text-orange-500 mr-3" size={25} />
              </div>
              <div>
                <p className="text-gray-400">From</p>
                <p className="text-black">{state?.price}</p>
              </div>
            </div>
            <div className="flex ml-20">
              <div className="flex items-center">
                <IoIosTime className="text-orange-500 mr-3" size={25} />
              </div>
              <div>
                <p className="text-gray-400">Duration</p>
                <p className="text-black">{state?.days} days</p>
              </div>
            </div>
            <div className="flex ml-20">
              <div className="flex items-center">
                <RiPlaneFill className="text-orange-500 mr-3" size={25} />
              </div>
              <div>
                <p className="text-gray-400">Tour Type</p>
                <p className="text-black">Cruises</p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-10">
          <div className="grid grid-cols-2">
            <div>
              <div className="flex items-center">
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <p className="ml-5 text-gray-500">4.6 by 3 reviews</p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-gray-200 flex items-center px-4 py-2 rounded-md cursor-pointer hover:bg-orange-500 hover:text-white">
                <FaShare />
                <p className="ml-2 text-sm">SHARE</p>
              </div>
              <div className="ml-10 bg-gray-200 flex items-center px-4 py-2 rounded-md cursor-pointer hover:bg-orange-500 hover:text-white">
                <FaShare />
                <p className="ml-2 text-sm">REVIEWS</p>
              </div>
              <div className="ml-10 bg-gray-200 flex items-center px-4 py-2 rounded-md cursor-pointer hover:bg-orange-500 hover:text-white">
                <CiHeart />
                <p className="ml-2 text-sm">WISH LIST</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterComp />
    </>
  );
}

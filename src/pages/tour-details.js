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
import { FaCheck } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

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
        <div className="grid grid-cols-2 p-10">
          <div>
            <p className="text-3xl font-bold">Overview</p>
            <p className="mt-2">
              Lorem ipsum available isn but the majority have suffered alteratin
              in some or form injected simply free text used by copytyping
              refreshing. Neque porro est qui dolorem ipsum quia quaed inventore
              veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              Lorem ipsum is simply free text used by copytyping refreshing.
              Neque porro est qui dolorem ipsum quia quaed inventore veritatis
              et quasi architecto beatae vitae dicta sunt explicabo. Aelltes
              port lacus quis enim var sed efficitur turpis gilla sed sit amet
              finibus eros.
            </p>
            <p className="text-3xl font-bold mt-5">Included/Exclude</p>
            <div className="grid grid-cols-2 mt-3">
              <div>
                <div className="flex items-center">
                  <FaCheck className="text-orange-400" />
                  <p className="ml-3">Pick and Drop Services</p>
                </div>
                <div className="flex items-center mt-2">
                  <FaCheck className="text-orange-400" />
                  <p className="ml-3">1 Meal Per Day</p>
                </div>
                <div className="flex items-center mt-2">
                  <FaCheck className="text-orange-400" />
                  <p className="ml-3">Cruise Dinner & Music Event</p>
                </div>
                <div className="flex items-center mt-2">
                  <FaCheck className="text-orange-400" />
                  <p className="ml-3">
                    Visit 7 Best Places in the City With Group
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <div>
                  <div className="flex items-center">
                    <RxCross2 className="text-black-400" />
                    <p className="ml-3">Additional Services</p>
                  </div>
                  <div className="flex items-center mt-2">
                    <RxCross2 className="text-black-400" />
                    <p className="ml-3">Insurance</p>
                  </div>
                  <div className="flex items-center mt-2">
                    <RxCross2 className="text-black-400" />
                    <p className="ml-3">Food & Drinks</p>
                  </div>
                  <div className="flex items-center mt-2">
                    <RxCross2 className="text-black-400" />
                    <p className="ml-3">Tickets</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="bg-[#faf5ee] w-[70%] px-5 py-5">
              <div className="border-l-4 border-orange-500 pl-3">
                <p className="text-2xl font-bold">Booking Tour</p>
              </div>
              <div className="mt-5 grid grid-cols-2 border-b-[1px] border-gray-300 pb-5">
                <div className="flex items-center">
                  <p>From:</p>
                </div>
                <div className="bg-white px-3 py-2 border border-gray-300">
                  <input type="date" placeholder="" value={""} />
                </div>
              </div>
              <div className="mt-5 grid grid-cols-2 border-b-[1px] border-gray-300 pb-5">
                <div className="flex items-center">
                  <p>Time:</p>
                </div>
                <div className="bg-white px-3 py-2 border border-gray-300">
                  <input type="time" placeholder="" value={""} />
                </div>
              </div>
              <div className="mt-5 grid grid-cols-2 border-b-[1px] border-gray-300 pb-5">
                <div className="flex items-center">
                  <p>Tickets:</p>
                </div>
                <div className="text-sm">
                  <p>please, select date first</p>
                </div>
              </div>
              <p className="text-md font-bold mt-3">Add Extra</p>
              <div className="mt-5 grid grid-cols-2 border-b-[1px] border-gray-300 pb-5">
                <div className="flex items-center">
                  <input type="checkbox" />
                  <p className="ml-3 text-sm">Service per booking</p>
                </div>
                <div className="text-sm flex justify-end">
                  <p>20,000 Pkr</p>
                </div>
              </div>
              <div className="mt-5 grid grid-cols-2 border-b-[1px] border-gray-300 pb-5">
                <div className="flex items-center">
                  <input type="checkbox" />
                  <p className="ml-3 text-sm">Service per person</p>
                </div>
                <div className="text-sm flex justify-end">
                  <div>
                    <p>Adult: 20,000 Pkr</p>
                    <p>Youth: 20,000 Pkr</p>
                  </div>
                </div>
              </div>
              <p className="text-md font-bold mt-3">Total:</p>
              <p className="bg-[#ff6900] text-white cursor-pointer py-3 mt-5 text-sm text-center rounded-md">
                BOOK NOW
              </p>
            </div>
          </div>
        </div>
      </div>
      <FooterComp />
    </>
  );
}

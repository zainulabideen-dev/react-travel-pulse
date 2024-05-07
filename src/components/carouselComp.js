import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { Carousel } from "primereact/carousel";
import icon1 from "../Images/Icon.png";
import icon2 from "../Images/Icon 02.png";
import icon3 from "../Images/Icon 03.png";
import icon4 from "../Images/Icon 04.png";
import icon5 from "../Images/Icon 05.png";
import skarduImg from "../Images/skardu.jpeg";
import hunzaImg from "../Images/hunza.jpeg";
import murreeImg from "../Images/murree.jpeg";
import nathiyagaliImg from "../Images/Nathiyagali_Khanpur_Dam.jpeg";
import { HiMiniAdjustmentsHorizontal } from "react-icons/hi2";
import { GrGroup } from "react-icons/gr";

const products = [
  {
    id: 1,
    title: "7 Days Skardu",
    location: "Skardu, Pakistan",
    price: "25,000 PKR",
    days: 7,
    image: skarduImg,
  },
  {
    id: 2,
    title: "5 Days Hunza",
    location: "Hunza, Pakistan",
    price: "20,000 PKR",
    days: 5,
    image: hunzaImg,
  },
  {
    id: 3,
    title: "2 Days Murree",
    location: "Murree, Pakistan",
    price: "15,000 PKR",
    days: 2,
    image: murreeImg,
  },
  {
    id: 4,
    title: "2 Days Nathiyagali Khanpur Dam",
    location: "Nathiyagali Khanpur Dam, Pakistan",
    price: "18,000 PKR",
    days: 2,
    image: nathiyagaliImg,
  },
];

export default function CarouselComp() {
  const responsiveOptions = [
    {
      breakpoint: "1400px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "1199px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  const productTemplate = (product) => {
    return (
      <div className="w-full h-[100%] border-1 surface-border border-round">
        <img
          alt="..."
          className="w-full h-[100%] bg-contain"
          src={product?.image}
        />
      </div>
    );
  };

  return (
    <>
      <div className="relative  w-[100%] h-[600px] ">
        <div className=" w-[100%] h-[500px] flex justify-center items-center overflow-hidden">
          <div className="card">
            <Carousel
              showNavigators={false}
              value={products}
              //numVisible={1}
              //numScroll={1}
              responsiveOptions={responsiveOptions}
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
                <img src={icon1} alt="..." className="w-10 h-10" />
                <div className="ml-3">
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
                <img src={icon2} alt="..." className="w-10 h-10" />
                <div className="ml-3">
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
                <img src={icon3} alt="..." className="w-10 h-10" />
                <div className="ml-3">
                  <p className="text-sm text-[#757783] font-semibold">Return</p>
                  <p className="text-sm text-[#313041] font-bold">--</p>
                </div>
              </div>{" "}
            </div>
            <div className=" flex justify-center items-center ">
              <div className=" w-[80%] h-[65px] border-[#c5c5c9] cursor-pointer border-b-2 flex items-center ">
                <GrGroup size={30} className="text-[#3498DB]" />

                <div className="ml-3">
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

import React from "react";
import { Carousel } from "primereact/carousel";
import { FaStar } from "react-icons/fa6";
import { MdOutlinePhotoCamera } from "react-icons/md";
import { FiVideo } from "react-icons/fi";
import { IoLocationSharp } from "react-icons/io5";
import { IoTimeOutline } from "react-icons/io5";
import { TbUsers } from "react-icons/tb";
import { GoArrowRight } from "react-icons/go";
import skarduImg from "../Images/skardu.jpeg";
import hunzaImg from "../Images/hunza.jpeg";
import murreeImg from "../Images/murree.jpeg";
import nathiyagaliImg from "../Images/Nathiyagali_Khanpur_Dam.jpeg";

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

export default function FeaturedToursComp() {
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
      <div className="w-[400px] border-1 surface-border border-round m-2 shadow-md">
        <img
          alt="..."
          className="w-[400px] h-[300px] z-0"
          src={product?.image}
        />
        <div className="bg-white p-5 rounded-t-3xl rounded-b-xl  mt-[-50px] z-10 relative">
          <div className="flex justify-between">
            <div className="flex">
              <FaStar color="orange" />
              <FaStar color="orange" />
              <FaStar color="orange" />
              <FaStar color="orange" />
              <FaStar color="orange" />
              <p className="ml-3 text-sm">4.07</p>
            </div>
            <div className="flex">
              <MdOutlinePhotoCamera size={20} />
              <FiVideo className="ml-3" size={20} />
            </div>
          </div>
          <div className="mt-3">
            <p className="text-lg font-semibold">{product?.title}</p>
            <div className="flex items-center mt-2">
              <IoLocationSharp color="red" className="m-0 p-0" />
              <p className="ml-2 text-sm">{product?.location}</p>
            </div>
            <div className="flex mt-2">
              <p>From</p>
              <p className="text-red-400">{product?.price}</p>
            </div>
            <div className="flex mt-2 bg-[#FEF5E7] justify-between p-4 rounded-md">
              <div className="flex items-center">
                <IoTimeOutline className="text-red-400" />
                <p className="text-sm ml-2">{product?.days} days</p>
              </div>
              <div className="flex items-center">
                <TbUsers className="text-red-400" />
                <p className="text-sm ml-2">50</p>
              </div>
              <div className="flex items-center cursor-pointer">
                <p className="text-sm text-red-400">Explore</p>
                <GoArrowRight className="text-red-400 ml-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-[100%] h-[800px]">
      <p className="text-[60px] font-extrabold text-center w-full">
        Most Popular Tours
      </p>
      <div className="card mt-10 px-5">
        <Carousel
          value={products}
          numVisible={3}
          numScroll={3}
          responsiveOptions={responsiveOptions}
          className="custom-carousel"
          circular
          //autoplayInterval={3000}
          itemTemplate={productTemplate}
        />
      </div>
    </div>
  );
}

import React from "react";
import { Carousel } from "primereact/carousel";
import { FaStar } from "react-icons/fa6";
import { MdOutlinePhotoCamera } from "react-icons/md";
import { FiVideo } from "react-icons/fi";
import { IoLocationSharp } from "react-icons/io5";
import { IoTimeOutline } from "react-icons/io5";
import { TbUsers } from "react-icons/tb";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";
import { mostPopTour } from "../config";

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
          src={product?.images[0]}
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
              <Link to={{ pathname: "/tour-details" }} state={product}>
                <div className="flex items-center">
                  <p className="text-sm text-red-400">Explore</p>
                  <GoArrowRight className="text-red-400 ml-2" />
                </div>
              </Link>
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
          value={mostPopTour}
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

import React from "react";
import HeaderComp from "../components/headerComp";
import NavbaarComp from "../components/NavbaarComp";
import { FooterComp } from "../components/FooterComp";
import aboutImg from "../Images/about-bg.jpeg";
import { Link } from "react-router-dom";

export const AboutPage = () => {
  return (
    <>
      <HeaderComp />
      <NavbaarComp />
      <div>
        <div
          className="w-full h-[400px] bg-red-300 bg-contain"
          style={{
            backgroundImage: `url("${aboutImg}")`,
          }}
        >
          <div className="grid grid-cols-2 h-full">
            <div className="flex items-center px-10">
              <p className="text-white text-[40px]">About</p>
            </div>
            <div className="flex items-end justify-end px-10">
              <div className="bg-white flex p-5 rounded-t-lg">
                <Link to={"/"}>
                  <p>Home</p>
                </Link>
                <p className="px-2">/</p>
                <p className="text-[#3498DB] ">About</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex p-[6%]">
        <div className="w-[50%]]">
          <img
            src="https://gaviaspreview.com/wp/tevily/wp-content/uploads/2021/10/image-13.jpg"
            alt="..."
            className="rounded-lg"
          />
        </div>
        <div className="w-[50%] px-10">
          <p className="text-[40px] font-bold">
            Dare to Explore with Tevily Agency
          </p>
          <p className="mt-5 text-gray-500">
            We are trusted by our clients and have a reputation for the best
            services in the field. Lorem ipsum is simply free text dolor sit
            amett consectetur adipiscing elit. It is a long established fact
            that a reader will be distracted by the readable content of a page.
          </p>
        </div>
      </div>
      <FooterComp />
    </>
  );
};

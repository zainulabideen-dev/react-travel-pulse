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
                <p className="text-red-400 ">About</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterComp />
    </>
  );
};

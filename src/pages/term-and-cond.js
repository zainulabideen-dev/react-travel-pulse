import React from "react";
import HeaderComp from "../components/headerComp";
import NavbaarComp from "../components/NavbaarComp";
import { FooterComp } from "../components/FooterComp";
import aboutImg from "../Images/about-bg.jpeg";
import { Link } from "react-router-dom";

export const TermsCondPage = () => {
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
              <p className="text-white text-[40px]">Terms and Condition</p>
            </div>
            <div className="flex items-end justify-end px-10">
              <div className="bg-white flex p-5 rounded-t-lg">
                <Link to={"/"}>
                  <p>Home</p>
                </Link>
                <p className="px-2">/</p>
                <p className="text-[#3498DB] ">Terms and Conditions Page</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-[6%]">
        <ul>
          <li>
            <p className="font-bold text-3xl">1. Terms</p>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. It was popularised in the
              1960s with the release of Letraset sheets containing Lorem Ipsum
              passages, and more recently with desktop publishing software like
              Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </li>
          <li className="mt-10">
            <p className="font-bold text-3xl">2. Limitations</p>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. It was popularised in the
              1960s with the release of Letraset sheets containing Lorem Ipsum
              passages, and more recently with desktop publishing software like
              Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </li>
          <li className="mt-10">
            <p className="font-bold text-3xl">3. Revisions and Errata</p>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. It was popularised in the
              1960s with the release of Letraset sheets containing Lorem Ipsum
              passages, and more recently with desktop publishing software like
              Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </li>
          <li className="mt-10">
            <p className="font-bold text-3xl">
              4. Site Terms of Use Modifications
            </p>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. It was popularised in the
              1960s with the release of Letraset sheets containing Lorem Ipsum
              passages, and more recently with desktop publishing software like
              Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </li>
        </ul>
      </div>
      <FooterComp />
    </>
  );
};

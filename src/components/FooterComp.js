import React from "react";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { MdLocationOn } from "react-icons/md";
import logoImg from "../Images/logo.png";

export const FooterComp = () => {
  return (
    <div className="w-[100%] h-[600px] bg-[#313041] px-10 py-[10%]">
      <div className="grid grid-cols-4 gap-20 w-full">
        <div>
          <div className="flex h-[90px] items-start">
            <div className="flex items-center justify-center">
              <img
                src={logoImg}
                alt="logo"
                className=" h-[50px] cursor-pointer"
              />
              <p className="text-[25px] font-bold text-white ml-1">
                TravelPulse
              </p>
            </div>
          </div>
          <div className="text-[#54595f] font-bold">
            <p>Welcome to our Trip and Tour Agency.</p>
            <p>Lorem simply text amet cing elit.</p>
            <hr className="bg-[#54595f] my-5 h-[1px]" />
            <ul>
              <li>
                <div className="flex items-center">
                  <FaPhoneSquareAlt className="text-red-400" />
                  <p className="text-sm ml-2">92 666 888 0000</p>
                </div>
              </li>
              <li className="mt-2">
                <div className="flex items-center">
                  <IoMail className="text-red-400" />
                  <p className="text-sm ml-2">contact@example.com</p>
                </div>
              </li>
              <li className="mt-2">
                <div className="flex items-center">
                  <MdLocationOn className="text-red-400" />
                  <p className="text-sm ml-2">
                    66 Broklyn Street New York, USA
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className="flex h-[90px] items-start">
            <p className="text-[25px] text-white font-bold">Company</p>
          </div>
          <div className="text-[#54595f]">
            <ul>
              <li>
                <a href="#">
                  <p className="text-lg ml-2 ">About Us</p>
                </a>
              </li>
              <li className="mt-2">
                <a href="#">
                  <p className="text-lg ml-2 font-bold">Community Blog</p>
                </a>
              </li>
              <li className="mt-2">
                <a href="#">
                  <p className="text-lg ml-2 font-bold">Rewards</p>
                </a>
              </li>
              <li className="mt-2">
                <a href="#">
                  <p className="text-lg ml-2 font-bold">Work With Us</p>
                </a>
              </li>
              <li className="mt-2">
                <a href="#">
                  <p className="text-lg ml-2 font-bold">Contact</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className="flex h-[90px] items-start">
            <p className="text-[25px] text-white font-bold">Explore</p>
          </div>
          <div className="text-[#54595f]">
            <ul>
              <li>
                <a href="#">
                  <p className="text-lg ml-2 ">Account</p>
                </a>
              </li>
              <li className="mt-2">
                <a href="#">
                  <p className="text-lg ml-2 font-bold">Privacy Policy</p>
                </a>
              </li>
              <li className="mt-2">
                <a href="#">
                  <p className="text-lg ml-2 font-bold">Affilitate Program</p>
                </a>
              </li>
              <li className="mt-2">
                <a href="#">
                  <p className="text-lg ml-2 font-bold">Our Partners</p>
                </a>
              </li>
              <li className="mt-2">
                <a href="#">
                  <p className="text-lg ml-2 font-bold">Events</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className="flex h-[90px] items-start">
            <p className="text-[25px] text-white font-bold">Newsletter</p>
          </div>
          <div>
            <input
              placeholder="Email Address"
              className="p-[15px] rounded-[8px] text-center bg-[#566573] outline-none w-full"
            />
          </div>
          <p className="bg-[#ff6900] cursor-pointer text-white text-center font-semibold p-5 rounded-lg mt-3">
            SUBSCRIBE
          </p>
        </div>
      </div>
    </div>
  );
};

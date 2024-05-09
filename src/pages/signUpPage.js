import React from "react";
import NavbaarComp from "../components/NavbaarComp";
import HeaderComp from "../components/headerComp";
import { FooterComp } from "../components/FooterComp";
import travelImg from "../Images/travel.jpeg";

export default function SignUpPage() {
  return (
    <>
      <HeaderComp />
      <NavbaarComp />
      <div className="w-[100%] h-[700px] bg-[#d3dee233] flex justify-center items-center">
        <div className="w-[1366px] h-full flex justify-center items-center">
          <div className="w-[85%] h-[80%]  flex shadow-2xl">
            <div className="w-[40%] bg-[#abc2cb33] h-full">
              <div
                className="w-full h-[100%] bg-cover bg-center rounded-l-[40px]"
                style={{
                  backgroundImage: `url("${travelImg}")`,
                }}
              ></div>
              {/* <div className="w-full h-[70px] flex items-center justify-center">
                <p className="text-lg text-[#757783]">Already a member</p>
                <p className="cursor-pointer hover:bg-[#313041] bg-[#3498DB] w-[80px] h-[30px] ml-3 flex justify-center items-center rounded-lg text-sm font-bold text-white">
                  LOGIN
                </p>
              </div> */}
            </div>
            <div className="w-[60%] h-full bg-white flex items-center justify-center">
              <div className="w-[87%] h-[85%]">
                <p className="text-[35px] font-bold">Create a free account</p>
                <p className="text-[#757783] mt-2">
                  A few clicks away from creating your account
                </p>
                <p className="mt-4 text-lg">Username*</p>
                <div className="w-[240px] rounded-sm bg-white px-3 py-2 border border-gray-300">
                  <input className="outline-none" type="text" />
                </div>
                <div className="w-full h-[100px] grid grid-cols-2">
                  <div>
                    <p className="mt-4 text-lg">First name*</p>
                    <div className="w-[240px] rounded-sm bg-white px-3 py-2 border border-gray-300">
                      <input className="outline-none" type="text" />
                    </div>
                  </div>
                  <div>
                    <p className="mt-4 text-lg">Last name*</p>
                    <div className="w-[240px] rounded-sm bg-white px-3 py-2 border border-gray-300">
                      <input className="outline-none" type="text" />
                    </div>
                  </div>
                </div>
                <div className="w-full h-[100px] grid grid-cols-2">
                  <div>
                    <p className="mt-4 text-lg">Your email*</p>
                    <div className="w-[240px] rounded-sm bg-white px-3 py-2 border border-gray-300">
                      <input className="outline-none" type="text" />
                    </div>
                  </div>
                  <div>
                    <p className="mt-4 text-lg">Confirm email*</p>
                    <div className="w-[240px] rounded-sm bg-white px-3 py-2 border border-gray-300">
                      <input className="outline-none" type="text" />
                    </div>
                  </div>
                </div>
                <p className="text-[#757783] mt-2">
                  A password will be emailed to you.
                </p>
                <p className="hover:bg-[#313041] cursor-pointer bg-[#3498DB] w-[120px] h-[50px] mt-5 flex justify-center items-center rounded-lg text-sm font-bold text-white">
                  SIGN UP
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <FooterComp/> */}
    </>
  );
}

import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import lahoreImg from "../Images/lahore.jpeg";
import islamabadImg from "../Images/islamabad.jpeg";
import karachiImg from "../Images/karachi.jpeg";
import skarduImg from "../Images/skardu02.jpeg";
import multanImg from "../Images/multan.jpeg";

export default function Destination_listComp() {
  return (
    <>
      <div className="w-[100%] h-[900px] flex items-center justify-center">
        <div className="w-[1366px] h-[800px]">
          <div className="w-full h-[250px] flex justify-center items-end">
            <div className="text-center mb-6">
              <p className=" font-[reey] text-4xl text-[#E8604C]">
                Destination Lists
              </p>
              <p className=" font-[reey] text-6xl font-bold text-[#313041]">
                Go To Exotic Places
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-[85%] h-[500px] mt-5">
              <div className=" flex justify-between">
                <div
                  className=" w-[24%] h-auto bg-cover rounded-lg overflow-hidden cursor-pointer"
                  style={{
                    backgroundImage: `url("${lahoreImg}")`,
                  }}
                >
                  <div className=" flex justify-end items-center w-[90%] h-[60px]  ml-3 mt-2">
                    <div className=" bg-[#E8604C] w-[100px] h-[30px] rounded-lg flex justify-center items-center">
                      <p className="text-white text-xs font-bold">4 TOURS</p>
                    </div>
                  </div>
                  <div className="w-[65%] h-[180px]  ml-5 flex items-end">
                    <p className="font-bold text-4xl text-white">Lahore</p>
                  </div>
                </div>
                <div
                  className={`w-[50%] h-[270px] bg-no-repeat bg-cover bg-center rounded-lg overflow-hidden cursor-pointer`}
                  style={{
                    backgroundImage: `url("${islamabadImg}")`,
                  }}
                >
                  <div className=" flex justify-end items-center w-[95%] h-[60px]  ml-3 mt-2">
                    <div className=" bg-[#E8604C] w-[100px] h-[30px] rounded-lg flex justify-center items-center">
                      <p className="text-white text-xs font-bold">6 TOURS</p>
                    </div>
                  </div>
                  <div className="w-[65%] h-[180px]  ml-5 flex items-end">
                    <p className="font-bold text-4xl text-white">
                      {/* <span className="text-2xl text-[#E8604C]">WildLife</span>
                      <br /> */}
                      Islamabad
                    </p>
                  </div>
                </div>
                <div
                  className="w-[24%] h-auto bg-cover  rounded-lg overflow-hidden cursor-pointer"
                  style={{
                    backgroundImage: `url("${karachiImg}")`,
                  }}
                >
                  <div className=" flex justify-end items-center w-[90%] h-[60px]  ml-3 mt-2">
                    <div className=" bg-[#E8604C] w-[100px] h-[30px] rounded-lg flex justify-center items-center">
                      <p className="text-white text-xs font-bold">3 TOURS</p>
                    </div>
                  </div>
                  <div className="w-[65%] h-[180px]  ml-5 flex items-end">
                    <p className="font-bold text-4xl text-white">Karachi</p>
                  </div>
                </div>
              </div>
              <div className=" flex justify-between mt-3">
                <div
                  className="w-[49.5%] h-auto bg-cover bg-center rounded-lg overflow-hidden cursor-pointer"
                  style={{
                    backgroundImage: `url("${skarduImg}")`,
                  }}
                >
                  <div className=" flex justify-end items-center w-[95%] h-[60px] ml-3 mt-2">
                    <div className=" bg-[#E8604C] w-[100px] h-[30px] rounded-lg flex justify-center items-center">
                      <p className="text-white text-xs font-bold">3 TOURS</p>
                    </div>
                  </div>
                  <div className="w-[65%] h-[180px]  ml-5 flex items-end">
                    <p className="font-bold text-4xl text-white">
                      {/* <span className="text-2xl text-[#E8604C]">WildLife</span>
                      <br /> */}
                      Skardu{" "}
                    </p>
                  </div>
                </div>{" "}
                <div
                  className="w-[49.5%] h-[270px] bg-cover bg-center rounded-lg overflow-hidden cursor-pointer"
                  style={{
                    backgroundImage: `url("${multanImg}")`,
                  }}
                >
                  <div className=" flex justify-end items-center w-[95%] h-[60px] ml-3 mt-2">
                    <div className=" bg-[#E8604C] w-[100px] h-[30px] rounded-lg flex justify-center items-center">
                      <p className="text-white text-xs font-bold">3 TOURS</p>
                    </div>
                  </div>
                  <div className="w-[65%] h-[180px] ml-5 flex items-end">
                    <p className="font-bold text-4xl text-white">
                      {/* <span className="text-2xl text-[#E8604C]">Multan</span>
                      <br /> */}
                      Multan{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-[100%] h-[800px] flex justify-center">
        <div className="w-[1360px] h-full flex items-center">
          <div className="w-[55%] h-[80%] flex items-center justify-end">
            <div className="cursor-pointer w-[85%] h-[85%] bg-[url('https://gaviaspreview.com/wp/tevily/wp-content/uploads/2021/09/image-6.jpg')] bg-cover">
              <div className=" w-full h-[200px] flex justify-end items-end">
                <p className="text-6xl font-semibold text-black mr-10">
                  <span className="text-7xl text-[#E8604C]">30%</span>
                  <br />
                  Discount
                </p>
              </div>
              <div className="mt-[100px] bg-white shadow-xl w-[190px] h-[70px] rounded-lg flex justify-center items-center">
                <p className="text-black font-semibold text-center">
                  <span className="text-[10px] text-[#757783]">
                    BOOK TOUR NOW
                  </span>
                  <br />
                  66888000
                </p>
              </div>
            </div>
          </div>
          <div className="w-[45%] h-[80%] p-4">
            <p className="text-6xl text-black mr-10 font-semibold">
              <span className="text-3xl text-[#E8604C] ml-3">
                Get to know us
              </span>
              <br />
              Plan Your Trip with Trevily
            </p>
            <div className="w-[85%] mt-10">
              <p className="text-[#757783] text-lg font-semibold">
                There are many variations of passages of available but the
                majority have suffered alteration in some form, by injected hum
                randomised words which don't look even slightly.
              </p>
            </div>
            <div className="flex items-center mt-10">
              <FaCheckCircle className="text-[#E8604C]" />
              <p className="text-black text-lg ml-4">
                Invest in your simply neighborhood
              </p>
            </div>
            <div className="flex items-center my-5">
              <FaCheckCircle className="text-[#E8604C]" />
              <p className="text-black text-lg ml-4">
                Support people in free text extreme
              </p>
            </div>
            <div className="flex items-center my-5">
              <FaCheckCircle className="text-[#E8604C]" />
              <p className="text-black text-lg ml-4">
                Largest global industrial business{" "}
              </p>
            </div>
            <div className="cursor pointer ml-2 mt-9 bg-[#E8604C] w-[210px] h-[55px] rounded-lg flex justify-center items-center hover:bg-[#54586d]">
              <p className="text-white text-sm font-semibold">
                BOOK WITH US NOW
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import React from "react";

export default function LoginPage() {
  return (
    <>
      <div className="w-[100%] h-screen flex items-center justify-center">
        <div className="w-[500px] h-[440px] bg-white shadow-2xl rounded-lg flex items-center justify-center p-2">
          <div className="w-[85%] h-[90%]">
            <div className="w-full h-auto flex items-center justify-center">
              <p className="text-2xl font-bold border-transparent border-b-2 border-b-[#3498DB]">
                SIGN IN
              </p>
            </div>
            <p className="text-md font-bold mt-3">Username</p>
            <div className="w-full mt-1 rounded-md bg-white px-3 py-2 border border-gray-300">
              <input
                className="outline-none"
                type="text"
                placeholder="Username"
              />
            </div>
            <p className="text-md font-bold mt-3">Password</p>
            <div className="w-full mt-1 rounded-md bg-white px-3 py-2 border border-gray-300">
              <input
                className="outline-none"
                type="password"
                placeholder="*****"
              />
            </div>
            <p className="hover:bg-[#313041] cursor-pointer bg-[#3498DB] w-full h-[50px] mt-5 flex justify-center items-center rounded-lg text-sm font-bold text-white">
              LOG IN
            </p>
            <div className="w-full h-auto flex items-center justify-center mt-5">
              <p className="text-[#3498DB] cursor-pointer border border-transparent hover:border-b-[#3498DB] ">Lost your password?</p>
            </div>
            <div className="w-full h-auto flex items-center justify-center mt-5">
              <p className="text-[#757783]">Don't have an account <span className="text-[#3498DB]  hover:border-b-[#3498DB] border border-transparent cursor-pointer ">Register</span> </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

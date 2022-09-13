import React, { Component, useState } from "react";
import Slider from "react-slick";
import LoginSlider from "../../components/auth/Slider/LoginSlider";
import LoginImage from "../../data/image-slider/login-image-slider-data.json";
import { ILoginImage } from "../../interface/ILoginImage";

const Login: React.FC = () => {
  const [loginImage] = useState<ILoginImage[]>(LoginImage);
  return (
    <div className="grid grid-cols-12 h-screen ">
      <div className="col-span-4 min-w-[560px] z-50 bg-white flex h-screen">
        <div className="m-auto w-[70%]">
          <h2 className="font-bold ">Sign in</h2>
          <p className="text-slate-500 my-3">
            New user?
            <a className="text-primary" href="#">
              {" "}
              Create an account
            </a>
          </p>

          <a href="#">
            <div className="bg-white text-center border w-full rounded py-3 mt-14 font-bold">
              Login with Google
            </div>
          </a>

          <div className="relative py-4">
            <div className="absolute inset-0 flex">
              <div className="w-[90%] m-auto border-b border-gray-300"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-4 text-sm text-gray-500">Or</span>
            </div>
          </div>
          <form>
            {/* ================================================= */}

            <div className="relative block mt-6">
              <input
                className="peer w-full p-3 rounded focus:bg-white placeholder-transparent placeholder-shown:bg-slate-100 placeholder-shown:ring-none placeholder-shown:ring-0 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary ring-1 ring-slate-300 "
                type="email"
                placeholder="Email"
                id="emailInput"
              />
              <label
                htmlFor="emailInput"
                className="absolute peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-placeholder-shown:bg-slate-100 peer-placeholder-shown:left-3 text-xs -top-3 left-2 peer-focus:text-xs peer-focus:-top-3 peer-focus:left-2 px-2 peer-focus:bg-white transition-all bg-white"
              >
                Email
              </label>
              <span className=" block invisible peer-invalid:visible text-primary text-sm mb-4 mt-1.5">
                Please provide a valid email address.
              </span>
            </div>
            <div className="relative">
              <input
                className="peer w-full p-3 rounded focus:bg-white placeholder-transparent placeholder-shown:bg-slate-100 placeholder-shown:ring-none placeholder-shown:ring-0 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary ring-1 ring-slate-300"
                type="password"
                placeholder="Email"
                id="passwordInput"
              />
              <label
                htmlFor="passwordInput"
                className="absolute peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-placeholder-shown:bg-slate-100 peer-placeholder-shown:left-3 text-xs -top-3 left-2 peer-focus:text-xs peer-focus:-top-3 peer-focus:left-2 px-2 peer-focus:bg-white transition-all bg-white"
              >
                Password
              </label>
            </div>

            {/* ======input================================================ */}

            <a href="#">
              <div className="bg-primary text-center font-bold border w-full rounded py-3 mt-10 text-white">
                SUBMIT
              </div>
            </a>
          </form>
        </div>
      </div>
      <div className="col-span-8 relative">
        <LoginSlider loginImage={loginImage} />
        <div className="absolute top-0 left-0 w-full h-full image-overlay-50"></div>
        <h2 className="text-white font-bold absolute top-[60%] left-[20%]">
          Fitcare
        </h2>
        <p className=" p-overlay w-[400px] absolute absolute top-[68%] left-[20%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam commodo
          nibh ac nisl posuere vehicula. Nullam sed consequat{" "}
        </p>
      </div>
    </div>
  );
};
export default Login;

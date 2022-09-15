import React, { useState } from "react";
import LoginSlider from "../../components/slider/login-slider/LoginSlider";
import LoginImage from "../../data/image-slider/login-image-slider-data.json";
import { ILoginImage } from "../../components/slider/login-slider/interface/ILoginImage";
import { signInWithGoogle } from "../../services/firebase/firebase";
import { FcGoogle } from "react-icons/fc";
import Button from "../../components/Button";
import Input from "../../components/Input";

const Login: React.FC = () => {
  const [loginImage] = useState<ILoginImage[]>(LoginImage);

  return (
    <div className="grid grid-cols-12 h-screen ">
      <div className="col-span-4 min-w-[560px] z-50 bg-white flex h-screen">
        <div className="m-auto w-[70%]">
          <h2 className="font-bold ">Sign in</h2>
          <p className="text-slate-500 my-3">
            New user?
            <a className="text-primary hover:text-primaryHover" href="#">
              {" "}
              Create an account
            </a>
          </p>
          <Button
            additionalClassName="w-full ring-slate-300 ring-1  hover:text-slate-600"
            bgColor="white"
            textColor="slate-500"
            onClick={signInWithGoogle}
            title="Login with google"
            icon={<FcGoogle className="inline mr-2 " size={20} />}
          />

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
              <Input
                id="emailInput"
                label="Email"
                placeHolder="Email"
                onChange={() => {}}
                type="email"
                errorMessage="Please provide a valid email address"
              />
            </div>
            <div className="relative">
              <Input
                id="passwordInput"
                label="Password"
                placeHolder="Password"
                onChange={() => {}}
                type="password"
              />
            </div>
            {/* ======input-end================================= */}
            <Button
              additionalClassName="w-full hover:bg-primaryHover"
              bgColor="primary"
              textColor="white"
              onClick={() => {}}
              title="SUBMIT"
            />
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

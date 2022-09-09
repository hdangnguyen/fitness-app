import React, { Component } from "react";

function Login() {
  return (
    <div className="grid grid-cols-12 h-screen">
      <div className="col-span-4 bg-white flex h-screen">
        <div className="m-auto w-[70%]">
          <h2 className="font-bold text-primaryDark">Sign in</h2>
          <p className="text-secondaryDark my-3">
            New user?
            <a className="text-primary" href="#">
              {" "}
              Create an account
            </a>
          </p>

          <a href="#">
            <div className="bg-white text-center border w-full rounded py-3 mt-14 text-primaryDark">
              Login with Google
            </div>
          </a>

          <div className="relative py-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-b border-gray-300"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-4 text-sm text-gray-500">Or</span>
            </div>
          </div>
          <form>
            <label className="block">
              <span className="block text-sm font-medium text-slate-700">
                Email
              </span>
              <input
                type="text"
                value=""
                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500 mb-6
    "
              />
            </label>

            <label className="block">
              <span className="block text-sm font-medium text-slate-700">
                Password
              </span>
              <input
                type="text"
                value=""
                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500 mb-6
    "
              />
            </label>
            <a href="#">
              <div className="bg-primary text-center font-bold border w-full rounded py-3 mt-14 text-white">
                SUBMIT
              </div>
            </a>
          </form>
        </div>
      </div>
      <div
        className="col-span-8 bg-cover bg-center relative"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1535743686920-55e4145369b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80")`,
        }}
      >
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
}
export default Login;

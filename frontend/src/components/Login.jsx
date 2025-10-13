import React from "react";
import car_img from "../assets/car.jpeg";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex w-screen h-screen">
      <div className="w-1/2 h-full">
        <img src={car_img} className="w-full h-full object-cover" />
      </div>

      <div className="w-1/2 h-full flex items-center justify-center">
        <form
          action=""
          className="w-2/3 shadow-md flex flex-col items-center justify-center gap-6 py-10"
        >
          <div>
            <h1 className="font-bold text-blue-400 text-center text-2xl mt-4">
              LYRCON DEMO CAR
            </h1>
            <h3 className="font-semibold text-neutral-400 text-center text-1xl">
              Welcome Back, Sign in to Continue
            </h3>
          </div>
          <div className="w-full flex flex-col items-center gap-2">
            <div className="text-[12px] font-semibold w-[80%]">
              <label htmlFor="email">EMAIL *</label>
            </div>
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              required
              className="border-none outline-none bg-slate-100 h-8 w-[80%] rounded px-2 py-1 text-[12px]"
            />
          </div>
          <div className="w-full flex flex-col items-center gap-2">
            <div className="text-[12px] font-semibold w-[80%]">
              <label htmlFor="email">PASSWORD *</label>
            </div>
            <input
              type="text"
              name="password"
              placeholder="Enter your password"
              required
              className="border-none outline-none bg-slate-100 h-8 w-[80%] rounded px-2 py-1 text-[12px]"
            />
          </div>
          <div className="flex gap-2 justify-start w-[80%]">
            <input type="checkbox" />
            <h2>REMEMBER ME</h2>
          </div>
          <Link to='/dashboard' className="w-[80%] rounded">
            <button type="submit" className="bg-blue-400 h-10 cursor-pointer w-full text-white hover:bg-blue-300 hover:text-black transition-all duration-300">
              Sign in
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;

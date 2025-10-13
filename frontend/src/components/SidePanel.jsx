import React from "react";
import icon from "../assets/sports-car.png";
import downarrow from "../assets/downarrow.png";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";

const SidePanel = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-[22%] h-screen border-1">
      <div className="w-full h-13 p-3 flex items-center justify-center border-b-1">
        <img src={icon} alt="" className="w-4 h-4" />
        <h1 className="w-full h-full text-blue-400 font-bold text-lg text-center">
          LYRCON CAR DEMO
        </h1>
      </div>

      <div className="overflow-y-scroll no-scrollbar h-9/11 mt-2">
        <div className="w-full h-14 px-4 py-2 flex items-center justify-center">
          <div className="cursor-pointer w-full h-full flex items-center justify-center gap-2 hover:bg-blue-50 hover:text-blue-400 rounded-md transition-all duration-300">
            <NavLink
              to="/dashboard"
              className="w-full h-full flex p-2 gap-2 items-center justify-center rounded-md"
            >
              <img src={icon} alt="" className="w-4 h-4" />
              <h1 className="w-full h-full text-[14px] flex items-center ">
                DASHBOARD
              </h1>
            </NavLink>
          </div>
        </div>

        <div className="w-full h-13 px-4 py-2 flex items-center justify-center">
          <div className="cursor-pointer flex items-center justify-center gap-2 p-2 w-full h-full hover:bg-blue-50 hover:text-blue-400 rounded-md transition-all duration-300">
            <img src={icon} alt="" className="w-4 h-4" />
            <h1 className="w-full h-full text-[14px] focus:font-medium flex items-center ">
              NEW CARS
            </h1>
            <img src={downarrow} alt="" className="w-4 h-4" />
          </div>
        </div>

        <div className="w-full h-13 px-4 py-2 flex items-center justify-center">
          <div className="cursor-pointer w-full h-full flex items-center justify-center gap-2 p-2 hover:bg-blue-50 hover:text-blue-400 rounded-md transition-all duration-300">
            <img src={icon} alt="" className="w-4 h-4" />
            <h1 className="w-full h-full text-[14px] focus:font-medium flex items-center ">
              PURCHASE OLD CARS
            </h1>
            <img src={downarrow} alt="" className="w-4 h-4" />
          </div>
        </div>
        <div className="w-full h-13 px-4 py-2 flex items-center justify-center">
          <div className="cursor-pointer w-full h-full flex items-center justify-center gap-2 p-2 hover:bg-blue-50 hover:text-blue-400 rounded-md transition-all duration-300">
            <img src={icon} alt="" className="w-4 h-4" />
            <h1 className="w-full h-full text-[14px] focus:font-medium flex items-center ">
              SELL OLD CARS
            </h1>
            <img src={downarrow} alt="" className="w-4 h-4" />
          </div>
        </div>
        <div className="w-full h-13 px-4 py-2 flex items-center justify-center">
          <div className="cursor-pointer w-full h-full flex items-center justify-center gap-2 p-2 hover:bg-blue-50 hover:text-blue-400 rounded-md transition-all duration-300">
            <img src={icon} alt="" className="w-4 h-4" />
            <h1 className="w-full h-full text-[14px] focus:font-medium flex items-center ">
              INQUIRIES
            </h1>
            <img src={downarrow} alt="" className="w-4 h-4" />
          </div>
        </div>
        <div className="w-full h-13 px-4 py-2 flex items-center justify-center">
          <div className="cursor-pointer w-full h-full flex items-center justify-center gap-2 p-2 hover:bg-blue-50 hover:text-blue-400 rounded-md transition-all duration-300">
            <img src={icon} alt="" className="w-4 h-4" />
            <h1 className="w-full h-full text-[14px] focus:font-medium flex items-center ">
              FINANCES
            </h1>
            <img src={downarrow} alt="" className="w-4 h-4" />
          </div>
        </div>
        <div className="w-full h-13 px-4 py-2 flex items-center justify-center">
          <div className="cursor-pointer w-full h-full flex items-center justify-center gap-2 p-2 hover:bg-blue-50 hover:text-blue-400 rounded-md transition-all duration-300">
            <img src={icon} alt="" className="w-4 h-4" />
            <h1 className="w-full h-full text-[14px] focus:font-medium flex items-center ">
              INSURANCES
            </h1>
            <img src={downarrow} alt="" className="w-4 h-4" />
          </div>
        </div>
        <div className="w-full min-h-13 px-4 py-2 flex flex-col gap-2 items-center justify-center">
          <div
            onClick={handleClick}
            className="tab cursor-pointer w-full h-full flex items-center justify-center gap-2 p-2 hover:bg-blue-50 hover:text-blue-400 rounded-md transition-all duration-300"
          >
            <img src={icon} alt="" className="w-4 h-4" />
            <h1 className="w-full h-full text-[14px] focus:font-medium flex items-center ">
              USERS
            </h1>
            <img src={downarrow} alt="" className="w-4 h-4" />
          </div>
          {isOpen && (
            <div className="dropdown w-full flex flex-col gap-2 px-2 ml-8 mr-4 border-l-2 border-blue-400">
              <Link to="/allusers">
                <div className="cursor-pointer w-full flex items-center justify-center gap-2 p-2 hover:bg-blue-50 hover:text-blue-400 rounded-md transition-all duration-300">
                  <img src={icon} alt="" className="w-4 h-4" />
                  <h1 className="w-full h-full text-[14px] focus:font-medium flex items-center ">
                    ALL USERS
                  </h1>
                </div>
              </Link>
              <Link to="/addnewuser">
                <div className="cursor-pointer w-full flex items-center justify-center gap-2 p-2 hover:bg-blue-50 hover:text-blue-400 rounded-md transition-all duration-300">
                  <img src={icon} alt="" className="w-4 h-4" />
                  <h1 className="w-full h-full text-[14px] focus:font-medium flex items-center ">
                    NEW USER
                  </h1>
                </div>
              </Link>
            </div>
          )}
        </div>
        <div className="w-full h-13 px-4 py-2 flex items-center justify-center">
          <div className="cursor-pointer w-full h-full flex items-center justify-center gap-2 p-2 hover:bg-blue-50 hover:text-blue-400 rounded-md transition-all duration-300">
            <img src={icon} alt="" className="w-4 h-4" />
            <h1 className="w-full h-full text-[14px] focus:font-medium flex items-center ">
              SETTINGS
            </h1>
          </div>
        </div>
      </div>
      <div className="w-full h-13 px-4 py-2 flex items-center justify-center">
        <div className=" cursor-pointer w-full h-full hover:bg-blue-50 hover:text-blue-400 rounded-md transition-all duration-300">
          <NavLink
            to="/"
            className="w-full h-full flex items-center justify-center gap-2 p-2  rounded-md"
          >
            <img src={icon} alt="" className="w-4 h-4" />
            <h1 className="w-full h-full text-[14px] flex items-center">
              LOGOUT
            </h1>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SidePanel;

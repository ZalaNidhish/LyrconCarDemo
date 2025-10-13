import React from "react";
import icon from "../assets/sports-car.png";
import downarrow from "../assets/downarrow.png";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";

const SidePanel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMerged, setIsMerged] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    expand();
  };

  const expand = () => {
    setIsMerged(false);
    document.querySelectorAll(".dropside").forEach((element) => {
      element.style.display = "flex";
    });
    document.querySelector(".sidepanel").style.width = "22%";
    document.querySelector(".framepanel").style.width = "78%";
  };

  const collapse = () => {
    setIsMerged(!isMerged);
    setIsOpen(false);
    if (!isMerged) {
      document.querySelectorAll(".dropside").forEach((element) => {
        element.style.display = "none";
      });
      document.querySelector(".sidepanel").style.width = "7%";
      document.querySelector(".framepanel").style.width = "93%";
    } else {
      document.querySelectorAll(".dropside").forEach((element) => {
        element.style.display = "flex";
      });
      document.querySelector(".sidepanel").style.width = "22%";
      document.querySelector(".framepanel").style.width = "78%";
    }
  };

  return (
    <div className="w-[22%] h-screen border-1 sidepanel">
      <div className="w-full h-13 px-6 py-3 flex items-center justify-center border-b-1">
        <div
          className="cursor-pointer flex w-full items-center justify-center"
          onClick={collapse}
        >
          <img src={icon} alt="" className="w-4 h-4" />
          <h1 className="w-full h-full text-blue-400 font-bold text-lg items-center justify-center dropside">
            LYRCON CAR DEMO
          </h1>
        </div>
      </div>

      <div className="overflow-y-scroll no-scrollbar h-9/11 mt-2">
        <div className="w-full h-14 px-4 py-2 flex items-center justify-center">
          <div className="cursor-pointer w-full h-full flex items-center justify-center gap-2 hover:bg-blue-50 hover:text-blue-400 rounded-md transition-all duration-300"  onClick={expand} >
            <NavLink
              to="/dashboard"
              className="w-full h-full flex p-2 gap-2 items-center justify-center rounded-md"
            >
              <img src={icon} alt="" className="w-4 h-4" />
              <h1 className="w-full h-full text-[14px] items-center dropside">
                DASHBOARD
              </h1>
            </NavLink>
          </div>
        </div>

        <div className="w-full h-13 px-4 py-2 flex items-center justify-center">
          <div className="cursor-pointer flex items-center justify-center gap-2 p-2 w-full h-full hover:bg-blue-50 hover:text-blue-400 rounded-md transition-all duration-300"  onClick={expand} >
            <img src={icon} alt="" className="w-4 h-4"/>
            <h1 className="w-full h-full text-[14px] focus:font-medium items-center dropside">
              NEW CARS
            </h1>
            <img src={downarrow} alt="" className="w-4 h-4 dropside" />
          </div>
        </div>

        <div className="w-full h-13 px-4 py-2 flex items-center justify-center">
          <div className="cursor-pointer w-full h-full flex items-center justify-center gap-2 p-2 hover:bg-blue-50 hover:text-blue-400 rounded-md transition-all duration-300"  onClick={expand} >
            <img src={icon} alt="" className="w-4 h-4" onClick={expand} />
            <h1 className="w-full h-full text-[14px] focus:font-medium items-center dropside">
              PURCHASE OLD CARS
            </h1>
            <img src={downarrow} alt="" className="w-4 h-4 dropside" />
          </div>
        </div>
        <div className="w-full h-13 px-4 py-2 flex items-center justify-center">
          <div className="cursor-pointer w-full h-full flex items-center justify-center gap-2 p-2 hover:bg-blue-50 hover:text-blue-400 rounded-md transition-all duration-300"  onClick={expand} >
            <img src={icon} alt="" className="w-4 h-4" onClick={expand} />
            <h1 className="w-full h-full text-[14px] focus:font-medium items-center dropside">
              SELL OLD CARS
            </h1>
            <img src={downarrow} alt="" className="w-4 h-4 dropside" />
          </div>
        </div>
        <div className="w-full h-13 px-4 py-2 flex items-center justify-center">
          <div className="cursor-pointer w-full h-full flex items-center justify-center gap-2 p-2 hover:bg-blue-50 hover:text-blue-400 rounded-md transition-all duration-300"  onClick={expand} >
            <img src={icon} alt="" className="w-4 h-4" />
            <h1 className="w-full h-full text-[14px] focus:font-medium items-center dropside">
              INQUIRIES
            </h1>
            <img src={downarrow} alt="" className="w-4 h-4 dropside" />
          </div>
        </div>
        <div className="w-full h-13 px-4 py-2 flex items-center justify-center">
          <div className="cursor-pointer w-full h-full flex items-center justify-center gap-2 p-2 hover:bg-blue-50 hover:text-blue-400 rounded-md transition-all duration-300"  onClick={expand} >
            <img src={icon} alt="" className="w-4 h-4" />
            <h1 className="w-full h-full text-[14px] focus:font-medium items-center dropside">
              FINANCES
            </h1>
            <img src={downarrow} alt="" className="w-4 h-4 dropside" />
          </div>
        </div>
        <div className="w-full h-13 px-4 py-2 flex items-center justify-center">
          <div className="cursor-pointer w-full h-full flex items-center justify-center gap-2 p-2 hover:bg-blue-50 hover:text-blue-400 rounded-md transition-all duration-300"  onClick={expand} >
            <img src={icon} alt="" className="w-4 h-4" />
            <h1 className="w-full h-full text-[14px] focus:font-medium items-center dropside">
              INSURANCES
            </h1>
            <img src={downarrow} alt="" className="w-4 h-4 dropside" />
          </div>
        </div>
        <div className="w-full min-h-13 px-4 py-2 flex flex-col gap-2 items-center justify-center">
          <div
            onClick={handleClick}
            className="tab cursor-pointer w-full h-full flex items-center justify-center gap-2 p-2 hover:bg-blue-50 hover:text-blue-400 rounded-md transition-all duration-300" >
            <img src={icon} alt="" className="w-4 h-4" />
            <h1 className="w-full h-full text-[14px] focus:font-medium items-center dropside">
              USERS
            </h1>
            <img src={downarrow} alt="" className="w-4 h-4 dropside" />
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
          <NavLink to={"/settings"} className="w-full h-full">
            <div className="cursor-pointer w-full h-full flex items-center justify-center gap-2 p-2 hover:bg-blue-50 hover:text-blue-400 rounded-md transition-all duration-300"  onClick={expand} >
              <img src={icon} alt="" className="w-4 h-4" />
              <h1 className="w-full h-full text-[14px] focus:font-medium items-center dropside">
                SETTINGS
              </h1>
            </div>
          </NavLink>
        </div>
      </div>
      <div className="w-full h-13 px-4 py-2 flex items-center justify-center">
        <div className=" cursor-pointer w-full h-full hover:bg-blue-50 hover:text-blue-400 rounded-md transition-all duration-300"  onClick={expand} >
          <NavLink
            to="/"
            className="w-full h-full flex items-center justify-center gap-2 p-2  rounded-md"
          >
            <img src={icon} alt="" className="w-4 h-4" />
            <h1 className="w-full h-full text-[14px] flex items-center dropside">
              LOGOUT
            </h1>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SidePanel;

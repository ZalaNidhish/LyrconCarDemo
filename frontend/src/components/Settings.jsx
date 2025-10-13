import React from "react";
import SidePanel from "../components/SidePanel";
import Nav from "../components/Nav";

const Settings = () => {
  return (
    <div className="flex w-screen h-screen overflow-hidden">
      <SidePanel />

      <div className="h-screen flex flex-col bg-slate-100 framepanel w-[78%] overflow-y-scroll">
        <Nav title={"SETTINGS"} />
        <div className="w-full p-4 flex flex-col gap-4">
          <form
            action=""
            className="w-full flex flex-col p-4 bg-white shadow-md"
          >
            <label htmlFor="fullname" className="text-[14px]">
              FULL NAME *
            </label>
            <input
              type="text"
              name="fullname"
              defaultValue="demo"
              className="bg-neutral-100 p-2 rounded outline-0 border-0 text-[12px] mb-4"
            />
            <label htmlFor="fullname" className="text-[14px]">
              EMAIL *
            </label>
            <input
              type="text"
              name="fullname"
              defaultValue="demo@gmail.com"
              className="bg-neutral-100 p-2 rounded outline-0 border-0 text-[12px] mb-4"
            />

            <button className="bg-blue-400 w-full p-2 rounded text-[14px] font-semibold text-white hover:bg-blue-300 hover:text-black transition-all duration-300 cursor-pointer">
              Update
            </button>
          </form>

          <h1 className="text-2xl font-bold">CHANGE PASSWORD</h1>

          <form
            action=""
            className="w-full flex flex-col p-4 bg-white shadow-md"
          >
            <label htmlFor="fullname" className="text-[14px]">
              CURRENT PASSWORD *
            </label>
            <input
              type="text"
              name="fullname"
              placeholder="Enter your current password"
              className="bg-neutral-100 p-2 rounded outline-0 border-0 text-[12px] mb-4"
            />
            <label htmlFor="fullname" className="text-[14px]">
              NEW PASSWORD *
            </label>
            <input
              type="text"
              name="fullname"
              placeholder="Enter your new password"
              className="bg-neutral-100 p-2 rounded outline-0 border-0 text-[12px] mb-4"
            />

            <button className="bg-blue-400 w-full p-2 rounded text-[14px] font-semibold text-white hover:bg-blue-300 hover:text-black transition-all duration-300 cursor-pointer">
             Change Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Settings;

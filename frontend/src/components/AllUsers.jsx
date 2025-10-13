import React from "react";
import Nav from "./Nav";
import SidePanel from "./SidePanel";
import edit from "../assets/edit.png";
import deleteicon from "../assets/delete.png";

const AllUsers = () => {
  return (
    <div className="flex w-screen h-screen overflow-hidden">
      <SidePanel />
      <div className="h-screen w-4/5 flex flex-col bg-slate-100">
        <Nav title={"USERS"} />
        <div className="py-7 px-4">
          <div className="w-full p-4 flex flex-col gap-4 bg-white rounded-md shadow-md">
            <h1 className="text-[18px] font-bold">ALL USERS</h1>
            <hr className="border-0.5 border-neutral-300 my-4" />
            <table className="bg-white rounded w-full">
              <thead>
                <tr className="w-full border-b">
                  <th className="py-2 border border-neutral-300 bg-neutral-100 px-4 font-semibold text-[14px]">
                    USER ID
                  </th>
                  <th className="py-2 border border-neutral-300 bg-neutral-100 px-4 font-semibold text-[14px]">
                    FULL NAME
                  </th>
                  <th className="py-2 border border-neutral-300 bg-neutral-100 px-4 font-semibold text-[14px]">
                    EMAIL ID
                  </th>
                  <th className="py-2 border border-neutral-300 bg-neutral-100 px-4 font-semibold text-[14px]">
                    ROLE
                  </th>
                  <th className="py-2 border border-neutral-300 bg-neutral-100 px-4 font-semibold text-[14px]">
                    STATUS
                  </th>
                  <th className="py-2 border border-neutral-300 bg-neutral-100 px-4 font-semibold text-[14px]">
                    ACTIONS
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="w-full border-b text-[12px]">
                  <td className="py-2 border border-neutral-300 px-4">1</td>
                  <td className="py-2 border border-neutral-300 px-4">
                    NIDHISH
                  </td>
                  <td className="py-2 border border-neutral-300 px-4">
                    NIDHISH1132007@GMAIL.COM
                  </td>
                  <td className="py-2 border border-neutral-300 px-4">Admin</td>
                  <td className="py-2 border border-neutral-300 px-4">
                    <h3 className="bg-green-500/10 text-green-600 text-center p-2">
                      Active
                    </h3>
                  </td>
                  <td className=" border border-neutral-300">
                    <div className="flex gap-8 justify-center items-center w-full h-full">
                      <img src={edit} alt="" className="w-4 h-4" />
                      <img src={deleteicon} alt="" className="w-4 h-4" />
                    </div>
                  </td>
                </tr>
                <tr className="w-full border-b text-[12px]">
                  <td className="py-2 border border-neutral-300 px-4">2</td>
                  <td className="py-2 border border-neutral-300 px-4">
                    TANMAY
                  </td>
                  <td className="py-2 border border-neutral-300 px-4">
                    TANMAY@TANMAYL.COM
                  </td>
                  <td className="py-2 border border-neutral-300 px-4">User</td>
                  <td className="py-2 border border-neutral-300 px-4">
                    <h3 className="bg-green-500/10 text-green-600 text-center p-2">
                      Active
                    </h3>
                  </td>
                  <td className=" border border-neutral-300">
                    <div className="flex items-center justify-center w-full h-full gap-8">
                      <img src={edit} alt="" className="w-4 h-4" />
                      <img src={deleteicon} alt="" className="w-4 h-4" />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;

import React from "react";
import Nav from "./Nav";
import DashboardCards from "./DashboardCards";

const DashboardFrame = () => {
  return (
    <div className="w-[78%] h-screen overflow-hidden">

      <Nav title={"DASHBOARD"} />
      <div className="h-10/11 w-full flex flex-col items-center bg-slate-100 p-8 overflow-y-scroll">
        <div className="w-full flex flex-col gap-2">
          <h1 className="font-bold text-3xl text-slate-500">
            WELCOME BACK, DEMO 👋
          </h1>
          <h3 className="text-1xl text-slate-500">
            HERE'S WHAT'S HAPPENING TO YOUR DEAERSHIP TODAY
          </h3>
        </div>

        <div className="w-full my-8 flex items-center justify-center gap-4">

          <DashboardCards title="CARS SOLD" amount="0" discription="0% FROM LAST MONTH" color="blue"/>
          <DashboardCards title="REVENUE" amount="0" discription="0% FROM LAST MONTH" color="green" />
          <DashboardCards title="LOANS APPROVED" amount="0" discription="0% FROM LAST MONTH" color="red" />

        </div>

        <div className="w-full p-4 bg-white shadow-md">
          <h1 className="font-bold text-lg">NEW CARS SALES PERFORMANCE</h1>
          <hr className="border-0.5 border-neutral-300 my-4" />
          <table className="bg-white rounded w-full">
            <tbody>
              <tr className="w-full border-b">
                <th className="py-1 border border-neutral-300 bg-neutral-100 px-4 font-semibold text-[14px]">
                  SALE ID
                </th>
                <th className="py-1 border border-neutral-300 bg-neutral-100 px-4 font-semibold text-[14px]">
                  CAR NAME
                </th>
                <th className="py-1 border border-neutral-300 bg-neutral-100 px-4 font-semibold text-[14px]">
                  NET ON ROAD PRICE
                </th>
                <th className="py-1 border border-neutral-300 bg-neutral-100 px-4 font-semibold text-[14px]">
                  SOLD AMOUNT
                </th>
                <th className="py-1 border border-neutral-300 bg-neutral-100 px-4 font-semibold text-[14px]">
                  PROFIT / LOSS
                </th>
              </tr>
              <tr className="w-full border-b">
                <td colSpan={5}>
                  <h4 className="p-2 text-[14px]">NO DATA AVAILABLE</h4>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="w-full p-4 bg-white shadow-md my-8">
          <h1 className="font-bold text-lg">UPCOMING INSURANCE EXPIRY</h1>
          <hr className="border-0.5 border-neutral-300 my-4" />
          <table className="bg-white rounded w-full">
            <tbody>
              <tr className="w-full border-b">
                <th className="py-1 border border-neutral-300 bg-neutral-100 px-4 W-1/4 font-semibold text-[14px]">
                  CAR ID
                </th>
                <th className="py-1 border border-neutral-300 bg-neutral-100 px-4 W-1/4 font-semibold text-[14px]">
                  CAR NAME
                </th>
                <th className="py-1 border border-neutral-300 bg-neutral-100 px-4 W-1/4 font-semibold text-[14px]">
                  EXPIRY DATE
                </th>
                <th className="py-1 border border-neutral-300 bg-neutral-100 px-4 W-1/4 font-semibold text-[14px]">
                  STATUS
                </th>
              </tr>
              <tr className="w-full border-b">
                <td colSpan={5}>
                  <h4 className="p-2 text-[14px]">NO DATA AVAILABLE</h4>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardFrame;

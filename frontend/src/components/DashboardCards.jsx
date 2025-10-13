import React from "react";
import car from "../assets/sports-car.png";


const DashboardCards = (props) => {
  return (
      <div className="w-1/3 px-4 py-8 gap-2 shadow-md flex flex-col justify-center bg-white">
        <div className="flex justify-between">
          <h1 className="text-neutral-500">{props.title}</h1>
          <div className="p-2 rounded bg-blue-400/20">
            <img src={car} alt="" className="w-4 h-4" />
          </div>
        </div>
        <div>
          <h1 className="font-bold text-2xl">{props.amount}</h1>
        </div>
        <div>
          <h1 className="text-neutral-500 text-[12px]">{props.discription}</h1>
        </div>
      </div>
  );
};

export default DashboardCards;

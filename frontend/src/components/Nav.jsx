import React from "react";

const Nav = (props) => {
  return (
    <div>
      <nav className="h-13 w-full bg-white border-1 border-l-0 flex items-center justify-between px-4">
        <h1 className="font-bold text-[22px]">{props.title}</h1>
        <h3 className="text-[12px] font-normal bg-neutral-100 p-2">
          12TH OCT 2025
        </h3>
      </nav>
    </div>
  );
};

export default Nav;

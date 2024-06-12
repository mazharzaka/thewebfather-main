import React from "react";

export default function Header() {
  return (
    <div className="bg-dark-200 z-10 fixed top-0 w-full flex items-center h-16 border-b-[1px] border-silver ">
      <div className="ml-12 flex items-end">
        <h2 className="text-white font-bold text-left text-xl">TheWebFather</h2>
        <span className="text-sm font-bold text-blue-200 " id="css">
          .CSS
        </span>
      </div>
    </div>
  );
}

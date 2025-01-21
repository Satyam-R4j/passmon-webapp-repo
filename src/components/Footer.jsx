import React from "react";

function Footer() {
  return (
    <div className="bg-slate-800  py-3  text-white flex flex-col items-center w-full fixed bottom-0">
      <div className="logo font-bold text-white text-2xl">
        <span className="text-green-500">&lt;</span>
        <span>Pass</span>
        <span className="text-green-500">Mon/&gt;</span>
      </div>

      <div className="flex">
        Created with&nbsp; <img width={24} src="src/assets/heart.png" alt="" />{" "}
        &nbsp; by me with CodeWithHarry
      </div>
    </div>
  );
}

export default Footer;

import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-slate-800 text-white">
      <div className=" mycontainer flex justify-between items-center px-4 py-5 h-14">
        <div className="logo font-bold text-white text-2xl">
          <span className="text-green-500">&lt;</span>
          <span>Pass</span>
          <span className="text-green-500">Mon/&gt;</span>
        </div>
        {/* <ul>
          <li className="flex gap-5">
            <a className="hover:font-bold" href="/">
              Home
            </a>
            <a className="hover:font-bold" href="/">
              About
            </a>
            <a className="hover:font-bold" href="/">
              Contact
            </a>
          </li>
        </ul> */}
        <button className="gitLogo p-1 text-white bg-green-700 my-5 rounded-xl flex justify-between items-center ring-white ring-1">
          <img className="invert w-9 " src="src/assets/github.svg" alt="  " />
          <span className="font-bold px-2">GitHub</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

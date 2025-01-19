import React from "react";


const Manager = () => {
  return (
    <>
      <div class="absolute inset-0 -z-10 h-full w-full bg-green-100 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div className="  mycontainer">
        <h1 className="text-4xl text   text-center">
          <span className="text-green-500">&lt;</span>
          <span>Pass</span>
          <span className="text-green-500">Mon/&gt;</span>
        </h1>
        <p className="text-green-500 text-xl text-center">
          Your own Password Manager
        </p>
        <div className="text-black gap-8  flex flex-col items-center  p-4 ">
          <input
            className="rounded-xl border border-green-500 w-full p-4 py-1 "
            type="text"
            placeholder="Enter website URL"
          />
          <div className="flex w-full justify-between  gap-10 ">
            <input
              className="rounded-xl border border-green-500 w-full p-4 py-1 "
              type="text"
              placeholder="Enter the username"
            />
            <div className="relative">
              <input
                className="rounded-xl border border-green-500 w-full p-4 py-1 "
                type="text"
                placeholder="Enter the password"
              />
              <span className="absolute  right-0"><img className="p-1 w-[5vh]" src="src/assets/eye.png" alt="" /></span>
            </div>
          </div>
          <button className=" flex items-center justify-center text-xl bg-green-400 hover:bg-green-500 rounded-xl px-4 py-2 w-fit ">
            <img src="src/assets/add-card.gif" alt="" className="w-8 h-8 " />
            Add Password
          </button>
        </div>
      </div>
    </>
  );
};

export default Manager;

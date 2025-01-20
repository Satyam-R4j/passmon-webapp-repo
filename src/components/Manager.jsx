import React, { useEffect, useRef, useState } from "react";

const Manager = () => {
  const ref = useRef();
  const [form, setForm] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setPasswordArray(JSON.parse(passwords));
    }
  }, []);

  const showPassword = () => {
    if (ref.current.src.includes("src/assets/eyecross.png")) {
      ref.current.src = "src/assets/eye.png";
    } else {
      ref.current.src = "src/assets/eyecross.png";
    }
  };

  const savePassword = () => {
    console.log(form);
    setPasswordArray([...passwordArray, form]);
    localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]));
    console.log(...passwordArray, form);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full bg-green-100 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
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
            value={form.site}
            onChange={handleChange}
            className="rounded-xl border border-green-500 w-full p-4 py-1 "
            type="text"
            placeholder="Enter website URL"
            name="site"
          />
          <div className="flex w-full justify-between  gap-10 ">
            <input
              value={form.username}
              onChange={handleChange}
              className="rounded-xl border border-green-500 w-full p-4 py-1 "
              type="text"
              placeholder="Enter the username"
              name="username"
            />
            <div className="relative">
              <input
                value={form.password}
                onChange={handleChange}
                className="rounded-xl border border-green-500 w-full mr-12 p-4 py-1 "
                type="text"
                placeholder="Enter the password"
                name="password"
              />
              <span className="absolute  top-0 right-0">
                <img
                  className="p-2 cursor-pointer "
                  ref={ref}
                  onClick={showPassword}
                  width={35}
                  src="src/assets/eye.png"
                  alt=""
                />
              </span>
            </div>
          </div>
          <button
            onClick={savePassword}
            className=" flex items-center justify-center text-xl bg-green-400 hover:bg-green-500 rounded-xl px-4 py-2 w-fit "
          >
            <img src="src/assets/add-card.gif" alt="" className="w-8 h-8 " />
            Add Password
          </button>
        </div>
        <div className="passwords">
          <h2 className="font-bold text-2xl py-4 ">Your Passwords</h2>
          {passwordArray.length === 0 && (
            <div className="text-xl text-red-500 font-bold">
              *No passwords to show
            </div>
          )}
          {passwordArray.length != 0 && (
            <table className="table-auto w-full overflow-hidden rounded-md ">
              <thead className="bg-green-800 text-white">
                <tr>
                  <th className="py-2">Site</th>
                  <th className="py-2">Username</th>
                  <th className="py-2">Password</th>
                </tr>
              </thead>
              <tbody className="bg-green-200">
                {Array.isArray(passwordArray) &&
                  passwordArray.map((item, index) => (
                    <tr key={index}>
                      <td className="py-2 border border-white text-center w-32">
                        {item.site}
                      </td>
                      <td className="py-2 border border-white text-center w-32">
                        {item.username}
                      </td>
                      <td className="py-2 border border-white text-center w-32">
                        {item.password}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default Manager;

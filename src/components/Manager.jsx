import React, { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

const Manager = () => {
  const ref = useRef();
  const passwordRef = useRef();
  const [form, setForm] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setPasswordArray(JSON.parse(passwords));
    }
  }, []);

  const showPassword = () => {
    passwordRef.current.type = "text";
    if (ref.current.src.includes("src/assets/eyecross.png")) {
      ref.current.src = "src/assets/eye.png";
      passwordRef.current.type = "text";
    } else {
      ref.current.src = "src/assets/eyecross.png";
      passwordRef.current.type = "password";
    }
  };

  const savePassword = () => {
    setPasswordArray([...passwordArray, { ...form, id: uuidv4() }]);
    localStorage.setItem(
      "passwords",
      JSON.stringify([...passwordArray, { ...form, id: uuidv4() }])
    );
    setForm({ sit: "", username: "", password: "" });
    toast("Password save!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const deletePassword = (id) => {
    let con = confirm("Do you really want to delete password!!");
    if (con) {
      setPasswordArray(passwordArray.filter((item) => item.id != id));
      localStorage.setItem(
        "passwords",
        JSON.stringify(passwordArray.filter((item) => item.id !== id))
        
      );
      toast("Password deleted!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const editPassword = (id) => {
    console.log("Editing Password with id ", id);
    setForm(passwordArray.filter((i) => i.id === id)[0]);
    setPasswordArray(passwordArray.filter((i) => i.id !== id));
    
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const copyText = (text) => {
    toast("Copied to clipboard!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    navigator.clipboard.writeText(text);
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* <div className="absolute inset-0 -z-10 h-full w-full bg-green-100 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div> */}

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
                ref={passwordRef}
                value={form.password}
                onChange={handleChange}
                className="rounded-xl border border-green-500 w-full mr-12 p-4 py-1 "
                type="password"
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
            &nbsp;Save
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
                  <th className="py-2">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-green-200">
                {Array.isArray(passwordArray) &&
                  passwordArray.map((item, index) => (
                    <tr key={index}>
                      <td className="py-2 px-5 border    border-white text-center w-32">
                        <div className="flex justify-center items-center">
                          <a
                            className=" gap-2   items-center"
                            href={item.site}
                            target="_blank"
                          >
                            {item.site}
                          </a>
                          <div
                            className="size-7 cursor-pointer"
                            onClick={() => {
                              copyText(item.site);
                            }}
                          >
                            <img width={24} src="src/assets/copy.gif" alt="" />
                          </div>
                        </div>
                      </td>
                      <td className="py-2 border border-white text-center w-32">
                        <div className="flex justify-center items-center">
                          {item.username}

                          <div
                            className="size-7 cursor-pointer"
                            onClick={() => {
                              copyText(item.username);
                            }}
                          >
                            <img width={24} src="src/assets/copy.gif" alt="" />
                          </div>
                        </div>
                      </td>
                      <td className="py-2 border border-white text-center w-32">
                        <div className="flex justify-center items-center">
                          {item.password}
                          <div
                            className="size-7 cursor-pointer"
                            onClick={() => {
                              copyText(item.password);
                            }}
                          >
                            <img width={24} src="src/assets/copy.gif" alt="" />
                          </div>
                        </div>
                      </td>
                      <td className="py-2  border border-white text-center w-32">
                        <div
                          className="inline-block mr-2 "
                          onClick={() => {
                            editPassword(item.id);
                          }}
                        >
                          <img width={24} src="src/assets/edit4.gif" alt="" />
                        </div>
                        <div
                          className="inline-block"
                          onClick={() => {
                            deletePassword(item.id);
                          }}
                        >
                          <img width={24} src="src/assets/delete.gif" alt="" />
                        </div>
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

import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-green-400 ">
      <div className=" mycontainer flex justify-between items-center px-4 py-5 h-14">
        <div className="logo font-bold ">PassMon</div>
        <ul>
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
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

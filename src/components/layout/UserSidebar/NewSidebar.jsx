import React, { useState } from "react";
import menuLogo from "../../../assets/outline_menu.svg";
import logo from "../../../assets/logo.svg";
function NewSidebar() {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: "categories_logo" },
    { title: "Inbox", src: "investment" },
    { title: "Accounts", src: "purpose-logo" },
    { title: "Schedule ", src: "source" },
    { title: "Search", src: "vector" },
    // { title: "Analytics", src: "Chart" },
    // { title: "Files ", src: "Folder", gap: true },
    // { title: "Setting", src: "Setting" },
  ];
  return (
    <div className="flex">
      <div
        className={`${
          open ? "w-52" : "w-28"
        } bg-dark-purple p-5 pt-2 duration-300 flex flex-col justify-between`}
      >
        <div className="flex items-center justify-between">
          <img
            src={logo}
            className={`cursor-pointer w-20 h-20 duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <img
            src={menuLogo}
            className={`cursor-pointer w-7 border-dark-purple border-2 rounded-full ${
              !open && "rotate-180"
            }`}
            onClick={() => setOpen(!open)}
          />
        </div>
        <hr />
        <ul>
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
                ${Menu.gap ? "mt-4" : "mt-2"} ${
                index === 0 && "bg-light-white"
              }`}
            >
              <img src={`./src/assets/${Menu.src}.svg`} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NewSidebar;

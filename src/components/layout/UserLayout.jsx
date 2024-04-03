import React from "react";
import UserNavbar from "./UserNavbar/UserNavbar";
// import UserSidebar from "./UserSidebar/UserSidebar";
// import { Outlet } from "react-router-dom";
// import NewSidebar from "./UserSidebar/NewSidebar";

function UserLayout() {
  return (
    <div className="w-svw">
      <div className="w-full ">
        <UserNavbar />
      </div>
    </div>
  );
}

export default UserLayout;

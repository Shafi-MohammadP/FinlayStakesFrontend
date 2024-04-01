import React from "react";
import { Route, Routes } from "react-router-dom";
import UserLayout from "../../components/layout/UserLayout";
import Home from "../../pages/Home/Home";

function UserRoutes() {
  return (
    <Routes>
      <Route path="/" element={<UserLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default UserRoutes;

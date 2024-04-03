import React from "react";
import { Route, Routes } from "react-router-dom";
import UserLayout from "../../components/layout/UserLayout";
import Home from "../../pages/Home/Home";
import PersonalDetailsForm from "../../pages/Personel-Info/PersonalDetailsForm";

function UserRoutes() {
  return (
    <Routes>
      <Route path="/" element={<UserLayout />}>
        <Route index element={<Home />} />
        <Route path="personal_details/" element={<PersonalDetailsForm />} />
      </Route>
    </Routes>
  );
}

export default UserRoutes;

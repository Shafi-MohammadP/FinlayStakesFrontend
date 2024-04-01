import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import UserRoutes from "./routes/UserRoutes/UserRoutes";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import OtpVerification from "./pages/Register/OtpVerification";
import UserLayout from "./components/layout/UserLayout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login/" element={<Login />} />
        <Route path="/register/">
          <Route index element={<Register />} />
          <Route path="otp-verification/" element={<OtpVerification />} />
        </Route>
        <Route path="/*" element={<UserRoutes />} />
      </Routes>
    </>
  );
}

export default App;

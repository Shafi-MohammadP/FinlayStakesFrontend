import { data } from "autoprefixer";
import React from "react";
import toast from "react-hot-toast";

function LoginValidation(data) {
  const isValidEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
    data.email
  );

  if (!data.email.trim()) {
    toast.error("Email Field Cannot be Empty");
  } else if (!isValidEmail) {
    toast.error("Enter a Valid Email");
  } else if (!data.password.trim()) {
    toast.error("Password Field Cannot be Empty");
  } else {
    return true;
  }

  return false;
}

export default LoginValidation;

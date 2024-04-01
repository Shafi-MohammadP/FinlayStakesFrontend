import React from "react";
import toast from "react-hot-toast";

function SignUpValidation(data) {
  console.log(data, "coming from frond");
  const isValidEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
    data.email
  );

  if (data.email.trim() === "") {
    toast.error(" Email Field Cannot Empty!");
    return false;
  } else if (!isValidEmail) {
    toast.error("Please Enter Valid Email!");
    return false;
  } else if (data.password.trim() === "") {
    toast.error("Password Field Cannot Empty!");
    return false;
  } else if (data.password.length < 8) {
    toast.error("Password Should be Minimum 8 Characters !");
    return false;
  } else if (data.password != data.password2) {
    toast.error("Password Does not Match!");
    return false;
  }
  return true;
}

export default SignUpValidation;

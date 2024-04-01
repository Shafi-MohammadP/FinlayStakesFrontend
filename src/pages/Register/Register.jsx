import React, { useState } from "react";
import backgroundImage from "../../assets/welcome-page-image/background-image.svg";
import logo from "../../assets/logo.svg";
import googleLogo from "../../assets/googleAuth.png";
import facebookLogo from "../../assets/Facebook_logo.png";
import { Button, Checkbox, Typography } from "@material-tailwind/react";
import { toast, Toaster } from "react-hot-toast";
import { Input } from "reactstrap";
import { useNavigate } from "react-router-dom";
import SignUpValidation from "../../helpers/Form-validations/SignUpValidation";
function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [reEnterPassword, setReEnterPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleReenterPasswordShow = () => {
    setReEnterPassword(!reEnterPassword);
  };
  const handleSignUp = async () => {
    const data = {
      email: email,
      password: password,
      password2: confirmPassword,
    };
    const isValid = SignUpValidation(data);
    if (isValid) {
      try {
        navigate("otp-verification/");
      } catch (err) {
        console.error(err, "Error during sign up");
        toast.error("Sign up Failed");
      } finally {
      }
    }
  };
  return (
    <>
      <div className="">
        <div className="flex md:max-h-screen">
          <div
            className="hidden md:block h-svh w-[50%] bg-cover"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          >
            <div className="text-white xl:pt-[10%] pt-[20%] pl-[10%]">
              <Typography
                className="font-lato 2xl:text-4xl sm:text-xl"
                variant="h3"
              >
                Hello,
                <br />
                Welcome back to{" "}
              </Typography>
              <Typography
                className="font-lato lg:text-5xl  sm:text-4xl xl:text-6xl  2xl:text-7xl  "
                variant="h1"
              >
                <strong>FINLAY STAKES</strong>
              </Typography>
              <Typography
                className="font-lato mt-4  lg:text-sm  sm:text-xs 2xl:text-xl "
                variant="h5"
              >
                Enter your details and start journey with us
              </Typography>
            </div>
          </div>

          <div className="2xl:w-[50%] xl:w-[50%] lg:w-[50%] md:w-[50%] max-h-screen p-1 w-full flex flex-col justify-center">
            <div className="flex w-auto justify-center items-center">
              <img src={logo} alt="Logo" className="w-auto" />
            </div>
            <div className="pl-11 pr-7 sm:pl-16 md:pl-11  lg:pl-20 xl:pl-24 2xl:pl-28  md:w-5/6  flex flex-col mt-11">
              <h1
                className="font-lato text-2xl  mt-3 text-start"
                style={{ color: "#250C77" }}
              >
                <strong>Enter your details</strong>
                <br />
                <span
                  className=""
                  style={{ color: "#9397BB", fontSize: "16px" }}
                >
                  Provide your email and choose a password
                </span>
              </h1>

              <br />
              <div className="relative flex flex-col gap-4 w-full">
                <label htmlFor="" className="font-semibold">
                  Enter Your Email
                </label>
                <Input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Email"
                  value={email}
                  className="h-12 border-[1px] border-[#dedfee] pl-5 rounded-md"
                  required
                />
                <label htmlFor="" className="font-semibold">
                  Password
                </label>

                <Input
                  onChange={(e) => setPassword(e.target.value)}
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  className="h-12 border border-[#dedfee] pl-5 pr-12 rounded-md"
                />
                {showPassword ? (
                  <i
                    className="ri-eye-fill absolute top-[57%] transform -translate-y-1/2 right-3 text-gray-400 cursor-pointer"
                    onClick={handleShowPassword}
                  ></i>
                ) : (
                  <i
                    className="ri-eye-off-fill absolute top-[57%] transform -translate-y-1/2 right-3 text-gray-400 cursor-pointer"
                    onClick={handleShowPassword}
                  ></i>
                )}
                <label htmlFor="" className="font-semibold">
                  Re-enter Password
                </label>

                <Input
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  type={reEnterPassword ? "text" : "password"}
                  placeholder="Password"
                  value={confirmPassword}
                  className="h-12 border border-[#dedfee] pl-5 pr-12 rounded-md"
                />
                {reEnterPassword ? (
                  <i
                    className="ri-eye-fill absolute top-[91%] transform -translate-y-1/2 right-3 text-gray-400 cursor-pointer"
                    onClick={handleReenterPasswordShow}
                  ></i>
                ) : (
                  <i
                    className="ri-eye-off-fill absolute top-[91%] transform -translate-y-1/2 right-3 text-gray-400 cursor-pointer"
                    onClick={handleReenterPasswordShow}
                  ></i>
                )}
              </div>

              <br />
              <br />
              <Button className="btn">
                <p className="font-bold" onClick={handleSignUp}>
                  Get OTP
                </p>
              </Button>
            </div>
          </div>
        </div>
        <Toaster />
      </div>
    </>
  );
}

export default Register;

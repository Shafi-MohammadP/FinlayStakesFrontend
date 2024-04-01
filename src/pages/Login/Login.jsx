import React, { useState } from "react";
import backgroundImage from "../../assets/welcome-page-image/background-image.svg";
import logo from "../../assets/logo.svg";
import googleLogo from "../../assets/googleAuth.png";
import facebookLogo from "../../assets/Facebook_logo.png";
import { Button, Checkbox, Typography } from "@material-tailwind/react";
import { toast, Toaster } from "react-hot-toast";
import { Input } from "reactstrap";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  // Manual Login Function
  const handleLogin = async () => {
    const data = {
      email: email,
      password: password,
    };
    const isValid = LoginValidation(data);
    if (isValid) {
      try {
        navigate("/");
        //   const response = ""
      } catch (err) {
        console.error(err, "Error Found during Login");
        toast.error("Login Failed");
      }
    } else {
      return;
    }
  };
  return (
    <>
      <div className="">
        <div className="flex max-h-screen">
          <div className="hidden md:block h-svh w-[50%] bg-cover" style={{ backgroundImage: `url(${backgroundImage})` }}>

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
                className="font-lato pt-4  lg:text-sm  sm:text-xs 2xl:text-xl "
                variant="h5"
              >
                Enter your details and start journey with us
              </Typography>
            </div>
          </div>

          <div className="md:w-[50%]   p-1 w-full flex flex-col justify-center">
            <div className="flex  w-auto justify-center items-center">
              <img src={logo} alt="Logo" className="w-auto pt-8" />
            </div>
            <div className="pl-7 pr-7 sm:pl-16 md:pl-11  lg:pl-20 xl:pl-24 2xl:pl-28 2xl:w-128 md:w-5/6  flex flex-col">
              <h1
                className="font-lato text-2xl pt-2 text-start"
                style={{ color: "#250C77" }}
              >
                <strong>Log in</strong>
              </h1>

              <br />
              <div className="relative flex flex-col gap-4 w-full">
                <label htmlFor="" className="font-semibold">
                  Email
                </label>
                <Input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Email"
                  value={email}
                  className="h-11 border-[1px] border-[#dedfee] pl-5 rounded-md"
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
                  className="h-11 border border-[#dedfee] pl-5 pr-12 rounded-md"
                />
                {showPassword ? (
                  <i
                    className="ri-eye-fill absolute top-[88%] transform -translate-y-1/2 right-3 text-gray-400 cursor-pointer"
                    onClick={handleShowPassword}
                  ></i>
                ) : (
                  <i
                    className="ri-eye-off-fill absolute top-[88%] transform -translate-y-1/2 right-3 text-gray-400 cursor-pointer"
                    onClick={handleShowPassword}
                  ></i>
                )}
              </div>

              <br />
              <div className="flex justify-end">
                <p
                  //   onClick={forgotHandle}
                  className="text-[#6560F0]  hover:cursor-pointer hover:text-[#332df3] "
                >
                  Forgot password?
                </p>
              </div>
              <br />
              <Button onClick={handleLogin} className="btn ">
                <strong>LOGIN </strong>
              </Button>
              <div className="flex items-center pt-2 justify-center w-full pb-2">
                <hr className="flex-grow border-t-2 pt-3 border-[#dedfee]" />
                <span
                  className="px-4 font-bold pt-1"
                  style={{ color: "#9397BB" }}
                >
                  or
                </span>
                <hr className="flex-grow border-t-2 pt-3  border-[#dedfee]" />
              </div>

              <div className="flex gap-2 pt-2">
                <Button
                  //   onClick={() => LoginWithGoogleAuth()}
                  className="bg-transparent flex justify-center items-center  gap-3 text-black w-full hover:text-[#250c77] border-[1px] border-[#DEDFEE] rounded-md h-12"
                >
                  <span>
                    <img
                      className="w-6 h-6"
                      src={googleLogo}
                      alt="googleImage"
                    />
                  </span>
                  <span className="">Google</span>
                </Button>
                <Button
                  //   onClick={() => fbLogin()}
                  className="bg-transparent flex justify-center items-center gap-3 w-full text-black hover:text-[#6560F0] border-[1px] border-[#DEDFEE] rounded-md h-12"
                >
                  <span>
                    <img
                      className="w-6 h-6"
                      src={facebookLogo}
                      alt="facebookImage"
                    />
                  </span>
                  <span className="">Google</span>
                </Button>
              </div>
              <br />
              <div className="flex justify-center">
                <p>
                  <span className="text-[#9397BB]">Don't have an account?</span>
                  <span
                    className="text-[#004EFD] ml-3 hover:text-[#6560F0] hover:cursor-pointer"
                    onClick={() => navigate("/register")}
                  >
                    <strong>Sign up Today!</strong>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <Toaster />
      </div>
    </>
  );
}
import LoginValidation from "../../helpers/Form-validations/LoginValidation";

export default Login;

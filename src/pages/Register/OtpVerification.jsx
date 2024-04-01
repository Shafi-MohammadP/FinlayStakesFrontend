import React, { useState } from "react";
import backgroundImage from "../../assets/welcome-page-image/background-image.svg";
import logo from "../../assets/logo.svg";
import googleLogo from "../../assets/googleAuth.png";
import facebookLogo from "../../assets/Facebook_logo.png";
import { Button, Checkbox, Typography } from "@material-tailwind/react";
import { toast, Toaster } from "react-hot-toast";
import { Input } from "reactstrap";
import { useNavigate } from "react-router-dom";
import OTPInput from "otp-input-react";
function OtpVerification() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const handleOtpSubmission = async () => {
    if (otp.length < 6) {
      toast.error("OTP Should be 6 Digits");
      return;
    }
    try {
      navigate("/");
    } catch (err) {
      console.error(err, "Error Found During Otp Submission");
      toast.error("Error Found During Otp Submission");
    }
  };
  return (
    <>
      <div className="">
        <div className="flex flex-col md:flex-row md:max-h-screen">
          <div
            className="hidden md:block h-screen md:w-[50%] bg-cover"
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
                className="font-lato lg:text-5xl  sm:text-4xl xl:text-6xl  2xl:text-7xl"
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

          <div className="2xl:w-[50%] xl:w-[50%] lg:w-[50%] md:w-[50%] w-full flex flex-col justify-center items-center">
            <div className="flex w-auto justify-center items-center md:pt-5 pt-24">
              <img src={logo} alt="Logo" className="w-auto" />
            </div>
            <div className="px-4 ml-4 py-24 md:px-11 md:py-24 lg:px-20 xl:px-24 2xl:px-28 md:w-5/6 flex flex-col">
              <h1
                className="font-lato text-2xl text-start"
                style={{ color: "#250C77" }}
              >
                <strong>Verify Your Email</strong>
                <br />
                <span
                  className=""
                  style={{ color: "#9397BB", fontSize: "16px" }}
                >
                  We sent a code to Sample@gmail.com
                </span>
              </h1>

              <div className="pt-5">
                <OTPInput
                  value={otp}
                  onChange={setOtp}
                  autoFocus
                  OTPLength={6}
                  otpType="number"
                  disabled={false}
                  inputStyles={{
                    border: "2px solid #9397BB",
                    borderRadius: "8px",
                    height: "48px",
                    width: "50%",
                    maxWidth: "50px",
                    minWidth: "37px",
                  }}
                />
              </div>
              <div className="pt-5 ml-1">
                <p>
                  <span className="text-[#afafaf]">Didn’t get a code?</span>{" "}
                  <span className="text-[#004EFD] hover:cursor-pointer hover:text-[#74aeff] pl-2">
                    <strong>Click to resend</strong>
                  </span>{" "}
                </p>
              </div>

              <br />
              <br />
              <Button className="btn w-full">
                <p className="font-bold" onClick={handleOtpSubmission}>
                  Sign Up
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

export default OtpVerification;

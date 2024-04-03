import React, { useState } from "react";
import PersonalDetails from "../../components/user/ProfilePage/PersonelDetails";
import { Box } from "@mui/material";
import ProgressBar from "../../components/user/ProfilePage/ProgressBar";
import chevronRight from "../../assets/perosnelform/chevron-right-icon.svg";
import chevronLeft from "../../assets/perosnelform/chevron-left-con.svg";
import IncomeDetails from "../../components/user/ProfilePage/IncomeDetails";
import ExpenseDetails from "../../components/user/ProfilePage/ExpenseDetails";
import AssetDetails from "../../components/user/ProfilePage/AssetDetails";
import LiabilityDetails from "../../components/user/ProfilePage/LiabilityDetails";
import GoalsDetails from "../../components/user/ProfilePage/GoalsDetails";
import ExistingProvision from "../../components/user/ProfilePage/ExistingProvision";
import FinancialPlanning from "../../components/user/ProfilePage/FinancialPlanning";
import ExistingPolicies from "../../components/user/ProfilePage/ExistingPolicies";
function PersonalDetailsForm() {
  const [activeStep, setActiveStep] = useState(1);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handlePrev = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  return (
    <>
      <Box
        display="flex"
        width="100%"
        paddingBottom="80px"
        backgroundColor="#F2F1F9"
      >
        {activeStep === 1 && (
          <Box
            padding={"10px"}
            position={"relative"}
            width={"900%"}
            display={"flex"}
            flexDirection={"row"}
            alignItems={"flex-start"}
            justifyContent={"space-between"}
          >
            <PersonalDetails onNext={handleNext} onPrev={handlePrev} />
            <ProgressBar activeStep={activeStep} />
          </Box>
        )}
        {activeStep === 2 && (
          <Box
            padding={"10px"}
            position={"relative"}
            width={"900%"}
            display={"flex"}
            flexDirection={"row"}
            alignItems={"flex-start"}
            justifyContent={"space-between"}
          >
            <IncomeDetails onNext={handleNext} onPrev={handlePrev} />
            <ProgressBar activeStep={activeStep} />
          </Box>
        )}
        {activeStep === 3 && (
          <Box
            padding={"10px"}
            position={"relative"}
            width={"900%"}
            display={"flex"}
            flexDirection={"row"}
            alignItems={"flex-start"}
            justifyContent={"space-between"}
          >
            <ExpenseDetails onNext={handleNext} onPrev={handlePrev} />
            <ProgressBar activeStep={activeStep} />
          </Box>
        )}
        {activeStep === 4 && (
          <Box
            padding={"10px"}
            position={"relative"}
            width={"900%"}
            display={"flex"}
            flexDirection={"row"}
            alignItems={"flex-start"}
            justifyContent={"space-between"}
          >
            <AssetDetails onNext={handleNext} onPrev={handlePrev} />
            <ProgressBar activeStep={activeStep} />
          </Box>
        )}
        {activeStep === 5 && (
          <Box
            padding={"10px"}
            position={"relative"}
            width={"900%"}
            display={"flex"}
            flexDirection={"row"}
            alignItems={"flex-start"}
            justifyContent={"space-between"}
          >
            <LiabilityDetails onNext={handleNext} onPrev={handlePrev} />
            <ProgressBar activeStep={activeStep} />
          </Box>
        )}
        {activeStep === 6 && (
          <Box
            padding={"10px"}
            position={"relative"}
            width={"900%"}
            display={"flex"}
            flexDirection={"row"}
            alignItems={"flex-start"}
            justifyContent={"space-between"}
          >
            <GoalsDetails onNext={handleNext} onPrev={handlePrev} />
            <ProgressBar activeStep={activeStep} />
          </Box>
        )}
        {activeStep === 7 && (
          <Box
            padding={"10px"}
            position={"relative"}
            width={"900%"}
            display={"flex"}
            flexDirection={"row"}
            alignItems={"flex-start"}
            justifyContent={"space-between"}
          >
            <ExistingProvision onNext={handleNext} onPrev={handlePrev} />
            <ProgressBar activeStep={activeStep} />
          </Box>
        )}
        {activeStep === 8 && (
          <Box
            padding={"10px"}
            position={"relative"}
            width={"900%"}
            display={"flex"}
            flexDirection={"row"}
            alignItems={"flex-start"}
            justifyContent={"space-between"}
          >
            <FinancialPlanning onNext={handleNext} onPrev={handlePrev} />
            <ProgressBar activeStep={activeStep} />
          </Box>
        )}
        {activeStep === 9 && (
          <Box
            padding={"10px"}
            position={"relative"}
            width={"900%"}
            display={"flex"}
            flexDirection={"row"}
            alignItems={"flex-start"}
            justifyContent={"space-between"}
          >
            <ExistingPolicies onNext={handleNext} onPrev={handlePrev} />
            <ProgressBar activeStep={activeStep} />
          </Box>
        )}
      </Box>
      <div className="flex pl-5  sm:pl-0justify-center md:justify-end items-center md:items-end gap-7 mr-28 pb-3 bg-[#F2F1F9]">
        <button
          className="w-28 h-8  rounded-lg relative hover:border border-[#250C77]"
          onClick={() => handlePrev()}
        >
          <div className="flex justify-between items-center pl-3">
            <img src={chevronLeft} alt="" className="" />
            <span className="absolute top-[15px] right-5  transform -translate-y-1/2 font-bold">
              Back
            </span>
          </div>
        </button>
        <button className="profile__btn relative">
          <div
            className="flex justify-between items-center "
            onClick={() => handleNext()}
          >
            <span className="ml-5">Next Step</span>
            <img
              src={chevronRight}
              alt=""
              className="hidden sm:block kh-5 w-5 absolute top-[17px] right-3  transform -translate-y-1/2"
            />
          </div>
        </button>
      </div>
    </>
  );
}

export default PersonalDetailsForm;

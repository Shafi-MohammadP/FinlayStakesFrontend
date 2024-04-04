import React from "react";
import personalIcon from "../../../assets/perosnelform/personal-information.svg";
import incomeIcon from "../../../assets/perosnelform/income.svg";
import expenseIcon from "../../../assets/perosnelform/expense-logo.svg";
import liabilityIcon from "../../../assets/perosnelform/liability-icon.svg";
import assetIcon from "../../../assets/perosnelform/asset-icon.svg";
import provisionIcon from "../../../assets/perosnelform/provision-cion.svg";
import policyIcon from "../../../assets/perosnelform/policy-icon.svg";
import goalIcon from "../../../assets/perosnelform/goal-icon.svg";
import educationIcon from "../../../assets/perosnelform/childrens-icon.svg";
import { Box } from "@mui/material";

function ProgressBar({ activeStep }) {
  const stepImages = [
    { icon: personalIcon, label: "Personal Details" },
    { icon: incomeIcon, label: "Income" },
    { icon: expenseIcon, label: "Expenses" },
    { icon: assetIcon, label: "Asset" },
    { icon: liabilityIcon, label: "Liabilities" },
    { icon: provisionIcon, label: "Provisions" },
    { icon: policyIcon, label: "Policy" },
    { icon: goalIcon, label: "Goals" },
    { icon: educationIcon, label: "Education" },
  ];

  return (
    <Box className="flex flex-col items-center mt-28 mr-1 md:mr7">
      {stepImages.map((stepImg, index) => (
        <div className="flex items-center flex-col" key={index + 1}>
          <div
            style={
              activeStep === index + 1
                ? {
                    width: "44px",
                    height: "44px",
                    backgroundColor: "#DEDFEE",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    transform: "translate(-20px)",
                  }
                : {}
            }
          >
            <img
              src={stepImg.icon}
              loading="lazy"
              style={
                activeStep === index + 1
                  ? { transform: "scale(1.35)" }
                  : {
                      filter:
                        index + 1 > activeStep
                          ? "grayscale(100%) brightness(100%)"
                          : "none",
                    }
              }
            />
          </div>
          {index < stepImages.length - 1 && (
            <div
              style={{
                height: "40px",
                width: "2px",
                backgroundColor: index >= activeStep ? "#A6A9D1" : "#250C77",
                marginBottom: "4px",
              }}
            ></div>
          )}
        </div>
      ))}
    </Box>
  );
}

export default ProgressBar;

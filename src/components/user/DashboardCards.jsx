import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import circleIcon from "../../assets/background-round.svg";
import incomeIcon from "../../assets/income-icon.svg";
import expenseIcon from "../../assets/exp.svg";
import assetIcon from "../../assets/asset.svg";
import liabilityIcon from "../../assets/liability.svg";
import arrowUp from "../../assets/up-arrow-green.svg";
import arrowDown from "../../assets/arrow-down.svg";

function DashboardCards() {
  return (
    <>
      <div className="flex flex-wrap gap-5 justify-around">
        <Card sx={{ minWidth: 250, flex: "1 1 auto", borderRadius: "16px" }}>
          <CardContent className="">
            <div className="relative flex items-center gap-4">
              <div className="relative">
                <img src={circleIcon} alt="Circle Icon" className="w-11 h-11" />
                <img
                  src={incomeIcon}
                  alt="Income Icon"
                  className="absolute inset-0 m-auto"
                />
              </div>
              <Typography variant="h6" component="div">
                <strong className="">TOTAL INCOME</strong>
              </Typography>
            </div>
            <div className="flex px-[25%] py-2">
              <strong>
                AED <span className="text-2xl">0</span>
              </strong>
            </div>
            <hr className="bg-[#DEDFEE] " />
            <div className="flex items-center gap-2 md:gap-4 px-5 md:px-11 py-3">
              <img src={arrowUp} alt="" />
              <p
                className="text-[#9397BB] font-semibold"
                style={{ fontSize: "20px" }}
              >
                0.0% Increase
              </p>
            </div>
            <div className="flex md:items-center md:justify-center">
              <p className="text-[#9397BB]">Total amount of income generated</p>
            </div>
          </CardContent>

          {/* <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions> */}
        </Card>
        <Card sx={{ minWidth: 250, flex: "1 1 auto", borderRadius: "16px" }}>
          <CardContent className="">
            <div className="relative flex items-center gap-4">
              <div className="relative">
                <img src={circleIcon} alt="Circle Icon" className="w-11 h-11" />
                <img
                  src={expenseIcon}
                  alt="Income Icon"
                  className="absolute inset-0 m-auto"
                />
              </div>
              <Typography variant="h6" component="div">
                <strong>TOTAL EXPENSES</strong>
              </Typography>
            </div>
            <div className="flex px-[25%] py-2">
              <strong>
                AED <span className="text-2xl">0</span>
              </strong>
            </div>
            <hr className="bg-[#DEDFEE] " />
            <div className="flex items-center gap-2 md:gap-4 px-5 md:px-11 py-3">
              <img src={arrowDown} alt="" />
              <p
                className="text-[#9397BB] font-semibold"
                style={{ fontSize: "20px" }}
              >
                0.0% Decrease
              </p>
            </div>
            <div className="flex md:items-center md:justify-center">
              <p className="text-[#9397BB]">
                Total amount of Expense generated
              </p>
            </div>
          </CardContent>

          {/* <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions> */}
        </Card>
        <Card sx={{ minWidth: 250, flex: "1 1 auto", borderRadius: "16px" }}>
          <CardContent className="">
            <div className="relative flex items-center gap-4">
              <div className="relative">
                <img src={circleIcon} alt="Circle Icon" className="w-11 h-11" />
                <img
                  src={assetIcon}
                  alt="Income Icon"
                  className="absolute inset-0 m-auto"
                />
              </div>
              <Typography variant="h6" component="div">
                <strong>TOTAL ASSETS</strong>
              </Typography>
            </div>
            <div className="flex px-[25%] py-2">
              <strong>
                AED <span className="text-2xl">0</span>
              </strong>
            </div>
            <hr className="bg-[#DEDFEE] " />
            <div className="flex items-center gap-2 md:gap-4 px-5 md:px-11 py-3">
              <img src={arrowUp} alt="" />
              <p
                className="text-[#9397BB] font-semibold"
                style={{ fontSize: "20px" }}
              >
                0.0% Increase
              </p>
            </div>
            <div className="flex md:items-center md:justify-center">
              <p className="text-[#9397BB]">Total amount of Assets generated</p>
            </div>
          </CardContent>

          {/* <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions> */}
        </Card>
        <Card sx={{ minWidth: 250, flex: "1 1 auto", borderRadius: "16px" }}>
          <CardContent className="">
            <div className="relative flex items-center gap-4">
              <div className="relative">
                <img src={circleIcon} alt="Circle Icon" className="w-11 h-11" />
                <img
                  src={liabilityIcon}
                  alt="Income Icon"
                  className="absolute inset-0 m-auto"
                />
              </div>
              <Typography variant="h6" component="div">
                <strong>TOTAL LIABILITIES</strong>
              </Typography>
            </div>
            <div className="flex px-[25%] py-2">
              <strong>
                AED <span className="text-2xl">0</span>
              </strong>
            </div>
            <hr className="bg-[#DEDFEE] " />
            <div className="flex items-center gap-2 md:gap-4 px-5 md:px-11 py-3">
              <img src={arrowUp} alt="" />
              <p
                className="text-[#9397BB] font-semibold"
                style={{ fontSize: "20px" }}
              >
                0.0% Increase
              </p>
            </div>
            <div className="flex md:items-center md:justify-center">
              <p className="text-[#9397BB]">Total amount of Liabilities</p>
            </div>
          </CardContent>

          {/* <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions> */}
        </Card>
      </div>
    </>
  );
}

export default DashboardCards;

import { Card, CardContent, Typography } from "@mui/material";
import React from "react";
import downArrow from "../../assets/arrow-down.svg";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";

import { Doughnut } from "react-chartjs-2";
const provisionData = [
  { label: "Children's Education", value: "0.00", id: 1 },
  { label: "Retirement", value: "0.00", id: 2 },
  { label: "Life Insurance", value: "0.00", id: 3 },
  { label: "Critical Illness", value: "0.00", id: 4 },
  { label: "Disability", value: "0.00", id: 5 },
];
const getColor = (index) => {
  console.log(index);
  switch (index) {
    case 1:
      return "green";
    case 2:
      return "cyan";
    case 3:
      return "yellow";
    case 4:
      return "blue";
    case 5:
      return "red";
    case 6:
      return "purple";
    default:
      return "black";
  }
};
const Data = {
  datasets: [
    {
      data: [50, 20, 20, 50, 50],
      backgroundColor: ["Green", "Blue", "Cyan", "Red", "Yellow"],
    },
  ],
  labels: [
    "Children's Education",
    "Retirement",
    "Life Insurance",
    "Critical Illness ",
    "Disability",
  ],
  options: {
    legend: {
      display: false,
    },
  },
};
ChartJS.register(Tooltip, Title, ArcElement, Legend);

function FinancialPlanningCard() {
  return (
    <div className="w-full rounded">
      <Card className="rounded p-5" style={{ borderRadius: "16px" }}>
        <Typography className="font-bold" style={{ fontWeight: "bold" }}>
          FINANCIAL PLANNING SHORTFALL
        </Typography>
        <div className="flex items-center gap-16 py-3">
          <span className="font-bold">AED 0.00</span>
          <div className="flex gap-2">
            <img src={downArrow} alt="" />

            <h3 className="font-bold">0.0%</h3>
          </div>
        </div>
        <CardContent>
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 ">
              <div className="w-48 h-48 pt-[-13%] doughnut-container">
                <Doughnut
                  data={Data}
                  options={{
                    plugins: {
                      legend: {
                        display: false,
                      },
                      tooltip: {
                        enabled: true,
                        callbacks: {
                          label: function (context) {
                            let label = context.label || "";
                            if (label) {
                              label += ": ";
                            }
                            label += context.formattedValue;
                            return label;
                          },
                        },
                      },
                    },
                  }}
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 pt-7 lg:pt-0">
              <div className="tooltip-container">
                <div className="flex flex-col">
                  {provisionData.map((item, index) => (
                    <div className="flex gap-4 pt-2" key={item.id}>
                      <div
                        className={`square w-2 h-2 mt-3`}
                        style={{
                          backgroundColor: getColor(item.id),
                          borderRadius: "2px",
                        }}
                      ></div>
                      <p className="mt-1 flex gap-2">
                        <span className="text-[#9397BB] font-semibold">
                          {item.label} -
                        </span>
                        <span className="font-semibold">AED {item.value} </span>
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default FinancialPlanningCard;

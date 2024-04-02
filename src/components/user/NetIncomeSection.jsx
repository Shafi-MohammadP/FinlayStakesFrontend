import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import arrowUp from "../../assets/up-arrow-green.svg";
import arrowDown from "../../assets/arrow-down.svg";
// import { PieChart } from "react-minimal-pie-chart";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import Chart from "react-apexcharts";
import { Doughnut, Pie } from "react-chartjs-2";
import { faL } from "@fortawesome/free-solid-svg-icons";
ChartJS.register(Tooltip, Title, ArcElement, Legend);
const incomeStaticData = [
  { label: "Interest", value: "0.00", id: 1 },
  { label: "Income from Property", value: "0.00", id: 2 },
  { label: "Bonus", value: "0.00", id: 3 },
  { label: "Bank Returns", value: "0.00", id: 4 },
  { label: "Salary", value: "0.00", id: 5 },
];
const expenseStaticData = [
  { label: "Utility Bill", value: "0.00", id: 1 },
  { label: "Rent", value: "0.00", id: 2 },
  { label: "Medical", value: "0.00", id: 3 },
  { label: "Loan", value: "0.00", id: 4 },
  { label: "Shopping", value: "0.00", id: 5 },
  { label: "Leisure", value: "0.00", id: 6 },
];
const expFirstRowData = expenseStaticData.slice(0, 3);
const expSecondRowData = expenseStaticData.slice(3);
const incFirstRowData = incomeStaticData.slice(0, 3);
const incSecondRowData = incomeStaticData.slice(3);
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
const incomeData = {
  datasets: [
    {
      data: [30, 20, 20, 50, 50],
      backgroundColor: ["Green", "Blue", "Cyan", "Red", "Yellow"],
    },
  ],
  labels: [
    "Interest",
    "Bank Returns",
    "Income from Property",
    "Salary",
    "Bonus",
  ],
  options: {
    legend: {
      display: false,
    },
  },
};
const expenseData = {
  datasets: [
    {
      data: [30, 20, 20, 50, 50, 20],
      backgroundColor: ["Green", "Blue", "Cyan", "Red", "Yellow", "purple"],
    },
  ],
  labels: ["Utility Bill", "Loan", "Rent", "Shopping", "Medical", "Leisure"],
  options: {
    legend: {
      display: false,
    },
  },
};
function NetIncomeSection() {
  return (
    <div className="w-full rounded">
      {" "}
      <Card className="rounded" style={{ borderRadius: "16px" }}>
        <div className="flex justify-between px-5 mt-6">
          <p className="font-bold">NET INCOME</p>
          <select className="shadow-md border-[1px] hover:cursor-pointer rounded-md pl-5 pr-5 h-10">
            <option value="ThisYear">This Year</option>
          </select>
        </div>
        <CardContent>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/2 lg:w-1/3 px-2 pl-11 lg:pl-2 pt-6">
              <div className="w-36 h-36 pt-[-13%]">
                <Doughnut
                  data={incomeData}
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

            <div className="w-full md:w-1/2 lg:w-2/3 py-6 md:ml-[-70px]">
              <div className="flex flex-col sm:px-28 lg:px-0">
                <div className="flex">
                  <strong className="ml-3 lg:ml-[-19px]">Income</strong>
                </div>
                {/* Render first row */}
                <div className="flex flex-wrap gap-5 md:gap-28 py-1">
                  {incFirstRowData.map((item, index) => (
                    <div className="px-11  lg:px-1" key={index}>
                      <div className="flex">
                        <div
                          className={`mr-2 ml-[-16px] mt-2 w-2 h-2 rounded`}
                          style={{ backgroundColor: getColor(item.id) }}
                        ></div>
                        <span>{item.label}</span>
                      </div>
                      <div className="flex gap-16 w-36 ">
                        <div className="flex gap-1">
                          <p className="font-semibold">AED</p>
                          <p className="font-semibold"> {item.value}</p>
                        </div>

                        <div className="flex gap-1">
                          <img
                            src={item.id % 2 === 0 ? arrowDown : arrowUp}
                            alt="Arrow Up"
                            className="w-4 h-4 ml-2 mt-1"
                          />
                          <h3 className="font-bold">0.0%</h3>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Render second row */}
                <div className="flex flex-wrap gap-5 md:gap-28">
                  {incSecondRowData.map((item, index) => (
                    <div className="px-11  lg:px-1" key={index}>
                      <div className="flex">
                        <div
                          className={`mr-2 ml-[-16px] mt-2 w-2 h-2 rounded`}
                          style={{ backgroundColor: getColor(item.id) }}
                        ></div>
                        <span>{item.label}</span>
                      </div>
                      <div className="flex gap-16 w-36 ">
                        <div className="flex gap-1">
                          <p className="font-semibold">AED</p>
                          <p className="font-semibold"> {item.value}</p>
                        </div>

                        <div className="flex gap-1">
                          <img
                            src={item.id % 2 === 0 ? arrowDown : arrowUp}
                            alt="Arrow Up"
                            className="w-4 h-4 ml-2 mt-1"
                          />
                          <h3 className="font-bold">0.0%</h3>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6" />
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/2 lg:w-1/3 px-2 pl-11 lg:pl-0 pt-6">
              <div className="w-36 h-36 pt-[-13%]">
                <Doughnut
                  data={expenseData}
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

            <div className="w-full md:w-1/2 lg:w-2/3 py-6 md:ml-[-70px]">
              <div className="flex flex-col sm:px-28 lg:px-0">
                <div className="flex">
                  <strong className="ml-3 lg:ml-[-19px]">Expense</strong>
                </div>
                {/* Render first row */}
                <div className="flex flex-wrap gap-5 md:gap-28 py-1">
                  {expFirstRowData.map((item, index) => (
                    <div className="px-11  lg:px-1" key={index}>
                      <div className="flex">
                        <div
                          className={`mr-2 ml-[-16px] mt-2 w-2 h-2 rounded`}
                          style={{ backgroundColor: getColor(item.id) }}
                        ></div>
                        <span>{item.label}</span>
                      </div>
                      <div className="flex gap-16 w-36 ">
                        <div className="flex gap-1">
                          <p className="font-semibold">AED</p>
                          <p className="font-semibold"> {item.value}</p>
                        </div>

                        <div className="flex gap-1">
                          <img
                            src={item.id % 2 === 0 ? arrowDown : arrowUp}
                            alt="Arrow Up"
                            className="w-4 h-4 ml-2 mt-1"
                          />
                          <h3 className="font-bold">0.0%</h3>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Render second row */}
                <div className="flex flex-wrap gap-5 md:gap-28">
                  {expSecondRowData.map((item, index) => (
                    <div className="px-11  lg:px-1" key={index}>
                      <div className="flex">
                        <div
                          className={`mr-2 ml-[-16px] mt-2 w-2 h-2 rounded`}
                          style={{ backgroundColor: getColor(item.id) }}
                        ></div>
                        <span>{item.label}</span>
                      </div>
                      <div className="flex justify-between gap-11 w-36">
                        <span className="font-bold"> AED {item.value}</span>
                        <img
                          src={item.id % 2 === 0 ? arrowDown : arrowUp}
                          alt="Arrow Up"
                          className="w-4 h-4 ml-2 mt-1"
                        />
                      </div>
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

export default NetIncomeSection;

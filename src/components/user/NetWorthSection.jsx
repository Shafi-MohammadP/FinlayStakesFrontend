import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import arrowUp from "../../assets/up-arrow-green.svg";
import arrowDown from "../../assets/arrow-down.svg";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(Tooltip, Title, ArcElement, Legend);
const assetStaticData = [
  { label: "Cash in Hand & Bank", value: "0.00", id: 1 },
  { label: "Shares / Equities", value: "0.00", id: 2 },
  { label: "Others", value: "0.00", id: 3 },
  { label: "Property value", value: "0.00", id: 4 },
  { label: "Business Assets", value: "0.00", id: 5 },
];
const liabilityStaticData = [
  { label: "Bank loans", value: "0.00", id: 1 },
  { label: "Mortgages", value: "0.00", id: 2 },
  { label: "Hand loans", value: "0.00", id: 3 },
  { label: "Credit card outstanding", value: "0.00", id: 4 },
  { label: "Auto loans", value: "0.00", id: 5 },
];
const liabilityFirstRow = liabilityStaticData.slice(0, 3);
const liabilitySecondRow = liabilityStaticData.slice(3);
const AssetFirstRow = assetStaticData.slice(0, 3);
const AssetSecondRow = assetStaticData.slice(3);
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
const AssetData = {
  datasets: [
    {
      data: [30, 20, 20, 50, 50],
      backgroundColor: ["Green", "Blue", "Cyan", "Red", "Yellow"],
    },
  ],
  labels: [
    "Cash in Hand & Bank",
    "Property Value",
    "Shares / Equities",
    "Business Assets",
    "Others",
  ],
  options: {
    legend: {
      display: false,
    },
  },
};
const liabilityData = {
  datasets: [
    {
      data: [30, 20, 20, 50, 50],
      backgroundColor: ["Green", "Blue", "Cyan", "Red", "Yellow"],
    },
  ],
  labels: [
    "Bank Loan",
    "Credit Card outstanding",
    "Mortgage",
    "Auto Loans",
    "hand Loans",
  ],
  options: {
    legend: {
      display: false,
    },
  },
};
function NetWorthSection() {
  return (
    <div className="w-full rounded">
      {" "}
      <Card className="rounded" style={{ borderRadius: "16px" }}>
        <div className="flex justify-between px-5 mt-6">
          <p className="font-bold">NET WORTH</p>
          <select className="shadow-md border-[1px] hover:cursor-pointer rounded-md pl-5 pr-5 h-10">
            <option value="ThisYear">This Year</option>
          </select>
        </div>
        <CardContent>
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 lg:w-1/3 px-2 pl-9 pt-6">
              <div className="w-36 h-36 pt-[-13%]">
                <Doughnut
                  data={AssetData}
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

            <div className="w-full md:w-1/2 lg:w-2/3 py-6 md:ml-[-40px]">
              <div className="flex flex-col sm:px-28 lg:px-0">
                <div className="flex">
                  <strong className="ml-3 lg:ml-[-19px]">Asset</strong>
                </div>
                {/* Render first row */}
                <div className="flex flex-wrap gap-5 md:gap-28 py-1">
                  {AssetFirstRow.map((item, index) => (
                    <div className="px-11  lg:px-1 md:w-44" key={index}>
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
                <div className="flex flex-wrap md:gap-28 py-3">
                  {AssetSecondRow.map((item, index) => (
                    <div className="px-11 lg:px-1 md:w-44" key={index}>
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
                  data={liabilityData}
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
                  <strong className="ml-3 lg:ml-[-19px]">Liability</strong>
                </div>
                {/* Render first row */}
                <div className="flex flex-wrap gap-5 md:gap-28 py-1">
                  {liabilityFirstRow.map((item, index) => (
                    <div className="px-11  lg:px-1 md:w-44" key={index}>
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
                <div className="flex flex-wrap mt-3 gap-5 md:gap-28">
                  {liabilitySecondRow.map((item, index) => (
                    <div className="px-11  lg:px-1 md:w-44" key={index}>
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
        </CardContent>
      </Card>
    </div>
  );
}

export default NetWorthSection;

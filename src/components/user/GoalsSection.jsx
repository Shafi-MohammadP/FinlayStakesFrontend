import { Card } from "@material-tailwind/react";
import { CardContent } from "@mui/material";
import React from "react";

function GoalsSection() {
  return (
    <div className="w-full rounded">
      <Card className="rounded" style={{ borderRadius: "16px" }}>
        <div className="flex justify-between px-9 mt-6">
          <p className="font-bold">GOALS</p>
        </div>
        <CardContent className="flex flex-wrap justify-center sm:justify-between">
          <div className="p-4 w-full sm:w-auto mb-4 sm:mb-0">
            <div className="flex flex-wrap justify-center sm:justify-start">
              <div className="w-64 h-36 border border-[#DEDFEE] rounded-lg ">
                <div className="flex flex-col justify-start p-3">
                  <strong>Children's Education</strong>
                  <p className="pt-11">Budget</p>
                  <strong className="font-bold text-2xl">AED 0</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 w-full sm:w-auto mb-4 sm:mb-0">
            <div className="flex flex-wrap justify-center sm:justify-start">
              <div className="w-64 h-36 border border-[#DEDFEE] rounded-lg ">
                <div className="flex flex-col justify-start p-3">
                  <strong>Children's Education</strong>
                  <p className="pt-11">Budget</p>
                  <strong className="font-bold text-2xl">AED 0</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 w-full sm:w-auto mb-4 sm:mb-0">
            <div className="flex flex-wrap justify-center sm:justify-start">
              <div className="w-64 h-36 border border-[#DEDFEE] rounded-lg ">
                <div className="flex flex-col justify-start p-3">
                  <strong>Years left for University</strong>
                  <p className="pt-5 md:pt-11">Budget</p>
                  <strong className="font-bold text-2xl">0 Years</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 w-full sm:w-auto mb-4 sm:mb-0">
            <div className="flex flex-wrap justify-center sm:justify-start">
              <div className="w-64 h-36 border border-[#DEDFEE] rounded-lg ">
                <div className="flex flex-col justify-start p-3">
                  <strong>Where would you like to retire?</strong>
                  <p className="mt-5">Budget</p>
                  <strong className="font-bold text-2xl">-</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 w-full sm:w-auto mb-4 sm:mb-0">
            <div className="flex flex-wrap justify-center sm:justify-start">
              <div className="w-64 h-36 border border-[#DEDFEE] rounded-lg ">
                <div className="flex flex-col justify-start p-3">
                  <strong>Income required after retirement?</strong>
                  <p className="mt-5">Budget</p>
                  <strong className="font-bold text-2xl">AED 0</strong>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 w-full sm:w-auto mb-4 sm:mb-0">
            <div className="flex flex-wrap justify-center sm:justify-start">
              <div className="w-64 h-36 border border-[#DEDFEE] rounded-lg ">
                <div className="flex flex-col justify-start p-3">
                  <strong>Annual income for family incase of death</strong>
                  <p className="mt-2 md:mt-5">Budget</p>
                  <strong className="font-bold text-2xl">AED 0</strong>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 w-full sm:w-auto mb-4 sm:mb-0">
            <div className="flex flex-wrap justify-center sm:justify-start">
              <div className="w-64 h-36 border border-[#DEDFEE] rounded-lg ">
                <div className="flex flex-col justify-start p-3">
                  <strong>
                    Annual income for family incase of critical illness
                  </strong>
                  <p className="mt-2 md:mt-5">Budget</p>
                  <strong className="font-bold text-2xl">AED 0</strong>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 w-full sm:w-auto mb-4 sm:mb-0">
            <div className="flex flex-wrap justify-center sm:justify-start">
              <div className="w-64 h-36 border border-[#DEDFEE] rounded-lg ">
                <div className="flex flex-col justify-start p-3">
                  <strong>Annual income for family incase of disabilit</strong>
                  <p className="mt-2 md:mt-5">Budget</p>
                  <strong className="font-bold text-2xl">AED 0</strong>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default GoalsSection;

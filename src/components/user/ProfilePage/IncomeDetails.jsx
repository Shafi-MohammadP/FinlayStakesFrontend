import React, { useState } from "react";

function IncomeDetails() {
  return (
    <div className="p-3 md:p-0 w-full">
      <div className="flex flex-col gap-7">
        <div className="">
          <h3 className=" font-bold text-2xl">Income Details</h3>
        </div>
        <div className="">
          <h4 className="font-semibold">Saving Details</h4>
        </div>
      </div>
      <div className="flex flex-col justify-center sm:flex-row 2xl:pr-28 xl:pr-20 lg:pr-16 pr-5 2xl:gap-10 xl:gap-10 lg:gap-10 gap-5 pt-5">
        <div className="w-full">
          <label className="font-bold">Interest</label>
          <div className="flex">
            <span className="mt-3 h-12 currency inline-block text-2xl px-5 py-2 border border-gray-300 border-t-[1px] border-l-[1px] border-b-[1px] bg-white rounded-tr-none rounded-br-none rounded-tl-md rounded-bl-md">
              $
            </span>
            <input
              id="amount"
              name="amount"
              placeholder="Interest"
              type="number"
              maxlength="15"
              className="h-12 border-t-[1px] border-r-[1px] border-b-[1px] mt-3 border-[#DEDFEE] outline-none pl-5 flex-1 shadow-sm rounded-tr-md rounded-br-md rounded-bl-none"
            />
          </div>
        </div>
        <div className="w-full">
          <label className="font-bold">Bank Returns</label>
          <div className="flex">
            <span className="mt-3 h-12 currency inline-block text-2xl px-5 py-2 border border-gray-300 border-t-[1px] border-l-[1px] border-b-[1px] bg-white rounded-tr-none rounded-br-none rounded-tl-md rounded-bl-md">
              $
            </span>
            <input
              id="amount"
              name="amount"
              placeholder="Bank Returns"
              type="number"
              maxlength="15"
              className="h-12 border-t-[1px] border-r-[1px] border-b-[1px] mt-3 border-[#DEDFEE] outline-none pl-5 flex-1 shadow-sm rounded-tr-md rounded-br-md rounded-bl-none"
            />
          </div>
        </div>
      </div>
      <br />
      <div className="flex flex-col justify-start sm:flex-row 2xl:pr-28 xl:pr-20 lg:pr-16 pr-5 2xl:gap-10 xl:gap-10 lg:gap-10 gap-5">
        <div className="w-full md:w-[48%]">
          <label className="font-bold">Income from Property</label>
          <div className="flex">
            <span className="mt-3 h-12 currency inline-block text-2xl px-5 py-2 border border-gray-300 border-t-[1px] border-l-[1px] border-b-[1px] bg-white rounded-tr-none rounded-br-none rounded-tl-md rounded-bl-md">
              $
            </span>
            <input
              id="amount"
              name="amount"
              placeholder="Income from Property"
              type="number"
              maxlength="15"
              className="h-12 border-t-[1px] border-r-[1px] border-b-[1px] mt-3 border-[#DEDFEE] outline-none pl-5 flex-1 shadow-sm rounded-tr-md rounded-br-md rounded-bl-none"
            />
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="flex">
        <h4 className="font-semibold">Non Saving Details</h4>
      </div>
      <div className="flex flex-col justify-center sm:flex-row 2xl:pr-28 xl:pr-20 lg:pr-16 pr-5 2xl:gap-10 xl:gap-10 lg:gap-10 gap-5 pt-5">
        <div className="w-full">
          <label className="font-bold">Salary</label>
          <div className="flex">
            <span className="mt-3 h-12 currency inline-block text-2xl px-5 py-2 border border-gray-300 border-t-[1px] border-l-[1px] border-b-[1px] bg-white rounded-tr-none rounded-br-none rounded-tl-md rounded-bl-md">
              $
            </span>
            <input
              id="amount"
              name="amount"
              placeholder="Salary"
              type="number"
              maxlength="15"
              className="h-12 border-t-[1px] border-r-[1px] border-b-[1px] mt-3 border-[#DEDFEE] outline-none pl-5 flex-1 shadow-sm rounded-tr-md rounded-br-md rounded-bl-none"
            />
          </div>
        </div>
        <div className="w-full">
          <label className="font-bold">Bonus</label>
          <div className="flex">
            <span className="mt-3 h-12 currency inline-block text-2xl px-5 py-2 border border-gray-300 border-t-[1px] border-l-[1px] border-b-[1px] bg-white rounded-tr-none rounded-br-none rounded-tl-md rounded-bl-md">
              $
            </span>
            <input
              id="amount"
              name="amount"
              placeholder="Bonus"
              type="number"
              maxlength="15"
              className="h-12 border-t-[1px] border-r-[1px] border-b-[1px] mt-3 border-[#DEDFEE] outline-none pl-5 flex-1 shadow-sm rounded-tr-md rounded-br-md rounded-bl-none"
            />
          </div>
        </div>
      </div>
      <br />
      <div className="flex flex-col justify-start sm:flex-row 2xl:pr-28 xl:pr-20 lg:pr-16 pr-5 2xl:gap-10 xl:gap-10 lg:gap-10 gap-5">
        <div className="w-full md:w-[48%]">
          <label className="font-bold">Total Income</label>
          <div className="flex">
            <span className="mt-3 h-12 currency inline-block text-2xl px-5 py-2 border border-gray-300 border-t-[1px] border-l-[1px] border-b-[1px] bg-white rounded-tr-none rounded-br-none rounded-tl-md rounded-bl-md">
              $
            </span>
            <input
              id="amount"
              name="amount"
              placeholder="Total Income"
              type="number"
              maxlength="15"
              className="h-12 border-t-[1px] border-r-[1px] border-b-[1px] mt-3 border-[#DEDFEE] outline-none pl-5 flex-1 shadow-sm rounded-tr-md rounded-br-md rounded-bl-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default IncomeDetails;

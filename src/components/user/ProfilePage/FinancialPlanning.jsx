import React from "react";

function FinancialPlanning() {
  return (
    <div className="p-3 md:p-0 w-full">
      <div className="flex flex-col gap-7">
        <div className="">
          <h3 className=" font-bold text-2xl">Financial Planning Shortfall</h3>
        </div>
      </div>
      <br />
      <div className="flex flex-col justify-center sm:flex-row 2xl:pr-28 xl:pr-20 lg:pr-16 pr-5 2xl:gap-10 xl:gap-10 lg:gap-10 gap-5 pt-5">
        <div className="w-full">
          <label className="font-bold">Children’s Education</label>
          <div className="flex">
            <span className="mt-3 h-12 currency inline-block text-2xl px-5 py-2 border border-gray-300 border-t-[1px] border-l-[1px] border-b-[1px] bg-white rounded-tr-none rounded-br-none rounded-tl-md rounded-bl-md">
              $
            </span>
            <input
              id="amount"
              name="amount"
              placeholder="Children’s Education"
              type="number"
              maxlength="15"
              className="h-12 border-t-[1px] border-r-[1px] border-b-[1px] mt-3 border-[#DEDFEE] outline-none pl-5 flex-1 shadow-sm rounded-tr-md rounded-br-md rounded-bl-none"
            />
          </div>
        </div>
        <div className="w-full">
          <label className="font-bold">Retirement</label>
          <div className="flex">
            <span className="mt-3 h-12 currency inline-block text-2xl px-5 py-2 border border-gray-300 border-t-[1px] border-l-[1px] border-b-[1px] bg-white rounded-tr-none rounded-br-none rounded-tl-md rounded-bl-md">
              $
            </span>
            <input
              id="amount"
              name="amount"
              placeholder="Retirement"
              type="number"
              maxlength="15"
              className="h-12 border-t-[1px] border-r-[1px] border-b-[1px] mt-3 border-[#DEDFEE] outline-none pl-5 flex-1 shadow-sm rounded-tr-md rounded-br-md rounded-bl-none"
            />
          </div>
        </div>
      </div>
      <br />
      <div className="flex flex-col justify-center sm:flex-row 2xl:pr-28 xl:pr-20 lg:pr-16 pr-5 2xl:gap-10 xl:gap-10 lg:gap-10 gap-5 pt-5">
        <div className="w-full">
          <label className="font-bold">Life Insurance</label>
          <div className="flex">
            <span className="mt-3 h-12 currency inline-block text-2xl px-5 py-2 border border-gray-300 border-t-[1px] border-l-[1px] border-b-[1px] bg-white rounded-tr-none rounded-br-none rounded-tl-md rounded-bl-md">
              $
            </span>
            <input
              id="amount"
              name="amount"
              placeholder="Life Insurance"
              type="text"
              maxlength="15"
              className="h-12 border-t-[1px] border-r-[1px] border-b-[1px] mt-3 border-[#DEDFEE] outline-none pl-5 flex-1 shadow-sm rounded-tr-md rounded-br-md rounded-bl-none"
            />
          </div>
        </div>
        <div className="w-full">
          <label className="font-bold">Critical Illness</label>
          <div className="flex">
            <span className="mt-3 h-12 currency inline-block text-2xl px-5 py-2 border border-gray-300 border-t-[1px] border-l-[1px] border-b-[1px] bg-white rounded-tr-none rounded-br-none rounded-tl-md rounded-bl-md">
              $
            </span>
            <input
              id="amount"
              name="amount"
              placeholder="Critical Illness"
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
          <label className="font-bold">Disability</label>
          <div className="flex">
            <span className="mt-3 h-12 currency inline-block text-2xl px-5 py-2 border border-gray-300 border-t-[1px] border-l-[1px] border-b-[1px] bg-white rounded-tr-none rounded-br-none rounded-tl-md rounded-bl-md">
              $
            </span>
            <input
              id="amount"
              name="amount"
              placeholder="Disability"
              type="text"
              maxlength="15"
              className="h-12 border-t-[1px] border-r-[1px] border-b-[1px] mt-3 border-[#DEDFEE] outline-none pl-5 flex-1 shadow-sm rounded-tr-md rounded-br-md rounded-bl-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FinancialPlanning;

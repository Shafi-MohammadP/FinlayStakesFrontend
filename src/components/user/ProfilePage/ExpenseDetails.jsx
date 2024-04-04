import React from "react";

function ExpenseDetails() {
  return (
    <div className="p-3 md:p-0 w-full">
      <div className="flex flex-col gap-7">
        <div className="">
          <h3 className=" font-bold text-2xl">Expense Details</h3>
        </div>
        <div className="">
          <h4 className="font-semibold">Fixed Expenses</h4>
        </div>
      </div>
      <div className="flex flex-col justify-center sm:flex-row 2xl:pr-28 xl:pr-20 lg:pr-16 pr-5 2xl:gap-10 xl:gap-10 lg:gap-10 gap-5 pt-5">
        <div className="w-full">
          <label className="font-bold">Utility Bill</label>
          <div className="flex">
            <span className="mt-3 h-12 currency inline-block text-2xl px-5 py-2 border border-gray-300 border-t-[1px] border-l-[1px] border-b-[1px] bg-white rounded-tr-none rounded-br-none rounded-tl-md rounded-bl-md">
              $
            </span>
            <input
              id="amount"
              name="amount"
              placeholder="Utility Bill"
              type="number"
              maxlength="15"
              className="h-12 border-t-[1px] border-r-[1px] border-b-[1px] mt-3 border-[#DEDFEE] outline-none pl-5 flex-1 shadow-sm rounded-tr-md rounded-br-md rounded-bl-none"
            />
          </div>
        </div>
        <div className="w-full">
          <label className="font-bold">Loan</label>
          <div className="flex">
            <span className="mt-3 h-12 currency inline-block text-2xl px-5 py-2 border border-gray-300 border-t-[1px] border-l-[1px] border-b-[1px] bg-white rounded-tr-none rounded-br-none rounded-tl-md rounded-bl-md">
              $
            </span>
            <input
              id="amount"
              name="amount"
              placeholder="Loan"
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
          <label className="font-bold">Rent</label>
          <div className="flex">
            <span className="mt-3 h-12 currency inline-block text-2xl px-5 py-2 border border-gray-300 border-t-[1px] border-l-[1px] border-b-[1px] bg-white rounded-tr-none rounded-br-none rounded-tl-md rounded-bl-md">
              $
            </span>
            <input
              id="amount"
              name="amount"
              placeholder="Rent"
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
        <h4 className="font-semibold">Other Expenses</h4>
      </div>
      <div className="flex flex-col justify-center sm:flex-row 2xl:pr-28 xl:pr-20 lg:pr-16 pr-5 2xl:gap-10 xl:gap-10 lg:gap-10 gap-5 pt-5">
        <div className="w-full">
          <label className="font-bold">Shopping Expense</label>
          <div className="flex">
            <span className="mt-3 h-12 currency inline-block text-2xl px-5 py-2 border border-gray-300 border-t-[1px] border-l-[1px] border-b-[1px] bg-white rounded-tr-none rounded-br-none rounded-tl-md rounded-bl-md">
              $
            </span>
            <input
              id="amount"
              name="amount"
              placeholder="Shopping Expense"
              type="number"
              maxlength="15"
              className="h-12 border-t-[1px] border-r-[1px] border-b-[1px] mt-3 border-[#DEDFEE] outline-none pl-5 flex-1 shadow-sm rounded-tr-md rounded-br-md rounded-bl-none"
            />
          </div>
        </div>
        <div className="w-full">
          <label className="font-bold">Medical Expense</label>
          <div className="flex">
            <span className="mt-3 h-12 currency inline-block text-2xl px-5 py-2 border border-gray-300 border-t-[1px] border-l-[1px] border-b-[1px] bg-white rounded-tr-none rounded-br-none rounded-tl-md rounded-bl-md">
              $
            </span>
            <input
              id="amount"
              name="amount"
              placeholder="Medical Expense"
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
          <label className="font-bold">Leisure Expense</label>
          <div className="flex">
            <span className="mt-3 h-12 currency inline-block text-2xl px-5 py-2 border border-gray-300 border-t-[1px] border-l-[1px] border-b-[1px] bg-white rounded-tr-none rounded-br-none rounded-tl-md rounded-bl-md">
              $
            </span>
            <input
              id="amount"
              name="amount"
              placeholder="Leisure Expense"
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
          <label className="font-bold">Total Expense</label>
          <div className="flex">
            <span className="mt-3 h-12 currency inline-block text-2xl px-5 py-2 border border-gray-300 border-t-[1px] border-l-[1px] border-b-[1px] bg-white rounded-tr-none rounded-br-none rounded-tl-md rounded-bl-md">
              $
            </span>
            <input
              id="amount"
              name="amount"
              placeholder="Total Expense"
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

export default ExpenseDetails;

import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

function ExistingPolicies() {
  return (
    <div className="p-3 md:p-0 w-full">
      <div className="flex flex-col gap-7">
        <div className="">
          <h3 className=" font-bold text-2xl">Existing Policies</h3>
        </div>
        <div className="">
          <h4 className="font-semibold" style={{ fontSize: "20px" }}>
            Children’s Education
          </h4>
        </div>
      </div>
      <div className="flex flex-col justify-center sm:flex-row 2xl:pr-28 xl:pr-20 lg:pr-16 pr-5 2xl:gap-10 xl:gap-10 lg:gap-10 gap-5 pt-5">
        <div className="w-full">
          <label className="font-bold">Policy No</label>
          <input
            type="text"
            placeholder="Policy No"
            className="h-[3.5rem] border-[1px] mt-3 border-[#DEDFEE] outline-none   pl-5 w-full shadow-sm rounded-md "
          />
        </div>
        <div className="w-full">
          <label className="font-bold">Date of Commencement</label>
          <div className="flex mt-3">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                className="bg-white w-full"
                format="DD/MM/YYYY"
              ></DatePicker>
            </LocalizationProvider>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center sm:flex-row 2xl:pr-28 xl:pr-20 lg:pr-16 pr-5 2xl:gap-10 xl:gap-10 lg:gap-10 gap-5 pt-5">
        <div className="w-full">
          <label className="font-bold">Annual Premium</label>
          <div className="flex">
            <span className="mt-3 h-12 currency inline-block text-2xl px-5 py-2 border border-gray-300 border-t-[1px] border-l-[1px] border-b-[1px] bg-white rounded-tr-none rounded-br-none rounded-tl-md rounded-bl-md">
              $
            </span>
            <input
              id="amount"
              name="amount"
              placeholder="Annual Premium"
              type="text"
              maxlength="15"
              className="h-12 border-t-[1px] border-r-[1px] border-b-[1px] mt-3 border-[#DEDFEE] outline-none pl-5 flex-1 shadow-sm rounded-tr-md rounded-br-md rounded-bl-none"
            />
          </div>
        </div>
        <div className="w-full">
          <div className="w-full">
            <label className="font-bold">Term</label>
            <input
              type="text"
              placeholder="Term"
              className="h-12 border-[1px] mt-3 border-[#DEDFEE] outline-none   pl-5 w-full shadow-sm rounded-md "
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center sm:flex-row 2xl:pr-28 xl:pr-20 lg:pr-16 pr-5 2xl:gap-10 xl:gap-10 lg:gap-10 gap-5 pt-5">
        <div className="w-full">
          <label className="font-bold">Date of Maturity</label>
          <div className="flex mt-3">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                className="bg-white w-full"
                format="DD/MM/YYYY"
              ></DatePicker>
            </LocalizationProvider>
          </div>
        </div>
        <div className="w-full">
          <label className="font-bold">Benefits</label>
          <input
            type="text"
            placeholder="Policy No"
            className="h-[3.5rem] border-[1px] mt-3 border-[#DEDFEE] outline-none   pl-5 w-full shadow-sm rounded-md "
          />
        </div>
      </div>
      <br />
      <br />
      <div className="flex">
        <h2 className="font-semibold" style={{ fontSize: "20px" }}>
          Life Insurance
        </h2>
      </div>
      <div className="flex flex-col justify-center sm:flex-row 2xl:pr-28 xl:pr-20 lg:pr-16 pr-5 2xl:gap-10 xl:gap-10 lg:gap-10 gap-5 pt-5">
        <div className="w-full">
          <label className="font-bold">Policy No</label>
          <input
            type="text"
            placeholder="Policy No"
            className="h-[3.5rem] border-[1px] mt-3 border-[#DEDFEE] outline-none   pl-5 w-full shadow-sm rounded-md "
          />
        </div>
        <div className="w-full">
          <label className="font-bold">Date of Commencement</label>
          <div className="flex mt-3">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                className="bg-white w-full"
                format="DD/MM/YYYY"
              ></DatePicker>
            </LocalizationProvider>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center sm:flex-row 2xl:pr-28 xl:pr-20 lg:pr-16 pr-5 2xl:gap-10 xl:gap-10 lg:gap-10 gap-5 pt-5">
        <div className="w-full">
          <label className="font-bold">Annual Premium</label>
          <div className="flex">
            <span className="mt-3 h-12 currency inline-block text-2xl px-5 py-2 border border-gray-300 border-t-[1px] border-l-[1px] border-b-[1px] bg-white rounded-tr-none rounded-br-none rounded-tl-md rounded-bl-md">
              $
            </span>
            <input
              id="amount"
              name="amount"
              placeholder="Annual Premium"
              type="text"
              maxlength="15"
              className="h-12 border-t-[1px] border-r-[1px] border-b-[1px] mt-3 border-[#DEDFEE] outline-none pl-5 flex-1 shadow-sm rounded-tr-md rounded-br-md rounded-bl-none"
            />
          </div>
        </div>
        <div className="w-full">
          <div className="w-full">
            <label className="font-bold">Term</label>
            <input
              type="text"
              placeholder="Term"
              className="h-12 border-[1px] mt-3 border-[#DEDFEE] outline-none   pl-5 w-full shadow-sm rounded-md "
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center sm:flex-row 2xl:pr-28 xl:pr-20 lg:pr-16 pr-5 2xl:gap-10 xl:gap-10 lg:gap-10 gap-5 pt-5">
        <div className="w-full">
          <label className="font-bold">Date of Maturity</label>
          <div className="flex mt-3">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                className="bg-white w-full"
                format="DD/MM/YYYY"
              ></DatePicker>
            </LocalizationProvider>
          </div>
        </div>
        <div className="w-full">
          <label className="font-bold">Benefits</label>
          <input
            type="text"
            placeholder="Policy No"
            className="h-[3.5rem] border-[1px] mt-3 border-[#DEDFEE] outline-none   pl-5 w-full shadow-sm rounded-md "
          />
        </div>
      </div>
      <br />
      <br />
      <div className="flex">
        <h2 className="font-semibold" style={{ fontSize: "20px" }}>
          Retirement
        </h2>
      </div>
      <div className="flex flex-col justify-center sm:flex-row 2xl:pr-28 xl:pr-20 lg:pr-16 pr-5 2xl:gap-10 xl:gap-10 lg:gap-10 gap-5 pt-5">
        <div className="w-full">
          <label className="font-bold">Policy No</label>
          <input
            type="text"
            placeholder="Policy No"
            className="h-[3.5rem] border-[1px] mt-3 border-[#DEDFEE] outline-none   pl-5 w-full shadow-sm rounded-md "
          />
        </div>
        <div className="w-full">
          <label className="font-bold">Date of Commencement</label>
          <div className="flex mt-3">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                className="bg-white w-full"
                format="DD/MM/YYYY"
              ></DatePicker>
            </LocalizationProvider>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center sm:flex-row 2xl:pr-28 xl:pr-20 lg:pr-16 pr-5 2xl:gap-10 xl:gap-10 lg:gap-10 gap-5 pt-5">
        <div className="w-full">
          <label className="font-bold">Annual Premium</label>
          <div className="flex">
            <span className="mt-3 h-12 currency inline-block text-2xl px-5 py-2 border border-gray-300 border-t-[1px] border-l-[1px] border-b-[1px] bg-white rounded-tr-none rounded-br-none rounded-tl-md rounded-bl-md">
              $
            </span>
            <input
              id="amount"
              name="amount"
              placeholder="Annual Premium"
              type="text"
              maxlength="15"
              className="h-12 border-t-[1px] border-r-[1px] border-b-[1px] mt-3 border-[#DEDFEE] outline-none pl-5 flex-1 shadow-sm rounded-tr-md rounded-br-md rounded-bl-none"
            />
          </div>
        </div>
        <div className="w-full">
          <div className="w-full">
            <label className="font-bold">Term</label>
            <input
              type="text"
              placeholder="Term"
              className="h-12 border-[1px] mt-3 border-[#DEDFEE] outline-none   pl-5 w-full shadow-sm rounded-md "
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center sm:flex-row 2xl:pr-28 xl:pr-20 lg:pr-16 pr-5 2xl:gap-10 xl:gap-10 lg:gap-10 gap-5 pt-5">
        <div className="w-full">
          <label className="font-bold">Date of Maturity</label>
          <div className="flex mt-3">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                className="bg-white w-full"
                format="DD/MM/YYYY"
              ></DatePicker>
            </LocalizationProvider>
          </div>
        </div>
        <div className="w-full">
          <label className="font-bold">Benefits</label>
          <input
            type="text"
            placeholder="Policy No"
            className="h-[3.5rem] border-[1px] mt-3 border-[#DEDFEE] outline-none   pl-5 w-full shadow-sm rounded-md "
          />
        </div>
      </div>
    </div>
  );
}

export default ExistingPolicies;

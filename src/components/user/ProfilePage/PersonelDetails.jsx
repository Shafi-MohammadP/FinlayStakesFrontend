import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

import { Countries } from "../../../helpers/AllCountries";
import ReactFlagsSelect from "react-flags-select";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Input } from "reactstrap";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";
function PersonalDetails() {
  const [country, setCountry] = useState("");
  const [smoker, setSmoker] = useState("");

  const selectCountry = (val) => {
    setCountry(val);
  };

  const handleRadioChange = (event) => {
    setSmoker(event.target.value);
  };
  return (
    <div className="p-5 w-full">
      <div className="">
        <h3 className=" font-bold text-2xl">Personal Details</h3>
      </div>
      <div className="flex flex-col justify-center sm:flex-row 2xl:pr-28 xl:pr-20 lg:pr-16 pr-5 2xl:gap-10 xl:gap-10 lg:gap-10 gap-5 pt-5">
        <div className="w-full">
          <label className="font-bold">Name</label>
          <input
            type="text"
            placeholder="First Name"
            className="h-12 border-[1px] mt-3 border-[#DEDFEE] outline-none   pl-5 w-full shadow-sm rounded-md "
          />
        </div>
        <div className="w-full">
          <label className="font-bold">Date of Birth</label>
          <input
            type="text"
            placeholder="Date of Birth"
            className="h-12 border-[1px] mt-3 border-[#DEDFEE] outline-none   pl-5 w-full shadow-sm rounded-md "
          />
        </div>
      </div>
      <br />
      <div className="flex flex-col justify-center sm:flex-row 2xl:pr-28 xl:pr-20 lg:pr-16 pr-5 2xl:gap-10 xl:gap-10 lg:gap-10 gap-5">
        <div className="w-full">
          <label className="font-bold">Age</label>
          <input
            type="text"
            placeholder="Mobile Number"
            className="h-12 border-[1px] mt-3 border-[#DEDFEE] outline-none   pl-5 w-full shadow-sm rounded-md "
          />
        </div>
        <div className="w-full">
          <label for="maritalStatus" class="" className="font-bold">
            Marital Status
          </label>
          <select
            id="maritalStatus"
            class="h-12 border-[1px] mt-3 border-[#DEDFEE]  outline-none pl-5 w-full shadow-sm rounded-md"
          >
            <option className="text-[#DEDFEE]" value="" hidden>
              Select Marital Status
            </option>
            <option value="single">Single</option>
            <option value="married">Married</option>
          </select>
        </div>
      </div>
      <br />
      <div className="flex flex-col justify-center sm:flex-row 2xl:pr-28 xl:pr-20 lg:pr-16 pr-5 2xl:gap-10 xl:gap-10 lg:gap-10 gap-5">
        <div className="w-full">
          <label className="font-bold">Contact Number</label>
          <PhoneInput
            className="mt-3"
            country="us"
            label="Contact Number"
            placeholder="Contact Number"
            required
            inputClass="phone-input"
            dropdownStyle={{ width: "200px" }}
            buttonStyle={{
              backgroundColor: "transparent",
              border: "none",
              marginRight: "200px",
            }}
            inputProps={{
              style: {
                height: "50px",
                width: "100%",
                borderRadius: 8,
                backgroundColor: "#fff",
                color: "#212844",
                fontSize: "16px",
                padding: "20px 30px",
                paddingLeft: "48px",
                fontFamily: "Inter, sans-serif",
                lineHeight: "19.36px",
              },
            }}
          />
        </div>
        <div className="w-full">
          <label className="font-bold">Email ID</label>
          <input
            type="text"
            placeholder="Email Address"
            className="h-12 border-[1px] mt-3 border-[#DEDFEE]  outline-none   pl-5 w-full shadow-sm rounded-md "
          />
        </div>
      </div>
      <br />
      <div className="flex flex-col justify-center sm:flex-row 2xl:pr-28 xl:pr-20 lg:pr-16 pr-5 2xl:gap-10 xl:gap-10 lg:gap-10 gap-5">
        <div className="w-full">
          <label for="country" className="font-bold">
            Country of Residence
          </label>
          <CountryDropdown
            defaultOptionLabel="Country of Residence"
            classes="h-12 border-[1px] mt-3 border-[#DEDFEE] outline-none   pl-5 w-full shadow-sm rounded-md "
            value={country}
            onChange={(val) => selectCountry(val)}
          />
        </div>
        <div className="w-full">
          <label for="Country" className="font-bold">
            Nationality
          </label>
          <input
            type="text"
            placeholder="Nationality"
            className="h-12 border-[1px] mt-3 border-[#DEDFEE] outline-none   pl-5 w-full shadow-sm rounded-md "
          />
        </div>
      </div>
      <br />
      <div className="flex flex-col justify-center sm:flex-row 2xl:pr-28 xl:pr-20 lg:pr-16 pr-5 2xl:gap-10 xl:gap-10 lg:gap-10 gap-5">
        <div className="w-full">
          <label className="font-bold">Physical Residential Address</label>
          <input
            type="text"
            placeholder="Physical Residential Address"
            className="h-12 border-[1px] mt-3 border-[#DEDFEE] outline-none   pl-5 w-full shadow-sm rounded-md "
          />
        </div>
        <div className="w-full">
          <label className="font-bold">Country of Birth</label>
          <input
            type="text"
            placeholder="Country of Birth"
            className="h-12 border-[1px] mt-3 border-[#DEDFEE]  outline-none   pl-5 w-full shadow-sm rounded-md "
          />
        </div>
      </div>
      <br />
      <div className="flex flex-col justify-center sm:flex-row 2xl:pr-28 xl:pr-20 lg:pr-16 pr-5 2xl:gap-10 xl:gap-10 lg:gap-10 gap-5">
        <div className="w-full">
          <label className="font-bold">Medical History</label>
          <textarea
            type="text"
            placeholder="Type here....."
            className="h-28 border-[1px] mt-3 border-[#DEDFEE] outline-none   pl-5 w-full shadow-sm rounded-md "
          />
        </div>
        <div className="w-full">
          <label className="font-bold">Smoker</label>
          <div className="pt-3">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="smoker"
                value="yes"
                checked={smoker === "yes"} // Check if 'yes' is selected
                onChange={handleRadioChange}
              />
              <span className="ml-2">Yes</span>
            </label>
            <label className="inline-flex items-center ml-6">
              <input
                type="radio"
                name="smoker"
                value="no"
                checked={smoker === "no"} // Check if 'no' is selected
                onChange={handleRadioChange}
              />
              <span className="ml-2">No</span>
            </label>
          </div>
        </div>
      </div>
      <br />

      {/* <div className="flex gap-5 text-center">
        <div
        //   onClick={() => setButtonManage(!buttonManage)}
        //   className={`border-[1px] hover:cursor-pointer rounded-2xl flex ${
        //     buttonManage
        //       ? "justify-end bg-[#6560F0] border-[#6560F0]"
        //       : "justify-start bg-[#9397BB] border-[#9397BB]"
        //   }  w-16 p-1 shadow-md  bg-opacity-15 h-8`}
        >
          <div
          // className={` rounded-full w-6 h-6 shadow-md ${
          //   buttonManage ? "bg-[#6560F0]" : "bg-[#9397BB]"
          // }`}
          ></div>
        </div>
      </div>
      <br />
      <div className="flex gap-5 sm:justify-end pr-32">
        <Button className="bg-transparent text-[#9397BB] border-[#9397BB] border-[1px] ">
          Cancel
        </Button>
        <Button
        //   onClick={() => setActiveTab(2)}
        //   className="bg-[#6560F0] text-[#ffffff]  "
        >
          Next
        </Button>
      </div> */}
      <br />
    </div>
  );
}

export default PersonalDetails;

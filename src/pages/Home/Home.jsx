import React from "react";
import Login from "../Login/Login";
import editIcon from "../../assets/tabler_edit.svg";
import exportIcon from "../../assets/ph_export.svg";
import dashboardImage from "../../assets/bg_image.svg";
import coverImage from "../../assets/dashboard_image.svg";
import DashboardCards from "../../components/user/DashboardCards";
import NetIncomeSection from "../../components/user/NetIncomeSection";
import NetWorthSection from "../../components/user/NetWorthSection";
import GoalsSection from "../../components/user/GoalsSection";
import ExistingProvisionCard from "../../components/user/ExistingProvisionCard";
import FinancialPlanningCard from "../../components/user/FinancialPlanningCard";
import ExistingPolicies from "../../components/user/ExistingPolicies";

function Home() {
  return (
    <div class="bg-[#F2F1F9] h-[calc(100vh-5.2rem)] md:min-h-[calc(100vh-5.2rem)]  overflow-y-auto  hidescroll w-full  p-5">
      <div class="">
        <div class="">
          <div class="flex justify-between items-center">
            <strong class="text-left">Personal Financial Review</strong>
            <div class="flex items-center space-x-2">
              <button class="w-24 h-9 text-base text-gray-600 border border-[#F1F2F9] rounded bg-white flex justify-center items-center">
                <img src={editIcon} alt="" class="h-5 w-5 mr-1" />
                <span class="flex-shrink-0">Edit</span>
              </button>
              <button class="w-28 h-9 text-base text-gray-600 border border-[#F1F2F9] rounded bg-white flex justify-center items-center">
                <span class="flex-shrink-0">Export</span>
                <img src={exportIcon} alt="" class="h-5 w-5 ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-[#F2F1F9]  py-2">
        <nav class="text-sm text-gray-500" aria-label="Breadcrumb">
          <ol class="list-none p-0 inline-flex">
            <li class="flex items-center">
              <a
                href="#"
                class="text-[#250C77] hover:text-gray-700 font-semibold"
              >
                Finlay Stakes
              </a>
              <svg
                class="fill-current w-3 h-3 mx-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 16.707l6-6a1 1 0 0 0 0-1.414l-6-6a1 1 0 1 0-1.414 1.414L12.586 10 7.88 14.707a1 1 0 0 0 1.414 1.414z" />
              </svg>
            </li>
            <li class="flex items-center">
              <a href="#" class="text-gray-500 hover:text-gray-700">
                Dashboard
              </a>
            </li>
          </ol>
        </nav>
      </div>
      <div class="w-full  h-auto py-2">
        <img src={coverImage} alt="" className="w-full h-full " />
      </div>
      <div className="py-4">
        <DashboardCards />
      </div>
      <div className="flex py-4">
        <NetIncomeSection />
      </div>
      <div className="flex py-4">
        <NetWorthSection />
      </div>
      <div className="flex">
        <GoalsSection />
      </div>
      <div className="flex flex-col lg:flex-row gap-5 py-3">
        <ExistingProvisionCard />
        <FinancialPlanningCard />
      </div>
      <div className="flex">
        <ExistingPolicies />
      </div>
    </div>
  );
}

export default Home;

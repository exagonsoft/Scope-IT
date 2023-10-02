"use client";
import DashboardCard from "@UI/dashboard_card/dashboard_card";
import "./dashboard_styles.css";
import {
  AiOutlineLike,
  AiOutlineSchedule,
  AiOutlineLaptop,
  AiOutlineImport,
  AiOutlineUsergroupAdd,
} from "react-icons/ai";
import DashboardChard from "@charts/dashboard_chard/dashboardChard";
import DashBoardPae from "@charts/dashboard_pae_chart/dashboardPae";

const DashBoardForm = () => {
  return (
    <div className="flex w-full justify-between items-start gap-10 pt-6 sm:flex-row flex-col">
      {/* Left Sight */}
      <div className="flex flex-col sm:w-[65%] w-full justify-start gap-4">
        <div className="general-container w-full">
          <div className="flex justify-between w-full items-center">
            <span className="flex uppercase">Dashboard</span>
            <div className="dash-select">
              <select>
                <option value="day">1 Day</option>
                <option value="week">1 Week</option>
                <option value="month">1 Month</option>
                <option value="year">1 Year</option>
              </select>
            </div>
          </div>
          <div className="sm:flex grid grid-cols-2 justify-between sm:gap-4 gap-2 w-full">
            <DashboardCard
              title="New"
              value={5}
              link="/site/estimations"
              icon={<AiOutlineImport />}
            />
            <DashboardCard
              title="In Progress"
              value={3}
              link="/site/estimations"
              icon={<AiOutlineLaptop />}
            />
            <DashboardCard
              title="In Review"
              value={7}
              link="/site/estimations"
              icon={<AiOutlineSchedule />}
            />
            <DashboardCard
              title="Won"
              value={5}
              link="/site/estimations"
              icon={<AiOutlineLike />}
            />
          </div>
        </div>
        <div className="general-container">
          <div className="flex flex-col gap-2 w-full">
            <span className=" uppercase text-bold">Statistics Overview</span>
            <div className="dash-chart-header-box">
              <div className="">
                <span className="dash-chart-new ">New Projects</span>
              </div>
              <div className="">
                <span className="dash-chart-progress">
                  Estimation In Progress
                </span>
              </div>
              <div className="">
                <span className="dash-chart-review">Under Client Review</span>
              </div>
              <div className="">
                <span className="dash-chart-won">Won Overall</span>
              </div>
            </div>
          </div>
          <DashboardChard _new={5} in_progress={3} in_review={7} won={5} />
        </div>
      </div>
      {/* Right Sight */}
      <div className="sm:w-[35%] w-full justify-start items-center general-container">
        <div className="flex flex-col gap-8 w-full">
          <div className="flex justify-center items-center gap-2 text-bold uppercase">
            <AiOutlineUsergroupAdd className=" " />
            <span className="">Developers Overview</span>
          </div>
          <div className="dash-chart-header-box !flex-col !justify-center !items-center !gap-2">
            <span className=" text-gray-400">Developers Involve</span>
            <span className=" text-bold text-4xl">10</span>
          </div>
          <div className="flex flex-col gap-3 justify-center items-center w-full">
            <div className="flex justify-between items-center w-full dash-dev-item-effect">
              <span className=" text-gray-400">Total Visits</span>
              <span className="">456</span>
            </div>
            <div className="flex justify-between items-center w-full dash-dev-item-effect">
              <span className=" text-gray-400">Media per Project</span>
              <span className="">2</span>
            </div>
            <div className="flex justify-between items-center w-full dash-dev-item-effect">
              <span className=" text-gray-400">Maximum per Project</span>
              <span className="">5</span>
            </div>
            <div className="flex justify-between items-center w-full dash-dev-item-effect">
              <span className=" text-gray-400">Minimum per Project</span>
              <span className="">1</span>
            </div>
            <div className="flex justify-between items-center w-full dash-dev-item-effect">
              <span className=" text-gray-400">Media Response Time (Days)</span>
              <span className="">3</span>
            </div>
            <div className="flex justify-between items-center w-full dash-dev-item-effect">
              <span className=" text-gray-400">Faster Response Time (Hours)</span>
              <span className="">6</span>
            </div>
          </div>
          <div className="flex flex-col w-full gap-1">
            <span className=" uppercase text-bold">Split by Projects</span>
            <DashBoardPae />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoardForm;

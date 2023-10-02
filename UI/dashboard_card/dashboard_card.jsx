import Link from "next/link";
import React from "react";
import './dashboardcardstyles.css'

const DashboardCard = (props) => {
  const { title, icon, value, link } = props;
  return (
    <Link href={link} className="flex flex-col gap-4 dash-card-pad rounded-md dash-card-background text-white w-full object-hover-effect dark:bg-white">
      <div className="flex justify-between items-center">
        <span className="dash-card-title">{title}</span>
        <span className="dash-card-icon">{icon}</span>
      </div>
      <div className="dash-card-value h-[4rem] flex justify-center items-center"><span className="">{value}</span></div>
      <div className="flex flex-col">
        <hr className="dash-card-line" />
      </div>
    </Link>
  );
};

export default DashboardCard;

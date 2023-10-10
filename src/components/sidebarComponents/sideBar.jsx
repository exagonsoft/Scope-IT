import React, { useContext, useState } from 'react'
import './sidebarstyles.css'
import { Context } from '../../contexts/mainContext'
import { Link, useNavigate } from 'react-router-dom'
import Logo from "../../assets/logo.svg"
import Profile from "../../assets/images/profile.svg"
import { sideBarLinks } from '../../constants/constants'


const SideBar = ({ isWideScreen }) => {
const {logout, user, isActive, setIsActive} = useContext(Context)
const navigate = useNavigate();

const [toggleMenu, setToggleMenu] = useState(false);

const activateItem = (target) => {
  setIsActive(target);
};

const navigateTo = (route) => {
  navigate(route);
};

  return (
    <div className="nav-area">
      <nav className={`${isWideScreen ? "nav-bar" : "nav-bar-mobile"} `}>
        {/* Desktop Navigation */}
        {isWideScreen ? (
          <div className="flex">
            <div className="flex gap-3 md:gap-5 items-center">
              <button
                type="button"
                className="outline_btn"
                onClick={logout}
              >
                Sign Out
              </button>
              <Link to="/profile">
                <img
                  onClick={() => activateItem("none")}
                  src={
                    user?.picture
                      ? user?.picture
                      : Profile
                  }
                  alt="profile"
                  width={60}
                  height={60}
                  className="rounded-full"
                />
              </Link>
            </div>
          </div>
        ) : (
          <div className="flex justify-between w-full items-center relative">
            <img
              src={Logo}
              alt="SPT Logo"
              className=" w-[60px] h-[60px]"
            />
            <div className="flex cursor-pointer">
              <img
                src={
                  user.image
                    ? user.image
                    : Profile
                }
                alt="profile"
                width={50}
                height={50}
                className="rounded-full"
                onClick={() => setToggleMenu((prev) => !prev)}
              />
              {toggleMenu && (
                <div className="dropdown !bg-gray-200 opacity-85 !text-white drop-shadow-xl shadow-xl max-w-[60px]">
                  <Link
                    to="/dashboard"
                    className="dropdown_link"
                    onClick={() => {
                      setToggleMenu(false);
                      activateItem("none");
                    }}
                  >
                    Home Page
                  </Link>
                  <Link
                    to="/projects"
                    className="dropdown_link"
                    onClick={() => {
                      setToggleMenu(false);
                      activateItem("/projects");
                    }}
                  >
                    Projects
                  </Link>
                  <Link
                    to="/estimations"
                    className="dropdown_link"
                    onClick={() => {
                      setToggleMenu(false);
                      activateItem("/estimations");
                    }}
                  >
                    Estimations
                  </Link>
                  <Link
                    to="/features"
                    className="dropdown_link"
                    onClick={() => {
                      setToggleMenu(false);
                      activateItem("/features");
                    }}
                  >
                    Features
                  </Link>
                  <Link
                    to="/statistics"
                    className="dropdown_link"
                    onClick={() => {
                      setToggleMenu(false);
                      activateItem("/statistics");
                    }}
                  >
                    Statistics
                  </Link>
                  <Link
                    to="/settings"
                    className="dropdown_link"
                    onClick={() => {
                      setToggleMenu(false);
                      activateItem("/settings");
                    }}
                  >
                    Settings
                  </Link>
                  <Link
                    to="/profile"
                    className="dropdown_link"
                    onClick={() => {
                      setToggleMenu(false); activateItem("none");
                    }}
                  >
                    My Profile
                  </Link>
                  <button
                    type="button"
                    className="mt-5 w-full black_btn"
                    onClick={() => {
                      setToggleMenu(false);
                      logout();
                    }}
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Mobile Navigation */}
      </nav>

      {isWideScreen ? (
        <div className="side-bar fixed left-0 flex flex-col justify-start  items-center pt-3 h-full nav-background z-20">
          <div
            onClick={() => {
              navigateTo("/dashboard");
              activateItem("none");
            }}
            className="flex gap-2 flex-center flex-col mb-6 cursor-pointer"
          >
            <img
              src={Logo}
              alt="Scope-IT Logo"
              width={50}
              height={50}
              className="object-contain"
            />
            <p className="logo_text">Scope-IT</p>
          </div>
          <div >
            <ul className="side-nav flex flex-col gap-6 pt-6">
              {sideBarLinks.map((_link, index) => (
                <li
                  key={index}
                  onClick={() => {
                    navigateTo(_link.link);
                    activateItem(_link.link);
                  }}
                  className={isActive == _link.link ? "active" : ""}
                >
                  <div className={`flex items-center gap-1 side-link-item`}>
                    <span className="icon">{_link.icon}</span>
                    <span className="side-nav-text">{_link.title}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}

export default SideBar

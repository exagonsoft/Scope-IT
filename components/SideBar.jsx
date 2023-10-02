"use client";
import { sideBarLinks } from "@constants/constants";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { signOut } from "next-auth/react";
import Link from "next/link";

const SideBar = ({ isWideScreen, session, presentNav }) => {
  const router = useRouter();
  const [isActive, setIsActive] = useState("none");
  const [toggleMenu, setToggleMenu] = useState(false);

  const activateItem = (target) => {
    console.log("Item Clicked: " + target);
    setIsActive(target);
  };

  const navigate = (route) => {
    router.push(route);
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
                onClick={() =>
                  signOut({ callbackUrl: "http://localhost:3000/" })
                }
              >
                Sign Out
              </button>
              <Link href="/site/profile">
                <img
                  onClick={() => activateItem("none")}
                  src={
                    session?.user?.image
                      ? session?.user?.image
                      : "/assets/images/profile.svg"
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
            <img src="/assets/logo.svg" alt="SPT Logo" className=" w-[60px] h-[60px]" />
            <div className="flex cursor-pointer">
              <img
                src={
                  session?.user.image
                    ? session?.user.image
                    : "/assets/images/profile.svg"
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
                    href="/site/estimations"
                    className="dropdown_link"
                    onClick={() => {
                      setToggleMenu(false);
                      activateItem("none");
                    }}
                  >
                    New Estimation
                  </Link>
                  <Link
                    href="/site/features"
                    className="dropdown_link"
                    onClick={() => {
                      setToggleMenu(false);
                      activateItem("none");
                    }}
                  >
                    Features
                  </Link>
                  <Link
                    href="/site/profile"
                    className="dropdown_link"
                    onClick={() => {
                      setToggleMenu(false), activateItem("none");
                    }}
                  >
                    My Profile
                  </Link>
                  <button
                    type="button"
                    className="mt-5 w-full black_btn"
                    onClick={() => {
                      setToggleMenu(false);
                      signOut({ callbackUrl: "http://localhost:3000/" });
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
        <div className="side-bar absolute left-0 flex flex-col justify-start  items-center pt-3 h-full nav-background z-20">
          <div
            onClick={() => {
              navigate("/site/dashboard");
              activateItem("none");
            }}
            className="flex gap-2 flex-center flex-col mb-6 cursor-pointer"
          >
            <Image
              src="/assets/logo.svg"
              alt="Scope-IT Logo"
              width={50}
              height={50}
              className="object-contain"
            />
            <p className="logo_text">Scope-IT</p>
          </div>
          <div className="">
            <ul className="side-nav flex flex-col gap-8 pt-6">
              {sideBarLinks.map((_link, index) => (
                <li
                  key={index}
                  onClick={() => {
                    navigate(_link.link);
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
  );
};

export default SideBar;

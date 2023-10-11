import React, { useEffect, useRef, useState } from "react";
import "./layoutstyles.css";
import { Outlet } from "react-router-dom";
import SideBar from "../../components/sidebarComponents/sideBar";


const LayoutContainer = () => {
  const [isWideScreen, setIsWideScreen] = useState(false);
  const [presentNav, setPresentNav] = useState(false);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setPresentNav(false);
    }, 500);

    const scrollContainer = scrollContainerRef.current;

    if (scrollContainer) {
      const handleScroll = () => {
        const { scrollTop, scrollHeight, clientHeight } = scrollContainer;
        // Calculate scroll distance
        const distance = scrollHeight - clientHeight - scrollTop;
        console.log(distance);
        setPresentNav(distance < 360);
      };

      scrollContainer.addEventListener("scroll", handleScroll);

      return () => {
        scrollContainer.removeEventListener("scroll", handleScroll);
      };
    }
  }, [scrollContainerRef.current]);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 650);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div className="sm:w-[100px] w-0 min-w-[100px]">
        <SideBar isWideScreen={isWideScreen} presentNav={presentNav} />
      </div>
      <div
        ref={scrollContainerRef}
        className={`flex justify-center items-start content-renderer containner h-full`}
      >
        <Outlet />
      </div>
    </>
  );
};

export default LayoutContainer;

"use client";

import { Provider } from "@components/Provider";
import SideBar from "@components/SideBar";
import { useEffect, useRef, useState } from "react";
import { useSession } from "next-auth/react";

const MainContainner = ({ children }) => {
  const [isWideScreen, setIsWideScreen] = useState(false);
  const { data: session } = useSession();
  const [presentNav, setPresentNav] = useState(false)
  const scrollContainerRef = useRef(null);

  
  
  useEffect(() => {

    setTimeout(() => {
      setPresentNav(false)
    }, 500);

    const scrollContainer = scrollContainerRef.current;

    if(scrollContainer){

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
      <Provider>
        {session?.user ? (
          <>
            <div className="w-[10%]">
              <SideBar isWideScreen={isWideScreen} session={session} presentNav={presentNav}/>
            </div>
            <div ref={scrollContainerRef}
              className={`flex justify-center items-start content-renderer containner h-full`}
            >
              {children}
            </div>
          </>
        ) : (
          children
        )}
      </Provider>
    </>
  );
};

export default MainContainner;

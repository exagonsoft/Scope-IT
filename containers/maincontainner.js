'use client'
import { useSession } from "next-auth/react";
import SideBar from '@components/SideBar'
import { useEffect, useState } from "react";

const MainContainner = ({ children }) => {
    const { data: session } = useSession();
    const [isWideScreen, setIsWideScreen] = useState(false);

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
            {isWideScreen && session?.user ? <div className="w-[10%]"><SideBar /></div> : <></>}
            <div className={`flex ${session?.user ? 'w-[90%]' : 'w-full'} justify-center items-start content-renderer containner`}>{children}</div>
        </>
    )
}

export default MainContainner

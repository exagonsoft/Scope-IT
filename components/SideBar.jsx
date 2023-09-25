'use client'
import { sideBarLinks } from "@constants/constants";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SideBar = () => {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);

  const toggleNAvMenu = () => {
    if (isActive) {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  };

  const navigate = (route) => {
    router.push(route);
  }

  return (
    <div className="side-bar absolute left-0 flex flex-col justify-start pt-32 items-center pl-3 h-full nav-background">
      <ul className="side-nav flex flex-col gap-6 pt-6" onClick={toggleNAvMenu}>
        {sideBarLinks.map((_link, index) => (
          <li key={index} onClick={() => navigate(_link.link)} className={({ isActive }) =>
            isActive ? "active cursor-pointer" : "cursor-pointer"
          }><div className="flex items-center gap-1 side-link-item">
              <span className="icon">{_link.icon}</span><span className="side-nav-text">{_link.title}</span></div></li>
        ))}
      </ul>
    </div>
  )
}

export default SideBar

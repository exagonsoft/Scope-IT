'use client'
import { sideBarLinks } from "@constants/constants";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SideBar = () => {
  const router = useRouter();
  const [isActive, setIsActive] = useState('none');

  const activateItem = (target) => {
    console.log("Item Clicked: " + target);
    setIsActive(target)
  };

  const navigate = (route) => {
    router.push(route);
  }

  return (
    <div className="side-bar absolute left-0 flex flex-col justify-start  items-center pt-3 h-full nav-background z-20">
      <div onClick={() => {navigate('/dashboard'); activateItem('none')}} className="flex gap-2 flex-center flex-col mb-6 cursor-pointer">
        <Image src="/assets/logo.svg" alt="Scope-IT Logo" width={50} height={50} className="object-contain" />
        <p className="logo_text">Scope-IT</p>
      </div>
      <ul className="side-nav flex flex-col gap-8 pt-6">
        {sideBarLinks.map((_link, index) => (
          <li key={index} onClick={() => {navigate(_link.link); activateItem(_link.link)}} className={isActive == _link.link ? 'active' : ''}><div className={`flex items-center gap-1 side-link-item`}>
              <span className="icon">{_link.icon}</span><span className="side-nav-text">{_link.title}</span></div></li>
        ))}
      </ul>
    </div>
  )
}

export default SideBar

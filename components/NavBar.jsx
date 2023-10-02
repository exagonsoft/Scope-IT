'use client';
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";

const NavBar = () => {
  const { data: session } = useSession();
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <nav className={`flex items-center  w-full pt-2 flex-end pr-8 m-2 mt-0 top-0 bg-transparent h-[90px] fixed z-[15]`}>
      {/* Desktop Navigation */}
      <div className="sm:flex hidden">
        {session?.user ? <div className="flex gap-3 md:gap-5">
          <button type="button" className="outline_btn" onClick={() => signOut()}>Sign Out</button>
          <Link href="/site/profile" >
            <img src={session?.user.image ? session?.user.image : '/assets/images/profile.svg'} alt="profile" width={60} height={60} className="rounded-full" />
          </Link>
        </div> : <>
          {
           <button type="button" onClick={() => { signIn('credentials') }} className="black_btn">Sign In</button>
          }</>}
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex relative">
        {session?.user ? <div className="flex cursor-pointer">
          <img src={session?.user.image ? session?.user.image : '/assets/images/profile.svg'} alt="profile" width={50} height={50} className="rounded-full" onClick={() => setToggleMenu((prev) => !prev)} />
          {toggleMenu && (
            <div className="dropdown">
              <Link href="/site/estimations" className="dropdown_link" onClick={() => setToggleMenu(false)}>New Estimation</Link>
              <Link href="/site/features" className="dropdown_link" onClick={() => setToggleMenu(false)}>Features</Link>
              <Link href="/site/profile" className="dropdown_link" onClick={() => setToggleMenu(false)}>My Profile</Link>
              <button type="button" className="mt-5 w-full black_btn" onClick={() => { setToggleMenu(false); signOut() }}>Sign Out</button>
            </div>
          )}
        </div> : <>
          {
            <button type="button" onClick={() => { signIn('credentials') }} className="black_btn">Sign In</button>
          }</>}
      </div>
    </nav>
  )
}

export default NavBar

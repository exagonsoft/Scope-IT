'use client';

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const NavBar = () => {
  const {data: session} = useSession();
  const [providers, setProviders] = useState(null)
  const [toggleMenu, setToggleMenu] = useState(false)

  useEffect(() => {
    const SetProviders = async () => {
      const _response = await getProviders();
      setProviders(_response);
    }

    SetProviders();
  }, [])
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image src="/assets/logo.svg" alt="Scope-IT Logo" width={50} height={50} className="object-contain" />
        <p className="logo_text">Scope-IT</p>
      </Link>
      {/* Desktop Navigation */}
      <div className="sm:flex hidden">
        {session?.user ? <div className="flex gap-3 md:gap-5">
          <Link href="/new_estimation" className="black_btn">New Estimation</Link>
          <button type="button" className="outline_btn" onClick={signOut}>Sign Out</button>
          <Link href="/profile" >
            <img src={session?.user.image} alt="profile" width={37} height={37} className="rounded-full" />
          </Link>
        </div> : <>
          {
            providers && Object.values(providers).map((_provider) => (
              <button type="button" key={_provider.name} onClick={() => { signIn(_provider.id) }} className="black_btn">Sign In</button>
            ))
          }</>}
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex relative">
        {session?.user ? <div className="flex cursor-pointer">
          <img src={session?.user.image} alt="profile" width={37} height={37} className="rounded-full" onClick={() => setToggleMenu((prev) => !prev)} />
          {toggleMenu && (
            <div className="dropdown">
              <Link href="/profile" className="dropdown_link" onClick={() => setToggleMenu(false)}>My Profile</Link>
              <Link href="/new_estimation" className="dropdown_link" onClick={() => setToggleMenu(false)}>New Estimation</Link>
              <button type="button" className="mt-5 w-full black_btn" onClick={() => { setToggleMenu(false); signOut() }}>Sign Out</button>
            </div>
          )}
        </div> : <>
          {
            providers && Object.values(providers).map((_provider) => (
              <button type="button" key={_provider.name} onClick={() => { signIn(_provider.id, {modal: true}) }} className="black_btn">Sign In</button>
            ))
          }</>}
      </div>
    </nav>
  )
}

export default NavBar

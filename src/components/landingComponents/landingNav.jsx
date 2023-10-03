import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg'

const LandingNav = () => {
  return (
    <nav className={`flex items-center w-full px-8  flex-between top-0 right-0 bg-transparent h-[90px] fixed z-[100]`}>
            <Link to='#' className="flex gap-2 flex-center items-center">
                <img src={Logo} alt="Scope-IT Logo" width={50} height={50} className="object-contain" />
                <p className="logo_text dark:text-white text-gray-950">Scope-IT</p>
            </Link>
            <Link to='/auth/signin' className='black_btn'>Sign In</Link>
        </nav>
  )
}

export default LandingNav

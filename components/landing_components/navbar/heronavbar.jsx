import { signIn } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const HeroNavbar = () => {
    return (
        <nav className={`flex items-center w-full pt-2  flex-between  m-2 mt-0 top-0 bg-transparent h-[90px] sticky z-[15]`}>
            <Link href='/' className="flex mt-2 gap-2 flex-center">
                <Image src="/assets/logo.svg" alt="Scope-IT Logo" width={50} height={50} className="object-contain" />
                <p className="logo_text dark:text-white text-gray-950">Scope-IT</p>
            </Link>
            {/* Desktop Navigation */}
            <div className="">
                <Link href='/auth/signin' className='black_btn mr-4'>Sign In</Link>
            </div>
        </nav>
    )
}

export default HeroNavbar

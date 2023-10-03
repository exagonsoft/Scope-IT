import React from 'react'
import './errorstyles.css'
import Robot from '../../assets/images/questionrobot.png'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className='flex  sm:flex-row flex-col w-full h-screen justify-center items-center sm:gap-12 gap-8'>
      <img src={Robot} alt="question Pet" className='w-[150px] error-image flex self-center'/>
      <div className="flex gap-8 flex-col justify-center items-center">
        <h1 className="text-2xl font-bold uppercase">Resourse not Found</h1>
        <Link to={'/'} className='black_btn'>Back to Site</Link>
      </div>
    </div>
  )
}

export default ErrorPage

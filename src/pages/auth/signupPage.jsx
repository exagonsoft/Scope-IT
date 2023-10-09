import React from 'react'
import './authstyles.css'
import SignUpForm from '../../components/authComponents/signupForm'

const SignUpPage = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <SignUpForm />
    </div>
  )
}

export default SignUpPage

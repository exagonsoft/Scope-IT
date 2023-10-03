import React from 'react'
import './authstyles.css'
import SignInForm from '../../components/authComponents/signinForm'

const SignInPage = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <SignInForm />
    </div>
  )
}

export default SignInPage

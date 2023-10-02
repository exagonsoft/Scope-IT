import SignInForm from '@components/auth_components/signinForm'
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from '@app/api/auth/[...nextauth]/route';

const SignIn = async() => {
  const session = await getServerSession(authOptions)

  if(session){
    redirect("/site/dashboard")
  }
  
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <SignInForm />
    </div>
  )
}

export default SignIn

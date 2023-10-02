import SignUpForm from '@components/auth_components/signupForm'
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from '@app/api/auth/[...nextauth]/route';

const SignUp = async () => {
  const session = await getServerSession(authOptions)

  if(session){
    redirect("/site/dashboard")
  }
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <SignUpForm />
    </div>
  )
}

export default SignUp

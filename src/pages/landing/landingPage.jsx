import React, { useContext, useEffect } from "react";
import LandingNav from "../../components/landingComponents/landingNav";
import LandingHero from "../../components/landingComponents/landingHero";
import TestingComponent from "../../components/landingComponents/testingComponent";
import { useNavigate } from "react-router-dom";
import { Context } from "../../contexts/mainContext";
import { useCookies } from "react-cookie";

const LandingPage = () => {
  const { user } = useContext(Context)
  const navigate = useNavigate()
  const [cookies, setCookies] = useCookies(["userData"]);

  useEffect(() => {
    // Redirect to auth/signin if user is null
    const storedUser = cookies.userData;
    if (storedUser) {
      navigate('/dashboard');
    }
  }, []);

  return (
    <div className="flex flex-col w-full h-screen overflow-y-auto overflow-x-hidden sm:px-20 px-8">
      <LandingNav />
      <div className=" sm:pt-36 pt-28">
        <LandingHero />
      </div>
    </div>
  );
};

export default LandingPage;

import React, { useContext, useEffect } from "react";
import LandingNav from "../../components/landingComponents/landingNav";
import LandingHero from "../../components/landingComponents/landingHero";
import TestingComponent from "../../components/landingComponents/testingComponent";
import { useNavigate } from "react-router-dom";
import { Context } from "../../contexts/mainContext";

const LandingPage = () => {
  const { user } = useContext(Context)
  const navigate = useNavigate()

  useEffect(() => {
    // Redirect to auth/signin if user is null
    if (user) {
      console.log(user);
      navigate('/dashboard');
    }
  }, [user]);

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

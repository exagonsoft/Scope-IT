import React, { useContext, useEffect } from "react";
import "./layoutstyles.css";
import { Context } from "../../contexts/mainContext";
import { redirect, useNavigate } from "react-router-dom";

const LayoutContainer = () => {
  const { user } = useContext(Context);
  const navigate = useNavigate()

  useEffect(() => {
    // Redirect to auth/signin if user is null
    if (!user) {
      navigate("/info/landing");
    }
  }, [user]);
  return <div>

  </div>;
};

export default LayoutContainer;

import React, { createContext, useEffect, useState } from "react";
import { Decode, Validate } from "shieldbearer";
import { config } from "../config/config";
export const Context = createContext(null);

const langList = {
  en: "English",
  de: "German",
};

export const MainContext = ({ children }) => {
  const [currentLang, setCurrentLang] = useState("English");
  const [user, setUser] = useState({});
  const [isActive, setIsActive] = useState("none");
  const [isLoading, setIsLoading] =  useState(false)

  const setLanguage = (lang) => {
    setCurrentLang(langList[lang]);
  };

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser({});
  };

  const validateUser = async () => {
    // Check if user data is stored in localStorage
    //const storedUser = sessionStorage.getItem('user');

    if (user.token) {
      if(!Validate(user.token, config.SECRET))
      {
        logout();
        return;
      }
    }
  };

  const activateItem = () => {
    let _activeItem = "none";
    const _currentURL = window.location.href;
    if (_currentURL.includes("/projects")) {
      _activeItem = "/projects";
    }
    if (_currentURL.includes("/estimations")) {
      _activeItem = "/estimations";
    }
    if (_currentURL.includes("/features")) {
      _activeItem = "/features";
    }
    if (_currentURL.includes("/statistics")) {
      _activeItem = "/statistics";
    }
    if (_currentURL.includes("/settings")) {
      _activeItem = "/settings";
    }

    setIsActive(_activeItem);
  };

  useEffect(() => {
    validateUser();
  }, []);

  useEffect(() => {
    activateItem();

    // Add event listener for popstate event
    window.addEventListener("popstate", activateItem);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("popstate", activateItem);
    };
  }, []);

  return (
    <Context.Provider
      value={{
        currentLang,
        setLanguage,
        user,
        login,
        logout,
        isActive,
        setIsActive,
        isLoading,
        setIsLoading
      }}
    >
      {children}
    </Context.Provider>
  );
};

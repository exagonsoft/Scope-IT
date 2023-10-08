import React, { createContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
export const Context = createContext(null);

const langList = {
  en: "English",
  de: "German",
};

export const MainContext = ({ children }) => {
  const [currentLang, setCurrentLang] = useState("English");
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [cookies, setCookies] = useCookies(["userData"]);
  const [isActive, setIsActive] = useState("none");

  const setLanguage = (lang) => {
    setCurrentLang(langList[lang]);
  };

  const login = (userData) => {
    setCookies("userData", userData, { path: "*", SameSite: "None" });
    //sessionStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
    setIsLoggedIn(true);
    setTimeout(() => {
      setIsLoading(true);
      setIsLoading(false);
    }, 3000);
  };

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
    setCookies("userData", null, { path: "*", SameSite: "None" });
  };

  const validateUser = () => {
    // Check if user data is stored in localStorage
    //const storedUser = sessionStorage.getItem('user');
    const storedUser = cookies.userData;
    if (!storedUser) {
      logout();
      return;
    }
    if (storedUser == "") {
      logout();
      return;
    }
    if (storedUser == "null") {
      logout();
      return;
    }
    setIsLoading(true);
    setUser(storedUser);
    setIsLoggedIn(true);
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
    setIsLoading(false);
  }, [isLoggedIn]);

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
        isLoggedIn,
        isLoading,
        isActive,
        setIsActive,
      }}
    >
      {children}
    </Context.Provider>
  );
};

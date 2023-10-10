import React, { createContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Decode } from "shieldbearer";
import { config } from "../config/config";
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
  const [cookies, setCookies] = useCookies(["userData", "userToken"]);
  const [isActive, setIsActive] = useState("none");
  const [token, setToken] = useState(null);

  const setLanguage = (lang) => {
    setCurrentLang(langList[lang]);
  };

  const login = (userData) => {
    let _userObject = Decode(userData, config.SECRET);
    setCookies("userData", _userObject, { path: "*", SameSite: "None" });
    setCookies("userToken", userData, { path: "*", SameSite: "None" });
    setUser(userData);
    setIsLoggedIn(true);
    setTimeout(() => {
      setIsLoading(true);
      setIsLoading(false);
    }, 3000);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    setIsLoggedIn(false);
    setCookies("userData", null, { path: "*", SameSite: "None" });
    setCookies("userToken", null, { path: "*", SameSite: "None" });
  };

  const validateUser = async () => {
    // Check if user data is stored in localStorage
    //const storedUser = sessionStorage.getItem('user');
    if (!user) {
      const storedUser = await cookies.userData;
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
      let _token = await cookies.userToken;
      setToken(_token);
      setIsLoggedIn(true);
      setIsLoading(false);
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
    setIsLoading(false);
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
        token,
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

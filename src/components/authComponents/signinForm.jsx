import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { config } from "../../config/config";
import  CustomCrypto  from "crypticus";
import { Context } from "../../contexts/mainContext";

const SignInForm = () => {
  const navigate = useNavigate()
  const customCrypto = new CustomCrypto(config.SECRET)
  const userCredentialsStruct = {
    email: "",
    password: "",
  };
  const [userData, setUserData] = useState(userCredentialsStruct);
  const [error, setError] = useState("");
  const { login } = useContext(Context)

  const updateUserData = (value, target) => {
    setUserData((prevUserData) => ({ ...prevUserData, [target]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let _encodedPassword = customCrypto.encrypt(userData.password)
      userData.password = _encodedPassword
      const _res = await axios.post(config.API_URL + "auth/signin", userData)
      console.log(_res.data.token);
      if (_res.status == 403) {
        setError("Invalid Credentials");
        setTimeout(() => {
          setError("");
        }, 2000);
        return
      }
      login(_res.data.token)
      navigate("/dashboard")
      
    } catch (error) {
      console.log(error);
      setError(error.message);
      setTimeout(() => {
        setError("");
      }, 2000);
    }
  };


  return <div className="flex flex-col">
  <div className="shadow-lg p-5 flex flex-col justify-center items-center rounded-lg border-t-4 border-cyan-400 dark:bg-gray-200  bg-gray-600">
    <h1 className="text-xl my-4 font-bold dark:text-black  text-white">
      Enter Credentials
    </h1>
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
      <input
        onChange={(e) => updateUserData(e.target.value, "email")}
        type="email"
        placeholder="Your email..."
        className=""
        required
      />
      <input
        onChange={(e) => updateUserData(e.target.value, "password")}
        type="password"
        placeholder="Your password..."
        className=""
        required
      />
      <button className="w-full bg-green-600 font-bold hover:shadow-lg transition-all">
        Authenticate
      </button>
      <div className="flex justify-between items-center mt-2">
        <div className="flex items-center justify-start">
          {error && (
            <div className="bg-red-500 text-white w-fit mt-1 flex justify-center items-center py-1 px-4 rounded-md auth-fade absolute">
              {error}
            </div>
          )}
        </div>
        <div className="flex items-center justify-end">
          <Link
            to="/info/auth/signup"
            className="dark:text-black  text-white text-right"
          >
            Don't have an Account? Register
          </Link>
        </div>
      </div>
      <div className="">
        <Link
            to="/info/landing"
            className="normal_btn"
          >
            Cancel
          </Link>
        </div>
    </form>
  </div>
</div>
};

export default SignInForm;

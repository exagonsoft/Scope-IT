"use client";
import PictureUploader from "@components/PictureUploader";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import "./authstyles.css";

const SignUpForm = () => {
  const userDataStruct = {
    name: "",
    lastname: "",
    email: "",
    password: "",
    image: "",
  };
  const [userData, setUserData] = useState(userDataStruct);
  const [error, setError] = useState("");
  const router = useRouter()

  const onImageSelected = async (_newImage) => {
    setUserData((prevUserData) => ({ ...prevUserData, image: _newImage.url }));
  };

  const updateUserData = (value, target) => {
    setUserData((prevUserData) => ({ ...prevUserData, [target]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      //Check whenever the user exist
      let _resCheck = await fetch("/api/checkuser/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: userData.email }),
      });
      const { user } = await _resCheck.json();
      if (user) {
        setError("User Already Exist");
        setTimeout(() => {
          setError("");
        }, 2000);
        return;
      }

      //Create the new User
      let _res = await fetch("/api/signup/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });
      if (_res.ok) {
        let _form = e.target;
        _form.reset();
        router.push("/auth/signin");
      }
    } catch (error) {
      setError(error.message);
      setTimeout(() => {
        setError("");
      }, 2000);
    }
  };

  return (
    <div className="flex flex-col">
      <div
        className="shadow-lg p-5 flex flex-col justify-center items-center rounded-lg border-t-4 border-cyan-400 dark:bg-gray-200  bg-gray-600
    "
      >
        <h1 className="text-xl my-4 font-bold dark:text-black  text-white">
          Enter Credentials
        </h1>
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <input
            onChange={(e) => updateUserData(e.target.value, "name")}
            type="name"
            placeholder="Name"
            className=""
            required
          />
          <input
            onChange={(e) => updateUserData(e.target.value, "lastname")}
            type="name"
            placeholder="Last Name"
            className=""
            required
          />
          <input
            onChange={(e) => updateUserData(e.target.value, "email")}
            type="email"
            placeholder="Email"
            className=""
            required
          />
          <input
            onChange={(e) => updateUserData(e.target.value, "password")}
            type="password"
            placeholder="Password"
            className=""
            required
          />
          <PictureUploader image={userData.image} onChange={onImageSelected} />
          <button className="w-full bg-green-600 font-bold hover:shadow-lg transition-all">
            Register
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
                href="/auth/signin"
                className="dark:text-black  text-white text-right"
              >
                Already have an Account? LogIn
              </Link>
            </div>
          </div>
          <div className="">
            <Link
                href="/"
                className="normal_btn"
              >
                Cancel
              </Link>
            </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;

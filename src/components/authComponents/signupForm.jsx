import axios from "../../api/axios";
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PictureUploader from "../PictureUploader";
import { config } from "../../config/config";
import CustomCrypto from "crypticus";
import { Decode } from "shieldbearer";

const SignUpForm = () => {
  const navigate = useNavigate();
  const customCrypto = new CustomCrypto(config.SECRET);
  const userDataStruct = {
    name: "",
    lastname: "",
    email: "",
    password: "",
    picture: "",
    image: "",
  };
  const [userData, setUserData] = useState(userDataStruct);
  const [passwordCheck, setPasswordCheck] = useState("");
  const matchPassRef = useRef();
  const [error, setError] = useState("");
  const [formValid, setFormValid] = useState(true)

  const onImageSelected = async (_newImage) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      picture: _newImage.url,
      image: _newImage.image,
    }));
  };

  const updateUserData = (value, target) => {
    setUserData((prevUserData) => ({ ...prevUserData, [target]: value }));
  };

  const uploadImage = async (id, name) => {
    try {
      const _formData = new FormData();
      _formData.append("file", userData.image);
      _formData.append("id", id);
      let _res = await axios.post("auth/signup/upload", {
        image: userData.image,
        id: id,
        filename: `${name}.png`,
      });
    } catch (error) {
      console.log(error);
      setError("Error uploading Picture");
      setTimeout(() => {
        setError("");
      }, 2000);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      //Check whenever the user exist
      let _resCheck = await axios.get("auth/check_duplicate", {
        params: { email: userData.email },
      });
      const user = await _resCheck.data;
      if (user.exist) {
        setError("User Already Exist");
        setTimeout(() => {
          setError("");
        }, 2000);
        return;
      }

      //Create the new User
      let _hash_password = customCrypto.encrypt(userData.password);
      let _userData = {
        name: userData.name,
        lastname: userData.lastname,
        email: userData.email,
        password: _hash_password,
        picture: userData.picture,
      };
      let _res = await axios.post("auth/signup", _userData);

      if (_res.data) {
        let _decodedToken = Decode(_res.data.token, config.SECRET);
        if (userData.image) {
          await uploadImage(_decodedToken.id, _decodedToken.name);
        }

        let _form = e.target;
        _form.reset();
        navigate("/info/auth/signin");
      }
    } catch (error) {
      console.log(error);
      setError(error.message);
      setTimeout(() => {
        setError("");
      }, 2000);
    }
  };

  useEffect(() => {
    const _match = passwordCheck == userData.password;
    if(!_match){
      if(matchPassRef.current){
        setFormValid((prevFormValid) => !prevFormValid)
        matchPassRef.current.style.border = "solid 1px red"
        matchPassRef.current.style.outlineColor = "red"
      }
    }else{
      if(matchPassRef.current){
        setFormValid(true)
        matchPassRef.current.style.border = ""
        matchPassRef.current.style.outlineColor = ""
      }
    }
  }, [passwordCheck]);

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
            required
          />
          <input
            onChange={(e) => updateUserData(e.target.value, "lastname")}
            type="name"
            placeholder="Last Name"
            required
          />
          <input
            onChange={(e) => updateUserData(e.target.value, "email")}
            type="email"
            placeholder="Email"
            required
          />
          <input
            onChange={(e) => updateUserData(e.target.value, "password")}
            type="password"
            placeholder="Password"
            required
          />
          <input
            ref={matchPassRef}
            onChange={(e) => {
              setPasswordCheck(e.target.value);
            }}
            type="password"
            placeholder="Retype Password"
            required
          />
          <PictureUploader
            image={userData.picture}
            onChange={onImageSelected}
          />
          <button disabled={!formValid} className="w-full bg-green-600 font-bold hover:shadow-lg transition-all">
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
                to="/info/auth/signin"
                className="dark:text-black  text-white text-right"
              >
                Already have an Account? LogIn
              </Link>
            </div>
          </div>
          <div>
            <Link to="/info/landing" className="normal_btn">
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;

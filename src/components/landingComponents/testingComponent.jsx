import React, { useState } from "react";
import { config } from "../../config/config";
import { CustomCrypto } from "../../utils/cryptoFunctions";
import { Sign, Decode, Validate } from "../../utils/index.js";

const TestingComponent = () => {
  const [password, setPassword] = useState("");
  const [comparePassword, setComparePassword] = useState("");
  const [result, setResult] = useState("");
  let _secret = config.SECRET;
  const customCrypto = new CustomCrypto(_secret);
  const encode = () => {
    // let _encodedPassword = customCrypto.encrypt(password)
    // setResult(_encodedPassword)
    
    let _payLoad = {
      user: 12,
      email: "exagonsoft@gmail.com",
      picture: "http://localhost/uploads/picture.png",
    };
    let _signedToken = Sign(_payLoad);
    setResult(_signedToken)
  };

  const decode = () => {
    let _decodedPassword = Decode(password);
    setResult(_decodedPassword);
  };

  const compare = () => {
    let _result = customCrypto.comparePasswords(password, comparePassword);
    console.log(_result);
    setResult(_result);
  };

  return (
    <div className="flex flex-col w-full h-full">
      <div className=" flex flex-col w-[40%]">
        <div className="flex flex-col w-full">
          <input
            type="text"
            className=""
            placeholder="Password to Encode"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <input
            type="text"
            className=""
            placeholder="Password to Compare"
            onChange={(e) => {
              setComparePassword(e.target.value);
            }}
          />
        </div>
        <div className="flex justify-between w-full">
          <button className="" onClick={encode}>
            Encode
          </button>
          <button className="" onClick={decode}>
            Decode
          </button>
          <button className="" onClick={compare}>
            Compare
          </button>
        </div>
        <div className=" text-orange-900">{result}</div>
      </div>
    </div>
  );
};

export default TestingComponent;

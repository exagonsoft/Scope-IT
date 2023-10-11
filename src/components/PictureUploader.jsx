import React, { useEffect, useState } from "react";
import DefaultPicture from "../assets/images/profile.svg";

const PictureUploader = (props) => {
  const [error, setError] = useState("");

  const onImageLoad = async (e) => {
    let file = document.getElementById("mockSelector");
    file.click();
  };

  const loadingImageFile = (event) => {
    const element = event.target.files[0];
    if (element) {
      console.log(element.size);
      if (element.size > 40000) {
        setError("Max File Size 4mb");
        setTimeout(() => {
          setError("");
        }, 2000);
        return;
      }

      let _newImage = {
        image: "",
        url: "",
      };

      let image = document.createElement("img");
      image.id = "image";
      image.className = "campaign-card-image";
      image.src = URL.createObjectURL(element);

      const reader = new FileReader();
      reader.readAsDataURL(element);

      reader.onloadend = () => {
        let _url = URL.createObjectURL(element);
        _url = _url.split();
        _newImage.image = reader.result
          .replace("data:", "")
          .replace(/^.+,/, "");
        _newImage.url = URL.createObjectURL(element);

        props.onChange(_newImage);

        image.onload = function () {
          URL.revokeObjectURL(image.src); // free memory
        };
      };
    }
  };

  useEffect(() => {}, [props.image]);

  return (
    <div className="w-full p-4 bg-gray-300/40 rounded-md">
      <input
        id="mockSelector"
        type="file"
        className="hidden"
        onChange={loadingImageFile}
      />
      <div className="flex w-full justify-center items-center">
        <div className="w-full flex justify-center items-center">
          <img
            id="ImagePreview"
            src={props.image ? props.image : DefaultPicture}
            alt="User Picture"
            className="rounded-full w-[60px] h-[60px] min-w-[60px]"
          />
        </div>
        <div className="w-full flex flex-col justify-center items-center px-1">
          <button
            type="button"
            className="bg-gray-400 px-3"
            onClick={onImageLoad}
          >
            Select Picture
          </button>
          {error ? (
            <div className="flex w-full mb-[-20px] justify-center items-center">
              <span className="text-sm text-[red] text-center align-middle">
                {error}
              </span>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default PictureUploader;

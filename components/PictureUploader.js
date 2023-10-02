'use client'
import React, { useEffect } from 'react'

const PictureUploader = (props) => {

  const onImageLoad = async e => {
    console.log("Button Clicked");
    let file = document.getElementById("mockSelector")
    file.click();
  }

  const loadingImageFile = event => {
    console.log("Processing Data");
    const element = event.target.files[0];

    let image = document.createElement('img');
    image.id = 'image';
    image.className = 'campaign-card-image';
    image.src = URL.createObjectURL(element);

    const reader = new FileReader();
    reader.readAsDataURL(element);

    reader.onloadend = () => {
      let _url = URL.createObjectURL(element)
      _url = _url.split()
      let _newImage = {
        image: reader.result.replace('data:', '').replace(/^.+,/, ''),
        url: URL.createObjectURL(element),
      };

      props.onChange(_newImage);

      image.onload = function () {
        URL.revokeObjectURL(image.src); // free memory
      };
    };
  };



  useEffect(() => {
  }
    , [props.image])

  return (
    <div className='w-full p-4 bg-gray-300/40 rounded-md'>
      <input id="mockSelector" type="file" className="hidden" onChange={loadingImageFile}/>
      <div className="flex w-full justify-center items-center">
        <div className="w-full flex justify-center items-center">
          <img id='ImagePreview' src={props.image ? props.image : "/assets/images/profile.svg"} alt="User Picture" className="rounded-full w-[60px] h-[60px] min-w-[60px]" />
        </div>
        <div className="w-full flex justify-center items-center px-1">
          <button type='button' className="bg-gray-400 px-3" onClick={onImageLoad}>Select Picture</button>
        </div>
      </div>
    </div>
  )
}

export default PictureUploader

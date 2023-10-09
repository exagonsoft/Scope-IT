import React from 'react'
import './custombuttonstyles.css'

const CustomButton = (props) => {
  const { icon, text, onClick, customClass= ''} = props
  return (
    <div className={`flex justify-center items-center custom-button px-4 py-2 gap-2 ${customClass}`} onClick={onClick}>
      {icon}
      <span>{text}</span>
    </div>
  )
}

export default CustomButton

import React from 'react'
import "./projectcomponenrtstyles.css"
import CustomButton from '../../UI/customButton/customButton'
//import Board, { moveCard, moveColumn, removeCard, addCard } from "@asseinfo/react-kanban";
import { FaPlusCircle } from "react-icons/fa";

const ProjectComponentBoard = () => {
  return (
    <section id="board_section" className="flex w-full justify-between items-start gap-4 flex-col">
        <div className="header flex justify-end items-center w-full"><CustomButton icon={<FaPlusCircle />} text="New project"/></div>
        <div className="flex justify-center items-center w-full general-container"></div>
    </section>
  )
}

export default ProjectComponentBoard

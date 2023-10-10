import React, { useContext, useEffect, useState } from "react";
import "./projectcomponenrtstyles.css";
import CustomButton from "../../UI/customButton/customButton";
//import Board, { moveCard, moveColumn, removeCard, addCard } from "@asseinfo/react-kanban";
import { FaPlusCircle } from "react-icons/fa";
import axios from "axios";
import { config } from "../../config/config";
import { Authorization } from "../../constants/constants";
import { Context } from "../../contexts/mainContext";

const ProjectComponentBoard = () => {
  const [projectsList, setProjectsList] = useState(null);
  const { token } = useContext(Context);

  const loadProjects = async () => {
    let _headers = Authorization(token)
    try {
      let _res = await axios.get(
        config.API_URL + "projects/list_projects",
        _headers
      );
      setProjectsList(_res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadProjects();
  }, []);

  return (
    <section
      id="board_section"
      className="flex w-full justify-between items-start gap-4 flex-col"
    >
      <div className="header flex justify-end items-center w-full">
        <CustomButton icon={<FaPlusCircle />} text="New project" />
      </div>
      <div className="flex justify-center items-center w-full general-container"></div>
    </section>
  );
};

export default ProjectComponentBoard;

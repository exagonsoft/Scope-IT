import React from 'react'
import './projectstyles.css'
import ProjectComponentBoard from '../../components/projectComponents/projectComponentsList'

const ProjectsPage = () => {
  return (
    <div classname="flex w-full justify-center items-center h-full px-4" >
      <ProjectComponentBoard />
    </div>
  )
}

export default ProjectsPage

import React, { useContext, useEffect } from 'react'
import './dashboardstyles.css'
import DashBoardComponent from '../../components/dashboardComponents/dashBoard'
import { Context } from '../../contexts/mainContext'

const DashBoardPage = () => {
  const { setIsActive} = useContext(Context)

  useEffect(() => {
    setIsActive('none');
  }, [])
  return (
    <div>
      <DashBoardComponent />
    </div>
  )
}

export default DashBoardPage

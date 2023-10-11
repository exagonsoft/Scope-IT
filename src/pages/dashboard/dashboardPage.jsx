import React, { useEffect } from 'react'
import './dashboardstyles.css'
import DashBoardComponent from '../../components/dashboardComponents/dashBoard'
import useAuth from '../../hooks/useAuth'

const DashBoardPage = () => {
  const { setIsActive} = useAuth();

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

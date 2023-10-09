import React, { useContext, useEffect } from 'react'
import './simplelayoutstyles.css'
import { Context } from '../../contexts/mainContext'
import { useNavigate } from 'react-router-dom'

const SimpleLayoutContainer = () => {
    const {user} = useContext(Context)
    const navigate = useNavigate()

    useEffect(() => {
        // Redirect to site if user is not null
    if (!user) {
        navigate("/");
      }

    }, [user])

  return (
    <div>
      
    </div>
  )
}

export default SimpleLayoutContainer

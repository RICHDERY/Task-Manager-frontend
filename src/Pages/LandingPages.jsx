import React from 'react'
import lorem from "../assets/Icons/Loremp.png"
import component from "../assets/Icons/Component 2.png"
import button from '../assets/Icons/Go to my task button.png'
import { Link } from 'react-router-dom'


const LandingPages = () => {
  return (
    <div className='container vh-100 d-flex justify-content-between gap-4 w-100 my-5'>
      <div className='task-start w-50 my-5 py-3'>
        <div py-3>
          <h1>Manage your Task on TaskDuty</h1>
          <img src="../assets/Icons/Loremp.png" alt="" />
          <img src={lorem}alt="" />

          <Link>
          <img src="../assets/Icons/Go to my task button.png" alt="" />
          <img src={button} alt="" />
          
          </Link>

        </div>
        <div>
          <img src="container d-flex align-content-center-between text-align  gap-2" alt="" />
          <img src="../assets/Icons/Component 2.png" alt="" />
          <img src={component} alt="" />
        </div>
      </div>
    </div>
  )
}

export default LandingPages
import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight} from "@fortawesome/fontawesome-free-solid"
import eShopImg from '../../img/eShop.png'
import bookingImg from '../../img/booking.png'
import todoImg from '../../img/todoapp.png'
import './ProjectsList.scss'

const ProjectsList = () => {
  return (
    <div className="projects">
        <h1>Projects</h1>
        <div className="projectList">
          <Link to="https://github.com/1dominik7/projects/tree/Ecommerce-store" target="_blank" className="project">
            <div className="imgDescription">
              <img className='imgProject' src={eShopImg} alt="" />
              <span className='textProject'>
              A Full Stack E-Commerce App  where peoples can purchase their choosable clothes, built with React and Stripe API.
              </span>
              <div className='titleProject'>Ecommerce store</div>
              <div className='buttonProject'><FontAwesomeIcon className='arrowIcon' icon={faArrowRight}/></div>
            </div>
          </Link>
          <Link to="https://github.com/1dominik7/projects/tree/ToDoApp-TypeScript" target="_blank" className="project">
            <div className="imgDescription">
              <img className='imgProject' src={todoImg} alt="" />
              <span className='textProject'>
              ToDo App used to maintain our day-to-day taks or list everything that we have to do build with TypeScript.
              </span>
              <div className='titleProject'>ToDo App</div>
              <div className='buttonProject'><FontAwesomeIcon className='arrowIcon' icon={faArrowRight}/></div>
            </div>
          </Link>
          <Link to="https://github.com/1dominik7/BookingApp" target="_blank" className="project">
            <div className="imgDescription">
              <img className='imgProject' src={bookingImg} alt="" />
              <span className='textProject'>
              BookingApp - project in progress - developed using Node.js and React.
              </span>
              <div className='titleProject'> Booking App</div>
              <div className='buttonProject'><FontAwesomeIcon className='arrowIcon' icon={faArrowRight}/></div>
            </div>
          </Link>
        </div>
      </div>

  )
}

export default ProjectsList

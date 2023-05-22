import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight} from "@fortawesome/fontawesome-free-solid"
import eShopImg from '../../img/eShop.png'
import rpsImg from '../../img/rock-paper-scissors.png'
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
          <Link to="https://github.com/1dominik7/projects/tree/TodoApp" target="_blank" className="project">
            <div className="imgDescription">
              <img className='imgProject' src={todoImg} alt="" />
              <span className='textProject'>
              ToDo App used to maintain our day-to-day taks or list everything that we have to do build with React.
              </span>
              <div className='titleProject'>ToDo App</div>
              <div className='buttonProject'><FontAwesomeIcon className='arrowIcon' icon={faArrowRight}/></div>
            </div>
          </Link>
          <Link to="https://github.com/1dominik7/projects/tree/RockPaperScissors" target="_blank" className="project">
            <div className="imgDescription">
              <img className='imgProject' src={rpsImg} alt="" />
              <span className='textProject'>
              Rock paper scissors game developed using pure HTML CSS and JavaScript
              </span>
              <div className='titleProject'> Rock-Paper-Scissors</div>
              <div className='buttonProject'><FontAwesomeIcon className='arrowIcon' icon={faArrowRight}/></div>
            </div>
          </Link>
        </div>
      </div>

  )
}

export default ProjectsList

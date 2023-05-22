import React, { useState } from 'react'
import profileImg from '../../img/profilePhoto.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faHtml5, faCss3, faReact, faNode } from "@fortawesome/free-brands-svg-icons";
import mongodbIcon from "../../img/mongodb1.png"
import typeScriptIcon from "../../img/typeScript-logo.png"
import './Top.scss'

const Top = () => {

    const [open,setOpen] = useState(false)

  return (
    <div className="top">
    <div className='profile'>
        <img className='photo' src={profileImg} alt=""/>
        <h1>Hello! My name is <br/>
        Dominik Wicek</h1>
        <span>I have graduated from Rzeszow University of Technology after completing Master's degree of Managment And Production Engineering. I'm self-taught fron-end developer from Dębica and I'm looking for my first commercial experience. I have been learning programing for about a year.  
        </span>
        <div className='contactDetails'>
          <button className='contactButton' onClick={() => {
            setOpen(!open)
          }}>
            Contact</button>   
          {open ?
            <div className='contactText'>
              <span>email: dominik.wicek1@gmail.com</span>
              <span>phone: +48 665 394 902</span>
            </div>
            :
            ""
          }
        </div>  
      </div>
      <div className="rightTop">
        <div className='map'>
        <iframe title="mapFrame"  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10361548.695617432!2d14.607270938876704!3d50.651727212511986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473d09882e23694b%3A0x59f606766b3e59fc!2zRMSZYmljYQ!5e0!3m2!1sen!2spl!4v1669661831699!5m2!1sen!2spl" className="location" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className="knowledge">
          <div className="learningPath">    <h1>Learning Path</h1>
            <p>Web Developer Basics 
              <FontAwesomeIcon className='cssIcon icon' icon={faCss3}/>
              <FontAwesomeIcon className='htmlIcon' icon={faHtml5}/>
            </p>
            <p>Intermediate Front-End
              <FontAwesomeIcon className='cssIcon icon' icon={faCss3}/>
              <FontAwesomeIcon className='htmlIcon icon' icon={faHtml5}/>
            </p>
            <p>Basics JavaScript 
              <FontAwesomeIcon className='jsIcon icon' icon={faJs}/>
           </p>
            <p>React The Complete Guide
            <FontAwesomeIcon className='reactIcon' icon={faReact}/>
           </p>
           <p>The MERN Fullstack Guide
           <FontAwesomeIcon className='reactIcon icon' icon={faReact}/>
           <FontAwesomeIcon className='nodeIcon icon' icon={faNode}/>
            <img src={mongodbIcon} className="mongoIcon icon" alt=""/>
          </p>
          </div>
          <div className="skills">
            <h1>Skills</h1>
            <div className="skillsIcon">
            <FontAwesomeIcon className='jsSkillIcon' icon={faJs}/>
            <FontAwesomeIcon className='reactSkillIcon' icon={faReact}/>
            <FontAwesomeIcon className='nodeSkillIcon' icon={faNode} />
              <img src={mongodbIcon} className="mongoSkillIcon" alt="" />
              <img src={typeScriptIcon} className="typeScriptSkillIcon" alt="" />
              </div>
        </div>
        </div>
      </div> 
    </div>
  )
}

export default Top





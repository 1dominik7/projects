import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight} from "@fortawesome/fontawesome-free-solid"
import linkedinImg from '../../img/linkedin-icon.png'
import githubImg from '../../img/github-icon.png'
import gmailImg from '../../img/gmaillogo.png'
import './Link.scss'

const Links = () => {
  return (
    <div className="contact">
    <div className="links">
      <Link className='github link' target='_blank' to='https://github.com/1dominik7'>
        <img className='githubImg' src={githubImg} alt="" />
        <div className='buttonLink'><FontAwesomeIcon className='arrowIcon' icon={faArrowRight}/></div>
        </Link>
      <Link className="linkedin link"  target='_blank' to='https://www.linkedin.com/in/dominik-wicek-71a291173/'>
        <img className='linkedinImg' src={linkedinImg} alt="" />
        <div className='buttonLink'><FontAwesomeIcon className='arrowIcon' icon={faArrowRight}/></div>
      </Link>
      <Link className='gmail link' target='_blank' to='https://mail.google.com'>
        <img className='gmailImg' src={gmailImg} alt="" />
      </Link>
    </div>
  </div>
  )
}

export default Links

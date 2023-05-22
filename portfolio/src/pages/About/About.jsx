import React from 'react'
import Top from '../../components/top/Top';
import ProjectsList from '../../components/projectsList/ProjectsList';
import Links from '../../components/link/Links';

const About = () => {

  return (
    <div className='Container'>
      <Top />
      <Links/>
      <ProjectsList/>
   </div>
  )
}

export default About

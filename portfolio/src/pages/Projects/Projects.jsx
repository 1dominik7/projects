import React from 'react'
import ProjectsList from '../../components/projectsList/ProjectsList';
import Top from '../../components/top/Top';
import Links from '../../components/link/Links';

const Projects = () => {

  return (
    <div className='Container'>
      <ProjectsList />
      <Top />
      <Links/>
  </div>
  )
}

export default Projects

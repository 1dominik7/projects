import React from 'react'
import './Home.scss'
import Top from '../../components/top/Top';
import ProjectsList from '../../components/projectsList/ProjectsList';
import Links from '../../components/link/Links';

const Home = () => {

  return (
    <div className='Container'>
      <Top/>
      <ProjectsList/>
      <Links/>
   </div>
  )
}

export default Home

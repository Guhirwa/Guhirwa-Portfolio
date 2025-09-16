import React from 'react'
import { Link } from 'react-scroll'

const AboutMeText = () => {
  return (
    <div className='flex flex-col md:items-start sm:items-center md:text-left sm:text-center'>
      <h2 className='text-6xl text-cyan mb-10'>About Me</h2>
      <p className='text-white'>
        I'm Christian GUHIRWA, a web developer instructor with a passion for teaching and coding.
        I specialize in React and front-end development, helping studentss build real-wolrd projects
        and master modern web technologies. I enjoy continuous learning and sharing knowledge to inspire
        others to achieve their goals.
      </p>
      <Link 
        className='border border-orange rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-dark-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-dark-brown hover:scale-105'
        smooth={true}
        spy={true}
        duration={1500}
        offset={-120}
        to='projects'
      >
        My Projects
      </Link>
    </div>
  )
}

export default AboutMeText
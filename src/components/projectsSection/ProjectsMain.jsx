import React from 'react'
import ProjectText from './ProjectText'
import SingleProject from './SingleProject'
import project1Img from '../../../public/images/cgnetHub.png'

const ProjectsMain = () => {

    const projects = [
        {
            name: 'CgNetHub',
            year: '2024',
            align: 'right',
            image: {project1Img},
            link: 'https://cgnethub.netlify.app/',
        }
    ]

  return (
    <div id='projects' className='max-w-[1200px] mx-auto px-4 mb-16'>
        <ProjectText />
        <div className='flex flex-col gap-20 max-w-[900px] mx-auto mt-12'>
            {projects.map((project, index) => {
                return (
                    <SingleProject key={index} name={project.name} year={project.year} align={project.align} image={project.image} link={project.link}  />
                )
            })}
        </div>
    </div>
  )

}

export default ProjectsMain
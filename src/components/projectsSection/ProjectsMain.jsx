import React from 'react'
import ProjectText from './ProjectText'
import SingleProject from './SingleProject'

const ProjectsMain = () => {

    const projects = [
        {
            name: '',
            year: '',
            align: '',
            image: '',
            link: '',
        }
    ]

  return (
    <div>
        <ProjectText />
        <div>
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
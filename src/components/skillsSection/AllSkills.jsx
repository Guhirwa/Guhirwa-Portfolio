import React from 'react'
import { SiHtml5, SiCss3, SiJavascript, SiTypescript, SiRedux, SiTailwindcss } from "react-icons/si";
import SingleSkill from './SingleSkill.jsx'

const AllSkills = () => {

    const skills = [
      {
        skill: 'HTML',
        icon: SiHtml5,
      },

      {
        skill: 'CSS',
        icon: SiCss3,
      },
      {
        skill: 'JavaScript',
        icon: SiJavascript,
      },
      {
        skill: 'TypeScript',
        icon: SiTypescript,
      },
      {
        skill: 'Redux',
        icon: SiRedux,
      },
      {
        skill: 'Tailwindcss',
        icon: SiTailwindcss,
      }

  ];

  return (
    <div>
      <div className='flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto'>
        {skills.map((item, index) => {
          return <SingleSkill key={index} text={item.skill} imageSvg={<item.icon/>} />
        })}
      </div>
    </div>
  )
}

export default AllSkills
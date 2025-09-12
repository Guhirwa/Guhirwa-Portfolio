import React from 'react'
import { SiHtml5, SiCss3, SiJavascript, SiTypescript, SiRedux, SiTailwindcss } from "react-icons/si";
import SingleSkill from './SingleSkill.jsx'

const AllSkillsSM = () => {

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
    <div className='grid md:grid-cols-4 sm:grid-cols-3 gap-12 my-12'>
        {skills.map((item, index) => {
            return (
                <div key={index} className='flex flex-col items-center'>
                    <item.icon className='text-7xl text-orange' />
                    <p className='text-center mt-4 text-white'>{item.skill}</p>
                </div>
            )
        })}
    </div>
  )
}

export default AllSkillsSM
import React from 'react'
import subSkillsImage from '../../../public/images/SubSkillsImg.png'

const SubSkills = () => {
  return (
    <div className='border-y-2 border-light-grey relative'>
        <div className='absolute bg-gradient-to-r from-orange to-cyan opacity-50 w-full h-full'></div>
        <img src={subSkillsImage} alt="SubSkills Image" />
    </div>
  )
}

export default SubSkills
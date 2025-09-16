import React from 'react'
import subSkillsImage from '../../../public/images/SubSkillsImg.png'

const SubSkills = () => {
  return (
    <div className='border-y-2 border-light-grey relative -top-20'>
        <div className='absolute bg-gradient-to-r from-orange to-cyan opacity-50 w-full h-full'></div>
        <div className='bg-dark-brown h-15'></div>
        {/* <img className='w-full h-24' src={subSkillsImage} alt="SubSkills Image" /> */}
    </div>
  )
}

export default SubSkills
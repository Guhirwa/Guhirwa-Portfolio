import React from 'react'
import ExperienceText from './ExperienceText'
import ExperienceTop from './ExperienceTop'
import AllExperinces from './AllExperinces'

const ExperienceMain = () => {
  return (
    <div id='experience' className='max-w-[1200px] mx-auto px-4' >
        <ExperienceText />
        <ExperienceTop />
        <div className='w-full mt-4 bg-light-brown lg:block sm:hidden'></div>
        <AllExperinces />
    </div>
  )
}

export default ExperienceMain
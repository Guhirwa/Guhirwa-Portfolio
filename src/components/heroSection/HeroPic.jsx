import React from 'react'
import { PiCircleDashedThin } from 'react-icons/pi'
import profileImage from '../../../public/images/profileImg.jpeg'

const HeroPic = () => {
  return (
    <div className='h-full flex items-center justify-center'>
        <img src={profileImage} alt="Christian's profile image" className='max-h-[250px] w-auto rounded-full' />
        <div className='absolute -z-10 flex justify-center items-center animate-pulse'>
          <PiCircleDashedThin className='md:h-[90%] sm:h-[120%] min-h-[600px] w-auto text-cyan blur-md animate-[spin_20s_linear_infinite' />
        </div>
    </div>
  )
}

export default HeroPic
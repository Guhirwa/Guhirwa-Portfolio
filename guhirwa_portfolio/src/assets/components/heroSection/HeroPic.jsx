import React from 'react'
//import { PiHexagonLight } from 'react-icons/pi'

function HeroPic() {
  return (
    <div className='h-full flex items-center justify-center'>
      <img 
        src="../../../public/images/profileImg.jpeg" 
        alt="Christian Guhirwa Image" 
        className='max-h-[250px] w-auto rounded-full' 
      />
      {/* <div className='position-absolute -z-10 flex justify-center items-center animate-pulse'>
        <PiHexagonLight className='md:h-[90%] sm:h-[120%] min-h-[600px] w-auto text-cyan blur-md animate-[spin_20s_linear_infinite'/>
      </div> */}
    </div>
  )
}

export default HeroPic
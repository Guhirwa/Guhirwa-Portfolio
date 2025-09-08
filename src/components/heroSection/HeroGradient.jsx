import React from 'react'

const HeroGradient = () => {
  return (
    <div>
      <div className='shadow-cyan-medium absolute top-0 right-[400px] -z-10 animated-pulse'></div>
      <div className='shadow-orange-medium absolute top-0 right-[0px] -z-10 animated-pulse'></div>
      <div className='shadow-cyan-medium absolute top-[300px] left-0 -z-10 animated-pulse opacity-50'></div>
      <div className='shadow-orange-medium absolute top-[500px] left-0 -z-10 animated-pulse opacity-50'></div>
    </div>
  )
}

export default HeroGradient
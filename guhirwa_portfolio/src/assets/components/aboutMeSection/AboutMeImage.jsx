import React from 'react'

const AboutMeImage = () => {
  return (
    <div className='h-[500px] w-[300px] relative'>
        <div className='h-[500px] w-[300px] rounded-[100px] absolute overflow-hidden'>
            <img 
                src="../../../../public/images/About_Me_Image.png" 
                alt="About me image" 
                className='h-4 w-auto object-cover'
            />
        </div>
        <div>

        </div>
    </div>
  )
}

export default AboutMeImage
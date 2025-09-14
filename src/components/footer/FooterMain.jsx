import React from 'react'

const FooterMain = () => {

    const links = [
    { link: "About Me", section: "about" },
    { link: "Skills", section: "skills" },
    { link: "Experience", section: "experience" },
    { link: "Projects", section: "projects" },
    { link: "Contact", section: "contact" },
]

  return (
    <div className='px-4'>
        <div className='w-full h-[1px] bg-light-grey mt-24'></div>
        <div className='md:flex sm:hiddne justify-between mt-4 max-w-[1200px] mx-auto'>
            <p className='text-3xl text-light-grey'>Christian GUHIRWA</p>
            <ul className='flex gap-4 text-light-grey text-xl'>
                {links.map((link, index) => {
                    return <li key={index}>
                        <a className='hover:text-white transition-all duration-500 cursor-pointer' href="">{link.link}</a>
                    </li>
                })}
            </ul>
        </div>
        <p className='max-w-[1200px] mx-auto text-right mb-12 text-sm text-light-brown'>© 2025 Guhirwa | All Rights Reserved.</p>
    </div>
  )
}

export default FooterMain
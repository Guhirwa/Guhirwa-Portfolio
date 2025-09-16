import React from 'react'
import { Link } from 'react-scroll'

const NavbarLogo = () => {
  return (
    <div>
        <Link 
          className='text-white text-2xl sm:hidden md:block cursor-pointer'
          smooth={true}
          spy={true}
          offset={0}
          to='hero'
          duration={1000}>
            Christian GUHIRWA
        </Link>
        <h1 className='text-white font-special font-extrabold text-4xl sm:block md:hidden'>CG</h1>
    </div>
  )
}

export default NavbarLogo
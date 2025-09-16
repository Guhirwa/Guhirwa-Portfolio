import React from 'react'
import { LuArrowDownRight } from 'react-icons/lu'

const NavbarBtn = () => {
  return (
    <button className='px-4 py-2 sm:mzn-w-[10px] rounded-full text-xl font-bold text-white border-cyan border flex items-center gap-1 bg-gradient-to-r from-cyan to-orange hover:scale-110 transition-all duration-500 hover:border-orange hover:shadow-cyan-shadow'>
        Hire Me
        <div className='sm:hidden md:block'>
            <LuArrowDownRight />
        </div>
    </button>
  )
}

export default NavbarBtn
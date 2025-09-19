import React from 'react'
import { FiGithub } from 'react-icons/fi'
import { FaLinkedinIn } from 'react-icons/fa'
import SingleContactSocial from './SingleContactSocial'

const ContactSocial = () => {
  return (
    <div className='flex gap-4'>
        <SingleContactSocial link='https://github.com/Guhirwa' Icon={FiGithub} />
        <SingleContactSocial link='www.linkedin.com/in/christian-guhirwa1226' Icon={FaLinkedinIn} />
    </div>
  )
}

export default ContactSocial
import React from 'react'

const ContactForm = () => {
  return (
    <div>
        <form action=""className='flex flex-col gap-4'>
            <input className='h-12 rounded-lg bg-light-brown px-2' type="text" placeholder='Your Names' required />
            <input className='h-12 rounded-lg bg-light-brown px-2' type="text" placeholder='Your Email' required />
            <textarea className='rounded-lg bg-light-brown p-2' type='text' placeholder='Message' rows='9' cols='50' required />
            <button type='submit' className='w-full rounded-lg border border-cyan text-white h-12 font-bold text-xl hover:bg-dark-cyan bg-cyan transition-all duration-500'>Send</button>
        </form>
    </div>
  )
}

export default ContactForm
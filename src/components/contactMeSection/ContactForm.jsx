import React from 'react'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const ContactForm = () => {

  const [name,setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");

  const handleName = (event) => {
    setName(event.target.value)
  }
  const handleEmail = (event) => {
    setEmail(event.target.value)
  }
  const handleMessage = (event) => {
    setMessage(event.target.value)
  }

  const form =useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_3kjzb9u', 'template_0axbhtq', form.current, {
        publicKey: 'R1-9Pk9Ey4be6ZHkl',
      })
      .then(
        () => {
          setName('');
          setEmail('');
          setMessage('');
          setSuccess('Message Sent!')
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div>
      <p className='text-cyan'>{success}</p>
        <form onSubmit={sendEmail} className='flex flex-col gap-4 text-white' ref={form}>
            <input value={name} onChange={handleName}  name='from_name' className='h-12 rounded-lg bg-light-brown px-2' type="text" placeholder='Your Names' required />
            <input value={email} onChange={handleEmail} name='from_email' className='h-12 rounded-lg bg-light-brown px-2' type="text" placeholder='Your Email' required />
            <textarea value={message} onChange={handleMessage} name='message' className='rounded-lg bg-light-brown p-2' type='text' placeholder='Message' rows='9' cols='50' required />
            <button type='submit' className='w-full rounded-lg border border-cyan text-white h-12 font-bold text-xl hover:bg-dark-cyan bg-cyan transition-all duration-500'>Send</button>
        </form>
    </div>
  )
}

export default ContactForm
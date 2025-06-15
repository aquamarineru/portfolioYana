import React, { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineInstagram } from 'react-icons/ai'
import {FaTiktok, FaTelegramPlane} from 'react-icons/fa'
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2'



const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const { name, email, message } = e.target.elements;

    const templateParams = {
      from_name: name.value,
      from_email: email.value,
      message: message.value,
    };

    emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, e.target, process.env.NEXT_PUBLIC_USER_ID)
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      Swal.fire({
        icon: 'success',
        title: 'Message sent successfully!',
        showConfirmButton: false,
        timer: 1500
      });
      e.target.reset();
      }, (error) => {
        console.log('FAILED...', error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Error sending message. Please try again later.', 
        });
      });
  };
  return (
    <div className='pt-24 md:m-0 font-display' id='contact'>
      <h2 className='font-nanum text-2xl text-tomatoes text-center md:text-4xl lg:text-5xl font-bold uppercase'>Contact me</h2>
      <h3 className='font-tomatoes text-xl text-dark dark:text-light text-center font-bold md:text-2xl'>get in touch</h3>
      <div className='pt-16 px-10 flex flex-col-reverse items-center justify-center md:flex-row md:items-start md:gap-10'>
      <ul className='flex justify-between items-center dark:text-light md:flex-col'>
        <li className="p-4 hover:text-hover">
          <a 
          href="https://www.instagram.com/yana.korobeinyk_photo" 
          aria-label="Follow me on instagram" 
          target="_blank" 
          rel="noopener noreferrer">
            <AiOutlineInstagram size={30} />
          </a>
        </li>
        <li className="p-4 hover:text-hover">
          <a 
          href="https://www.tiktok.com/@yana.korobeinykphoto" 
          aria-label="Follow me on tiktok" 
          target="_blank"
          rel="noopener noreferrer">
            <FaTiktok size={30} />
          </a>
        </li>
        <li className="p-4 hover:text-hover">
          <a 
          href="https://t.me/korobeinyk" 
          aria-label="Contact me on telegram" 
          target="_blank"
          rel="noopener noreferrer">
            <FaTelegramPlane size={30} />
          </a>
        </li>
        </ul>
        <form 
        ref={form} 
        onSubmit={sendEmail} 
        action=""  
        className='m-auto flex flex-col text-center md:max-w-[400px] gap-2 md:text-left md:m-0 relative mb-2'>
            <div className='relative mb-2 h-[4rem]'>
            <label 
            className='font-light text-dark/70 dark:text-light absolute top-[-.5rem] left-[1.25rem] p-[0.25rem] z-10 bg-light dark:bg-dark'>
              Name *
              </label>
                <input 
                type="text" 
                name="name" 
                placeholder='Your name' 
                required
                className="border-[1px] border-tomatoes rounded-md px-3 py-3 mt-2 w-full bg-light dark:bg-dark"/>
            </div>
            <div className='relative mb-2 h-[4rem]'>
                <label 
                className='font-light text-dark/70 dark:text-light absolute top-[-.5rem] left-[1.25rem] p-[0.25rem] z-10 bg-light dark:bg-dark'>
                  Email *
                  </label>
                <input 
                    type="email" 
                    name="email"  
                    placeholder='Your email' 
                    required
                    className="border-[1px] border-tomatoes rounded-md px-3 py-3 mt-2 w-full bg-light dark:bg-dark"/>
                </div>
                <div className='relative mb-2 h-[4rem]'>
                  <label className='font-light text-dark/70 dark:text-light absolute top-[-.5rem] left-[1.25rem] p-[0.25rem] z-10 bg-light dark:bg-dark'>Instagram *</label>
                  <input type="text" name="instagram" placeholder='@' className="border-[1px] border-tomatoes rounded-md px-3 py-3 mt-2 w-full bg-light dark:bg-dark"/>
                </div>
                <div className='relative mb-2 h-[4rem]'>
                <label 
                  htmlFor="weddingDate" 
                  className='font-light text-dark/70 dark:text-light absolute top-[-.5rem] left-[1.25rem] p-[0.25rem] z-10 bg-light dark:bg-dark'>
                  Wedding/Shoot Date *
                </label>
                    <input 
                      type="date" 
                      name="weddingDate" 
                      id="weddingDate"
                      required
                      className="border-[1px] border-tomatoes rounded-md px-3 py-3 mt-2 w-full bg-light dark:bg-dark"/>
                </div>
                <div className='relative mb-2 h-[4rem]'>
                <label 
                className='font-light text-dark/70 dark:text-light absolute top-[-.5rem] left-[1.25rem] p-[0.25rem] z-10 bg-light dark:bg-dark'>
                  Message *
                  </label>
                    <textarea 
                    name='message' 
                    cols="30" 
                    rows="3" 
                    placeholder='Tell me about your wedding or shoot plans, ideas, and dreams. *'
                    required
                    className="border-[1px] border-tomatoes rounded-md px-3 py-3 mt-2 w-full bg-light dark:bg-dark">
                    </textarea>
                </div>
                <button type="submit" className="px-8 py-2 text-light border bg-tomatoes border-tomatoes rounded hover:bg-hover hover:border-none font-nanum uppercase mt-24">
            Contact me
        </button>
        </form>
        <div className="flex flex-wrap justify-center mb-5 ">
            <Image
                src='/contact.webp'
                alt='contact me'
                width={200}
                height={400}
                className='rounded-full object-cover z-0 md:w-[300px] md:h-auto md:rounded-none lg:w-auto'
                priority
                />
        </div>
    </div>
    </div>
  )
}
export default Contact

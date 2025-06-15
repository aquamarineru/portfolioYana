import React from 'react'
import { AiOutlineInstagram } from 'react-icons/ai'
import {FaTiktok, FaTelegramPlane} from 'react-icons/fa'
import Link from 'next/link'

const Social = () => {
  return (
    <>
      <ul className='flex justify-between items-center max-w-[320px] dark:text-light'>
        <li className="p-4 hover:text-hover">
          <Link href="https://www.instagram.com/yana.korobeinyk/" target="_blank" >
            <AiOutlineInstagram size={30} />
          </Link>
        </li>
        <li className="p-4 hover:text-hover">
          <Link href="https://www.tiktok.com/@yana.korobeinykphoto" target='_blank'>
            <FaTiktok size={30} />
          </Link>
        </li>
        <li className="p-4 hover:text-hover">
          <Link href="https://t.me/korobeinyk" target="_blank">
            <FaTelegramPlane size={30} />
          </Link>
        </li>
      </ul>
    </>
  )
}

export default Social
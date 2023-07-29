import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { BsSun, BsMoon } from 'react-icons/bs'
import Social from './Social'
import { useDarkMode } from '@/pages/_app'
const Header = () => {
    const [showMenu, setShowMenu] = useState(false)
    const [colorTheme, setTheme] = useDarkMode()
    const [color, setColor] = useState('transparent')

    const handleMenu = () => {
        setShowMenu(!showMenu)
    }

    useEffect(() => {
        const changeColor = () =>{
            if(window.scrollY >= 90){
                setColor(colorTheme === 'light' ? '#242424' : '#f5f5f5')
            }
            else{
                setColor('transparent')
            }
        }
        window.addEventListener('scroll', changeColor)
    }, [colorTheme])


  return (
    <nav style={{backgroundColor: `${color}`}} className="fixed left-0 top-0 z-20 w-full ease-in duration-300">
        <div className="max-w-[1024px] m-auto flex justify-between items-center p-4 text-dark dark:text-light md:max-w-[600px] lg:max-w-[900px] xl:max-w-[1200px]">
            <Link href="/">
                <div className='cursor-pointer flex flex-col items-center justify-center gap-0'>
                {colorTheme === 'light' 
                ? <Image
                src="/logoDark.png"
                alt="logo"
                width={50}
                height={50}
                className="object-contain md:h-[60px] md:w-[60px]"
            /> 
                : <Image
                    src="/logo.png"
                    alt="logo"
                    width={45}
                    height={45}
                    priority={true}
                    className="object-contain md:w-14 md:h-14 lg:w-16 lg:h-16"
                />}
                <span className='font-ricordi uppercase text-xs'>Photography</span>
                </div>
            </Link>
            <div className='flex items-center gap-4 justify-between'>
                <ul className='hidden sm:flex font-ricordi font-bold uppercase'>
                    <li className='p-4 hover:text-hover'>
                        <Link href="/#about">About</Link>
                    </li> 
                    
                    <li className='p-4 hover:text-hover'>
                        <Link href="/portfolio">Portfolio</Link>
                    </li>
                    <li className='p-4 hover:text-hover'>
                        <Link href="/#services">Services</Link>
                    </li>
                    <li className='p-4 hover:text-hover'>
                        <Link href="/#contact">Contact</Link>
                    </li>
                </ul>    
                {/* Theme Button */}    
                <div onClick={() => setTheme(colorTheme)} className='cursor-pointer  z-50 p-2 rounded fixed top-8 right-12 md:top-9'>
                    {colorTheme === 'light' ? <BsSun size={15} /> : <BsMoon size={15} />}
                    </div>  
            </div>   
{/* Mobile Button */}
                <div onClick={handleMenu} className='block sm:hidden z-10'>
                    {showMenu ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                </div>
{/* Mobile Menu */}
                <div
                className={`sm:hidden fixed top-0 transition-all duration-300 ease-in-out ${
                    showMenu ? 'left-0' : '-left-full'
                } right-0 bottom-0 flex flex-col justify-center items-center w-full h-screen bg-light text-center dark:bg-dark`}
                >
                    <ul className="font-ricordi uppercase">
                        <li className="p-4 text-xl hover:text-hover" onClick={handleMenu}>
                        <Link href="/#about">About</Link>
                        </li>
                        <li className="p-4 text-xl hover:text-hover" onClick={handleMenu}>
                        <Link href="/portfolio">Portfolio</Link>
                        </li>
                        <li className="p-4 text-xl hover:text-hover" onClick={handleMenu}>
                        <Link href="/#services">Services</Link>
                        </li>
                        <li className="p-4 text-xl hover:text-hover" onClick={handleMenu}>
                        <Link href="/#contact">Contact</Link>
                        </li>
                    </ul>
                    <Social />
                </div>
        </div>
    </nav>
  )
}

export default Header
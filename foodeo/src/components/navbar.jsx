import React from 'react'
import {useState} from 'react'
import menuIcon from '../assets/menu.png'
import closeIcon from '../assets/close.png'

function Navbar() {
    const [toggle, setToggle] = useState(false)
  return (
    <nav className='relative w-full flex justify-between items-center p-4  bg-gray-50 navbar font-[Trebuchet_MS] '>
    
    <div className='items-center space-x-5 font-bold cusror-pointer '>
        <ul className="hidden sm:flex list-none flex-row gap-6 items-center">
            <li className='mb-3'><a className='cursor-pointer'>Home</a></li>
            <li className='mb-3'><a className='cursor-pointer'>Tutorial</a></li>
            <li className='mb-3'><a className='cursor-pointer'>About Us</a></li>
           </ul>
    </div>
    
    <div className='absolute left-1/2 transform -translate-x-1/2 font-black text-2xl'>
        <a href='#'>FOODEO</a>
    </div>
    
    <div className='px-4 py-2 font-poppins rounded-full cursor-pointer font-semibold bg-black text-white sm:flex hidden'>
        <button className='cursor-pointer' >Contact</button>
    </div>

    <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img src={toggle ? closeIcon : menuIcon} alt="menu" className=' w-[22px] h-[22px] object-contain' onClick={() => setToggle((prev) => !prev)} />
        <div className={`${toggle ? 'flex' : 'hidden'} p-6 pt-1 bg-gray-50 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
           <ul className='list-none flex flex-col justify-end items-center flex-1 '>
            <li className='mb-3'><a className='cursor-pointer'>Home</a></li>
            <li className='mb-3'><a className='cursor-pointer'>Tutorial</a></li>
            <li className='mb-3'><a className='cursor-pointer'>About Us</a></li>
            <li><a href="#" className="cursor-pointer">Contact</a></li>
           </ul>
        </div>
    </div>


</nav>
  )
}

export default Navbar
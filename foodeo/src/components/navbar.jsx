import React from 'react'
import {useState} from 'react'
import menuIcon from '../assets/menu.png'
import closeIcon from '../assets/close.png'
import Button from './button'
    
function Navbar() {
    const [toggle, setToggle] = useState(false)
  return (
    <nav className='relative w-full flex justify-between items-center p-6 bg-gray-50 navbar font-medium px-5 md:px-15'>
    
    <div className='items-center space-x-5  cusror-pointer '>
        <ul className="hidden sm:flex list-none flex-row gap-6 items-center">
            <li className='mb-3'><a className='cursor-pointer'>Home</a></li>
            <li className='mb-3'><a className='cursor-pointer'>Tutorial</a></li>
            <li className='mb-3'><a className='cursor-pointer'>About Us</a></li>
           </ul>
    </div>
    
    <div className='absolute left-1/2 transform -translate-x-1/2 text-2xl border-2 p-1'>
        <a href='#'>FOODEO</a>
    </div>
    
    <div className='hidden sm:flex'>
        <Button text="Start Work" />
    </div>

    <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img src={toggle ? closeIcon : menuIcon} alt="menu" className=' w-5.5 h-5.5 object-contain' onClick={() => setToggle((prev) => !prev)} />
        <div className={`${toggle ? 'flex' : 'hidden'} p-6 pt-1 bg-gray-50 absolute top-20 right-0 mx-4 my-2 min-w-35 rounded-xl sidebar`}>
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
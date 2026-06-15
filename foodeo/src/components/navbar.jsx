import React from 'react'

function Navbar() {
  return (
    <nav className='relative w-full flex justify-between items-center p-4  bg-gray-50'>
    
    <div className='items-center space-x-5 font-bold'>
        <a>Home</a>
        <a>Tutorial</a>
        <a>About Us</a>
    </div>
    
    <div className='absolute left-1/2 transform -translate-x-1/2 font-sans font-black text-2xl'>
        <a href='#'>FOODEO</a>
    </div>
    
    <div className='px-4 py-2 rounded-full cursor-pointer font-semibold bg-amber-200'>
        <button>Contact</button>
    </div>

</nav>
  )
}

export default Navbar
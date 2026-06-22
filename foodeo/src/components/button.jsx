import React from 'react'

function Button({text}) {
  return (
       <div className='px-4 py-2 font-poppins rounded-full cursor-pointer bg-black text-white'>
        <button className='cursor-pointer' >{text}</button>
    </div>
  )
}

export default Button
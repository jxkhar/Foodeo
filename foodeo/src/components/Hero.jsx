import React from 'react'
import Button from './button'
function Hero() {
  return (
        <section className="bg-gray-50 w-full p-6 sm:p-12 md:p-16 flex flex-col justify-center min-h-screen gap-12 md:gap-16 overflow-hidden">
            <div className='flex-1 xl:px-0 sm:px-16 px-6 flex items-center text-center justify-center'>
            <h1 className=" text-black text-4xl sm:text-5xl flex flex-col md:text-6xl lg:text-7xl font-poppins leading-tight iteam-center">
                <span className='inline-block font-bold'>Rank Your</span>{' '}
                <span className='inline-block font-medium bg-linear-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent flex flex-1 relative p-2 md:p-3 sm:font-normal'>Food.
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[140%] h-[140%] bg-linear-to-r from-emerald-600/30 to-emerald-400/30 z-0 blur-[30px] md:blur-[40px] rounded-full pointer-events-none" /> 
                
                </span> 
                           
            </h1>
            </div>

            <div className='flex-1 w-full flex flex-col md:flex-row items-center justify-between xl:pl-3 sm:px-12 px-6 '>
            <h2 className="w-full md:w-2/3 text-neutral-700 font-normal leading-relaxed text-sm sm:text-base md:text-base max-w-xl text-left">
                Foodeo uses AI to instantly turn raw ingredients and product details into high-ranking Amazon descriptions, optimized Instagram captions, and strategic marketing tips. It acts as an automated copywriting pipeline, helping organic food brands get found and scale their sales without manual hassle.
            </h2>
            <Button className='flex w-full md:w-auto text-sm sm:text-base justify-center md:justify-end' text="Get Started" />
            </div>
        </section>
  )
}

export default Hero
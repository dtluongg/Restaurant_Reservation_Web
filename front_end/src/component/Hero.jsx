import React from 'react'
import bgImage from '../assets/hero2.jpg'

const Hero = () => {
  return (
    <div className='relative h-[100vh] w-full bg-cover bg-center bg-no-repeat' style={{backgroundImage: `url(${bgImage})`}}>
      {/* Tranparent dark overlay */}
      <div className='absolute inset-0 bg-gray-900 opacity-30 z-10'></div>
      {/* Centered text context */}
      <div className='relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4'>
        <h2 className='text-lg md:text-xl mb-4 tracking-widest uppercase'>Where Luxury Meets Dinner</h2>
        <h1 className='text-4xl md:text-6xl font-bold mb-6'>EMERALD BISTRO</h1>
        <button className='bg-amber-400 text-black font-bold py-3 px-6 rounded-lg hover:bg-amber-500 transition'>BOOK A TABLE</button>
      </div>
    </div>
  )
}
  
export default Hero
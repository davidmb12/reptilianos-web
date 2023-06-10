import React from 'react'
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='m-auto px-[8em] py-[2em]  flex-row'>
        <div className='w-20 fixed'>
          <img className='scale-75' src="Logo.jpg" alt="" />
        </div>
        <div className='mx-40'>
          <div className='flex items-center justify-between h-16'>
            
            <div className='flex-shrink-0'>
              <a href="/" className='text-black font-medium text-xl hover:bg-lightGreen hover:text-white transition-all delay-200 p-2'> Home</a>
            </div>
            <div className='flex-shrink-0'>
              <a href="/" className='text-black font-medium text-xl hover:bg-lightGreen hover:text-white transition-all delay-200 p-2'> About</a>
            </div>
            <div className='flex-shrink-0'>
              <a href="/" className='text-black font-medium text-xl hover:bg-lightGreen hover:text-white transition-all delay-200 p-2'> Products</a>
            </div>
          </div>
        </div>
        
    </nav>
  )
}

export default Navbar

import React, { useState,useEffect} from 'react'
import Link from 'next/link';

const Navbar = () => {
  const [isMobile, setIsMobile] =useState(false);

  useEffect(() =>{
    const handleResize = ()=>{
      if(window.innerWidth <= 768){
        setIsMobile(true);
      }else{
        setIsMobile(false);
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();

    return ()=>{
      window.removeEventListener('resize', handleResize);
    }
  },[]);

  
  return (
    <nav className='absolute px-[3em] py-[1.5em] text-right align-middle w-full bg-gradient-to-t'>
        
          <div className='h-16 inline-block font-Montserrat'>
            <div className='flex-shrink-0 inline-flex '>
              <a href="/" className='text-black font-medium text-xl hover:text-gray-400 transition-all  p-2 '> Inicio </a>
            </div>
            <div className='flex-shrink-0 inline-flex'>
              <a href="/about" className='text-black font-medium text-xl hover:text-gray-400 transition-all ease-in-out p-2 rounded-md'> ¿Quíenes somos? </a>
            </div>
            <div className='flex-shrink-0 inline-flex'>
              <a href="/" className='text-black font-medium text-xl hover:text-gray-400 transition-all ease-in-out p-2 rounded-md'> Catálogo </a>
            </div>
          </div>
          <div className='inline-flex mx-5'>
            <button className="mx-2 middle none center rounded-lg bg-lightGreen px-4 py-2 font-sans text-lg font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 hover:bg-white hover:text-black focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" data-ripple-light="true">
              <i className='mdi mdi-cart'></i>
            </button>
            <div className="inline-block h-10  w-0.5  bg-neutral-100 opacity-100 dark:opacity-50"></div>

          </div>
        
    </nav>
  )
}

export default Navbar

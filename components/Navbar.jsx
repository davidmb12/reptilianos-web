import React, { useState,useEffect} from 'react'
import Link from 'next/link';

const Navbar = () => {
  const [isMobile, setIsMobile] =useState(false);

  const [clientWindowHeight,setClientWindowHeight] = useState("");
  const [backgroundTransparency, setBackgroundTransparency] = useState(0);
  const [padding, setPadding] = useState(30);
  const [boxShadow,setBoxShadow] = useState(0);

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
    console.log(clientWindowHeight);
  };

  //Handle scrolling
  useEffect(() => {
    window.addEventListener('scroll',handleScroll);
    return ()=>{
      window.removeEventListener('scroll', handleScroll);
    }
  })
  //Handle screen resize
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

  //Calculate bg transparency, padding and boxShadow
  useEffect(()=>{
    let backgroundTransparencyVar = clientWindowHeight / 600;
    if(backgroundTransparencyVar < 1){
      let paddingVar = 30 - backgroundTransparencyVar *20;
      let boxShadowVar = backgroundTransparencyVar *0.1;

      setBackgroundTransparency(backgroundTransparencyVar);
      setPadding(paddingVar);
      setBoxShadow(boxShadowVar);
    }
  },[clientWindowHeight]);
  
  return (
    <nav className={`fixed px-[3em] py-[30px] top-0 text-right flex-col align-middle w-full overflow-y-auto z-10`} 
      style={{
        background:`rgba(255,255,255,${backgroundTransparency}`,
        padding: `${padding}px 3em`,
        boxShadow: `rgb(0 0 0 / ${boxShadow}) 0px 0px 20px 6px`
      }}>  
          <div className='inline font-serif'>
            <div className='flex-shrink-0 inline-flex '>
              <a href="/" className='text-black font-medium text-xl hover:bg-gray-100 transition-all p-3 rounded-lg'> Inicio </a>
            </div>
            <div className='flex-shrink-0 inline-flex'>
              <a href="/about" className='text-black font-medium text-xl hover:bg-gray-100 transition-all ease-in-out p-3 rounded-lg'> ¿Quíenes somos? </a>
            </div>
            <div className='flex-shrink-0 inline-flex'>
              <a href="/" className='text-black font-medium text-xl hover:bg-gray-100 transition-all ease-in-out p-3 rounded-lg'> Catálogo </a>
            </div>
          </div>
          <div className='inline '>
            <button className="mx-2 middle none center rounded-lg bg-lightGreen px-4 py-2 font-sans text-lg font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 hover:bg-white hover:text-black focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" data-ripple-light="true">
              <i className='mdi mdi-cart'></i>
            </button>

          </div>
        
    </nav>
  )
}

export default Navbar

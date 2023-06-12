import React from 'react';
import Image from 'next/image';
import dragonBg from '../public/dragon-01.jpg';
const HomePage = ()=>{
    return(
        <>
            <div className='h-screen'>
                <div className='bg-fixed bg-dragon-01 bg-cover h-full text-center justify-center align-middle flex flex-col'>
                    <h1 className='font-Montserrat text-xl'>Reptilianos</h1>
                </div>
            </div>
            <div className='w-full h-96 flex-row'>
                
            </div>
        </>
        
    )
}

export default HomePage;
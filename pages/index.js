import Layout from '@/components/Layout';
import React from 'react';

const HomePage = ()=>{
    return(
        <Layout>
            <div className='bg-fixed bg-snake-01'>
                <div className='h-screen'>
                    <div className='h-full text-center justify-center align-middle flex flex-col'>
                        <h1 className='text-[3rem] text-black font-serif'>BIENVENIDOS</h1>
                        <p className='text-[3rem] text-green-700'>REPTILIANOS</p>
                    </div>
                </div>
                <div className='w-full h-[55vh] flex-row bg-white'>

                </div>
                <div className='w-full h-full flex-row  text-center justify-end align-middle flex'>
                    <div className='mr-52 w-[30em] bg-white flex text-black text-left flex-col p-12'>
                        <h3>QUIENES SOMOS</h3>
                        <br></br>
                        <h1 className='text-[1.5rem]'>Apasionados por la naturaleza</h1>
                        <br></br>

                        <p className='text-sm'>Desde siempre, valoramos la biodiversidad y su conservación, sabemos que los esfuerzos por lograr la reproducción en cautiverio de distintas especies, es el camino correcto para lograr que la afición por la fauna impacte mínimamente en los ecosistemas, por ello nos comprometemos totalmente con la crianza  controlada, legal, ética y profesional de nuestros especímenes, para que nuestros clientes puedan disfrutar al máximo su afición y pasión por lo reptiles. No solo buscamos complacer a los clientes más exigentes, también procuramos el bienestar de nuestros animales. </p>
                    </div>
                </div>
            </div>
        </Layout>
        
    )
}

export default HomePage;
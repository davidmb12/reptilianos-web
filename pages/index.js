import Layout from '@/components/Layout';
import React from 'react';
import { Rubik_Microbe } from 'next/font/google';
import { Box, Button, Flex, HStack, IconButton } from '@chakra-ui/react';
import { FaCartPlus } from 'react-icons/fa';
const rubik = Rubik_Microbe({
    weight: ['400'],
    subsets: ['latin']
})
const HomePage = () => {
    return (
        <Layout>
            <div className='  bg-fixed bg-snake-03 bg-blend-soft-light bg-cover fill-neutral-500'>
                <div className='h-screen bg-gradient-radial from-transparent to-[#0008]'>
                    <div className='h-full text-center justify-center align-middle flex flex-col'>
                        <h1 className='text-[3rem] text-white font-serif'>BIENVENIDOS</h1>
                        <p className={`${rubik.className} text-[8vw] text-8xl text-white font-[500]`}>REPTTILIANOS</p>
                    </div>
                </div>
                <div className='w-full bg-white py-[6rem] px-[15rem]'>
                    <Flex flexDirection={'column'} justifySelf={'center'}>
                        <HStack justifyContent={'space-between'} textAlign={'center'} >
                            <Box>Animales</Box>
                            <Button
                                variant={"solid"}
                                colorScheme={"green"}
                                rounded={'full'}
                                size={"md"}
                                icon={<FaCartPlus />}
                            >
                                Comprar Ahora
                            </Button>                   
                                 
                        </HStack>
                    </Flex>
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
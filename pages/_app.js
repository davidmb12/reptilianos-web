import React from 'react';
import Layout from '../components/Layout';
import { AnimatePresence, motion } from 'framer-motion';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from '@/components/Navbar/Navbar';


const App = ({Component,pageProps})=>{
    return(
        <ChakraProvider>            
            <Navbar></Navbar>
            <AnimatePresence mode='wait'>
                <Component {...pageProps}></Component>
            </AnimatePresence>
            
        
        </ChakraProvider>
            
    )
}

export default App;
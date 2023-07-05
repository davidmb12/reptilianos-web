import React from 'react';
import Layout from '../components/Layout';
import { AnimatePresence, motion } from 'framer-motion';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from '../components/Navbar/Navbar';
import Providers from '../components/Providers';



const App = ({ Component, pageProps }) => {
    return (
        <Providers>
            <ChakraProvider>
                <AnimatePresence mode='wait'>
                    <Component {...pageProps}></Component>
                </AnimatePresence>
            </ChakraProvider>
        </Providers>
    )
}

export default App;
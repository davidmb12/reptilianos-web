import React from 'react';
import Layout from '../components/Layout';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from '@/components/Navbar';

const App = ({Component,pageProps})=>{
    return(
        <>            
            <Navbar></Navbar>
            <AnimatePresence mode='wait'>
                <Component {...pageProps}></Component>
            </AnimatePresence>
            
        
        </>
            
    )
}

export default App;
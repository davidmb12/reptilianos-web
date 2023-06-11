import React from 'react';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';


const App = ({Component,pageProps})=>{
    return(
        <motion.div initial="initial" animate='animate'>
            <Layout>
                <Component {...pageProps}></Component>
            </Layout>
        </motion.div>
        
    )
}

export default App;
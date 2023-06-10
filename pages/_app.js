import React from 'react';
import Layout from '../components/Layout';


const App = ({Component,pageProps})=>{
    return(
        <Layout>
            <Component {...pageProps}></Component>
        </Layout>
    )
}

export default App;
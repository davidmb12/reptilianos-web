import React from 'react'
import Navbar from './Navbar'
import '../app/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const Layout = ({children}) => {
  return (
    <div>
      <Navbar></Navbar>
      <main className='bg-fixed bg-snake-01 bg-cover'>{children}</main>

    </div>
  )
}

export default Layout;

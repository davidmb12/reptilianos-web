"use client"
import React from 'react'
import { useSession } from 'next-auth/react'
import NextAuth from 'next-auth/next'
import Layout from '../components/Layout'
const DashboardPage = () => {
  const { data: session, status } = useSession()

  console.log(session, status)
  return (
    <div>
      Dashboard
    </div>

  )
}

export default DashboardPage

import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import { Outlet } from 'react-router-dom'

const UserLayout = () => {
  return (
    <>
    <Header />
    <main className='mx-auto max-w-7xl px-6'>
        <Outlet />
    </main>
    <Footer />
    </>
  )
}

export default UserLayout

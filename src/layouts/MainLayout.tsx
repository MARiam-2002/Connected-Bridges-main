import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import { Outlet } from 'react-router-dom'
import ScrollUp from '../components/scroll-up/ScrollUp'

export default function MainLayout() {

    return <React.Fragment>


        <ScrollUp />

        <Header />

        <main className='min-h-[100dvh]'>
            <Outlet />
        </main>

        <Footer />

    </React.Fragment>

}

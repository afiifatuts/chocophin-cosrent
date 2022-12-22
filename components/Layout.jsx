import React from 'react';
import Head from 'next/head';

import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({children})=> {
  return (
    <div className='layout'>
      <Head>
        <title>Chocophinil Costrent</title>
      </Head>
      <header>
        <Navbar/>
        <main className='main-container'>
          {children}
        </main>
        <footer>
          <Footer/>
        </footer>
      </header>
    </div>
  )
}

export default Layout
import Bundles from '@/components/Bundles'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import React from 'react'
import AboutUs from '@/components/AboutUs';

const index = () => {
  return (
    <div className='h-full mx-auto'>
      {/* <Navbar /> */}
      <div className='justify-center items-center bg-gradient-to-r from-gray-800 via-gray-900 to-indigo-900' id='home'>
        <Hero/>
      </div>
      <div className='mt-20' id={'about'}>
        <AboutUs/>
      </div>
      <div className='mt-20'>
        <Stats/>
      </div>
      <div className='mt-20 mx-auto' id='blogs'>
        <Bundles/>
      </div>


      {/*<div className='mt-20' id='price'>*/}
      {/*  <Pricing />*/}
      {/*</div>*/}

      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default index

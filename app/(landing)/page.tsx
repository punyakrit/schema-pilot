import React from 'react'
import Navbar from '@/components/landing/Navbar'
import Hero from '@/components/landing/Hero'
import DesignedForDevelopers from '@/components/landing/DesignedForDevelopers'
import CompactAccordion from '@/components/landing/CompactAccordion'
import Footer from '@/components/landing/Footer'

function page() {
  return (
    <div className='min-h-screen'>
      <Navbar />
      <Hero />
      <DesignedForDevelopers />
      <CompactAccordion />
      <Footer />
    </div>
  )
}

export default page

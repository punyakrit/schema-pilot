import React from 'react'
import Navbar from '@/components/landing/Navbar'
import Hero from '@/components/landing/Hero'
import Features from '@/components/landing/Features'
import CompactAccordion from '@/components/landing/CompactAccordion'
import CallToAction from '@/components/landing/CallToAction'
import Footer from '@/components/landing/Footer'

function page() {
  return (
    <div className='min-h-screen bg-background selection:bg-primary/20'>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <CompactAccordion />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}

export default page

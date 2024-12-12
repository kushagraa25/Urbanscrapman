import React, { lazy } from 'react'
const Hero = lazy(()=> import('../Component/Home/Hero'))
const About = lazy(() => import('../Component/Home/About') )
const Contact = lazy(()=> import('../Component/Home/Conatct'))
const SchedulePickupForm = lazy(()=> import('../Component/Home/SchedulePickupForm'))
const WorkFlow = lazy(() => import('../Component/Home/WorkFlow'))
const WhyUs = lazy(()=> import('../Component/Home/WhyUs'))
const WhatsApp = lazy(()=> import('../Component/Icons/Whatsapp'))
const Services = lazy(()=> import('../Component/Home/Services'))
const Shedules = lazy(()=> import('./Shedules'))

const Home = () => {
  return (
    <>
        <Hero />
        <SchedulePickupForm />
        <Shedules />
        <Services />
        <WorkFlow />
        <About  />
        <WhyUs />
        <WhatsApp />
        <Contact />
    </>
  )
}

export default Home

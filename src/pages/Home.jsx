import React from 'react'
import Hero from '../components/littleCompos/Hero'
import About from '../components/littleCompos/About'
import Services from '../components/littleCompos/Services'
import Experties from '../components/littleCompos/Experties'
import Tranformations from '../components/littleCompos/Tranformations'
import WhyChooseUs from '@components/littleCompos/WhychoseUs'
import Tastimonial from '../components/littleCompos/Tastimonials'
import Contact from '../components/littleCompos/Contact'


const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Experties />
      <WhyChooseUs/>
      <Tranformations />
      <Tastimonial/>
      <Contact/>
    </div>
  )
}

export default Home
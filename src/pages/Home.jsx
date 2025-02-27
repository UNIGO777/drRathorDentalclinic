import React from 'react'
import Hero from '../components/Home/Hero'
import About from '../components/Home/About'
import Services from '../components/Home/Services'
import Experties from '../components/Home/Experties'
import Tranformations from '../components/Home/Tranformations'

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Experties />
      <Tranformations />
    </div>
  )
}

export default Home
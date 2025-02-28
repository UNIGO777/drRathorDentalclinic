import About from '@components/littleCompos/About'
import Tranformations from '../components/littleCompos/Tranformations'
import WhyChooseUs from '@components/littleCompos/WhychoseUs'
import Tastimonial from '../components/littleCompos/Tastimonials'
import Contact from '../components/littleCompos/Contact'
import Pagepricecription from '@components/littleCompos/Pagepricecription'

import React from 'react'


const AboutUs = () => {
  return (
    <div>
        <Pagepricecription pageName="About us"/>
        <About pt/>
        <WhyChooseUs/>
        <Tranformations/>
        <Tastimonial/>

        <Contact/>
        
    </div>
  )
}

export default AboutUs
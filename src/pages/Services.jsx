import Pagepricecription from '@components/littleCompos/Pagepricecription';
import React from 'react'
import Tranformations from '../components/littleCompos/Tranformations'
import Servicess from '@components/littleCompos/Services';
import WhyChooseUs from '@components/littleCompos/WhychoseUs';
import Contact from '@components/littleCompos/Contact';

const Services = () => {
  return (
    <div>
      <Pagepricecription pageName="Services"/>
      <Servicess full/>
      <WhyChooseUs/>
      <Tranformations/>
      <Contact/>

    </div>
  )
}

export default Services;
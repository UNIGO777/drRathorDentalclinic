import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
  import Footer from './components/Footer.jsx'
// import About from './pages/About.jsx'
// import Services from './pages/Services.jsx'


const App = () => {
  return (
    <Router>
      <Navbar />
      <div className='mt-16 md:mt-20'></div>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} /> */}
      </Routes>
      <Footer /> 
    </Router>
  )
}

export default App
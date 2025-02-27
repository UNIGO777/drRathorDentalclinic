import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white w-full fixed top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20 lg:h-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center"
          >
            <Link to="/" className="flex items-center no-underline">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" viewBox="0 0 50 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.1655 21.0395C11.1655 10.9698 22.6178 11.6742 23.0091 18.5612C23.1395 20.8047 19.7482 20.9873 19.6177 18.7438C19.383 16.1351 14.5308 15.4046 14.5308 21.0395C14.5308 24.7177 21.7047 36.6134 27.7569 36.6134C33.2352 36.6134 39.2352 21.0134 39.2352 14.3872C39.2352 8.93505 36.0265 3.40459 28.9047 3.40459C21.9656 3.40459 19.4351 12.3525 14.5829 12.3525C12.3394 12.3525 12.3394 8.96113 14.5829 8.96113C16.8264 8.96113 20.7134 0.0132675 28.9047 0.0132675C39.0265 0.0132675 47.9483 9.56114 38.5309 29.596C26.6091 55.0309 11.1655 26.5177 11.1655 21.0395Z" fill="url(#paint0_linear_1_155)"/>
                <path d="M0 14.3872C0 2.59589 10.9827 -2.38675 18.4436 1.08283C20.4784 2.02197 19.0436 5.10025 17.0088 4.16111C11.6609 1.65675 3.36523 5.15242 3.36523 14.3872C3.36523 21.0134 9.36526 36.6134 14.8436 36.6134C20.8958 36.6134 28.0697 24.7438 28.0697 21.0395C28.0697 15.4046 23.2175 16.109 22.9827 18.7699C22.9306 19.709 22.1218 20.4134 21.1827 20.3612C18.0001 20.1786 19.7218 13.422 25.3306 13.422C30.2871 13.422 35.5045 20.2568 26.2958 32.3873C9.75657 54.2483 0 22.6569 0 14.3872Z" fill="url(#paint1_linear_1_155)"/>
                <defs>
                  <linearGradient id="paint0_linear_1_155" x1="8.78448" y1="15.9099" x2="49.2762" y2="21.7176" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#5E5EEE"/>
                    <stop offset="1" stopColor="#0B0B38"/>
                  </linearGradient>
                  <linearGradient id="paint1_linear_1_155" x1="-2.38176" y1="15.8862" x2="38.1205" y2="21.701" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#5E5EEE"/>
                    <stop offset="1" stopColor="#0B0B38"/>
                  </linearGradient>
                </defs>
              </svg>
              <span className="text-lg sm:text-xl lg:text-2xl text-gray-900 font-bold no-underline ml-2">RathoreDental<span className='text-[#5e5eee] pacifico-regular text-xl sm:text-2xl lg:text-3xl'>care</span></span>
            </Link>
          </motion.div>
          
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-10">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Link to="/" className="text-gray-700 font-semibold hover:text-gray-900 text-base xl:text-lg no-underline">Home</Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Link to="/about" className="text-gray-700 font-semibold hover:text-gray-900 text-base xl:text-lg no-underline">About Us</Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Link to="/services" className="text-gray-700 font-semibold hover:text-gray-900 text-base xl:text-lg no-underline">Services</Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Link to="/contact" className="text-gray-700 font-semibold hover:text-gray-900 text-base xl:text-lg no-underline">Contact Us</Link>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center"
          >
            <div className="flex items-center font-semibold text-[#5e5eee]">
              <a href="tel:+027899745" className='flex items-center'>
                <svg className="h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10 bg-[#5e5eee] text-white rounded-full p-2" fill="white" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
              <div className='hidden sm:flex flex-col ml-3'>
                <span className='text-sm lg:text-base text-gray-700'>Need Help?</span>
                <span className="-mt-1 text-black text-base lg:text-lg">(02) 789 9745</span>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden ml-4">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="h-6 w-6 sm:h-7 sm:w-7" 
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </motion.div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 no-underline">Home</Link>
                <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 no-underline">About Us</Link>
                <Link to="/services" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 no-underline">Services</Link>
                <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 no-underline">Contact Us</Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default Navbar
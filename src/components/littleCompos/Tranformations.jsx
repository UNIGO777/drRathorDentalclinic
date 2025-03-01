import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Plus } from 'lucide-react'
import Image1 from '../../images/transformation-img-1.jpg'
import Image2 from '../../images/transformation-img-2.jpg'
import Image3 from '../../images/transformation-img-3.jpg'
import Image4 from '../../images/transformation-img-4.jpg'
const Tranformations = () => {
    const [ref, inView] = useInView({
        threshold: 0.3,
        triggerOnce: true
    });
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                 <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-left mb-12 "
                >
                    <h2 className="text-sm flex gap-2  font-semibold text-[#5e5eee] tracking-wide uppercase"><svg className="w-5 h-5" viewBox="0 0 50 40" stroke="#5e5eee" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.1655 21.0395C11.1655 10.9698 22.6178 11.6742 23.0091 18.5612C23.1395 20.8047 19.7482 20.9873 19.6177 18.7438C19.383 16.1351 14.5308 15.4046 14.5308 21.0395C14.5308 24.7177 21.7047 36.6134 27.7569 36.6134C33.2352 36.6134 39.2352 21.0134 39.2352 14.3872C39.2352 8.93505 36.0265 3.40459 28.9047 3.40459C21.9656 3.40459 19.4351 12.3525 14.5829 12.3525C12.3394 12.3525 12.3394 8.96113 14.5829 8.96113C16.8264 8.96113 20.7134 0.0132675 28.9047 0.0132675C39.0265 0.0132675 47.9483 9.56114 38.5309 29.596C26.6091 55.0309 11.1655 26.5177 11.1655 21.0395Z" fill="url(#paint0_linear_1_155)" />
                        <path d="M0 14.3872C0 2.59589 10.9827 -2.38675 18.4436 1.08283C20.4784 2.02197 19.0436 5.10025 17.0088 4.16111C11.6609 1.65675 3.36523 5.15242 3.36523 14.3872C3.36523 21.0134 9.36526 36.6134 14.8436 36.6134C20.8958 36.6134 28.0697 24.7438 28.0697 21.0395C28.0697 15.4046 23.2175 16.109 22.9827 18.7699C22.9306 19.709 22.1218 20.4134 21.1827 20.3612C18.0001 20.1786 19.7218 13.422 25.3306 13.422C30.2871 13.422 35.5045 20.2568 26.2958 32.3873C9.75657 54.2483 0 22.6569 0 14.3872Z" fill="url(#paint1_linear_1_155)" />
                        <defs>
                            <linearGradient id="paint0_linear_1_155" x1="8.78448" y1="15.9099" x2="49.2762" y2="21.7176" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#5E5EEE" />
                                <stop offset="1" stopColor="#0B0B38" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_1_155" x1="-2.38176" y1="15.8862" x2="38.1205" y2="21.701" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#5E5EEE" />
                                <stop offset="1" stopColor="#0B0B38" />
                            </linearGradient>
                        </defs>
                    </svg>SEE THE TRANSFORMATION</h2>
                    <div className='flex flex-col  md:flex-row justify-between md:items-center '>
                        <p className="mt-2 text-4xl md:w-[70%] font-bold text-black sm:text-[3em]">
                        Stunning results that showcase the life changing impact
                        </p>

                        <motion.a
                            href="/contact"
                            whileHover={{ backgroundColor: 'black', cursor: 'pointer' }}
                            transition={{ duration: 0.1 }}
                            className="w-fit md:w-auto mt-4 md:mt-0 bg-[#5e5eee] max-h-15 flex items-center justify-center text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 font-bold rounded-full text-sm sm:text-base hover:bg-[black] cursor-pointer transition-colors duration-300"
                        >
                            Contact Now
                            <Plus className='ml-2 sm:ml-3 font-bold w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5' strokeWidth={3} />
                        </motion.a>

                    </div>

                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2  gap-8">

                    <div className='bg-white relative rounded-4xl md:h-[500px] h-[300px] grid grid-cols-2  shadow-md overflow-hidden'>
                            <img src={Image3} alt="" className=' left-0 w-full h-full border-r-2 border-gray-200' />
                            <div className='absolute  h-10  w-10  -translate-y-1/2 top-1/2  left-1/2 -translate-1/2 border-2 border-white rounded-full bg-black flex items-center justify-center'>
                                <Plus className='w-5 h-5 text-white' />
                            </div>
                            <img src={Image4} alt="" className=' right-0 w-full h-full object-cover' />
                    </div>
                    <div className='bg-white relative rounded-4xl md:h-[500px] h-[300px] grid grid-cols-2  shadow-md overflow-hidden'>
                            <img src={Image1} alt="" className=' left-0 w-full h-full border-r-2 border-gray-200' />
                            <div className='absolute  h-10  w-10  -translate-y-1/2 top-1/2  left-1/2 -translate-1/2 border-2 border-white rounded-full bg-black flex items-center justify-center'>
                                <Plus className='w-5 h-5 text-white' />
                            </div>
                            <img src={Image2} alt="" className=' right-0 w-full h-full object-cover' />
                    </div>

                    
                </div>
            </div>
        </div>
  )
}

export default Tranformations
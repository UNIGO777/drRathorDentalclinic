import React from 'react'
import { motion } from 'framer-motion'
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { Plus } from 'lucide-react';

const About = () => {
    const [ref1, inView1] = useInView({ threshold: 0.1,
        triggerOnce: true   
     });
    const [ref2, inView2] = useInView({ threshold: 0.1,
        triggerOnce: true
     });

    return (
        <div className="py-8  sm:py-12 md:py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex pt-44 flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12">

                    <motion.div
                        ref={ref1}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: inView1 ? 1 : 0, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2 relative"
                    >
                        <img
                            src="https://images.pexels.com/photos/4270362/pexels-photo-4270362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            alt="Modern dental clinic chair"
                            className="rounded-3xl sm:rounded-4xl w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover"
                        />
                        <div className='absolute  w-[30%] h-[40%] right-0 bottom-0 bg-white rounded-4xl rounded-tr-none rounded-br-none rounded-bl-none p-3 flex items-center justify-center'>
                            <div className='w-full relative h-full ml-3 mt-3 object-cover rounded-4xl'>
                                <img src='https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=1200'
                                    className='w-full h-full object-cover rounded-4xl' alt="" />
                                <div className='absolute w-full h-full bg-black/50 top-0 left-0 rounded-4xl flex items-center justify-center'>
                                    <span className='text-white text-3xl font-bold flex flex-col items-center justify-center'>25 + <br /> <span className='text-xs text-center sm:text-sm font-semibold lg:text-base'>Years of Experience</span></span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        ref={ref2}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: inView2 ? 1 : 0, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full lg:w-1/2 px-0 sm:px-2 md:px-4"
                    >
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="font-bold mb-3 sm:mb-4 text-[#5e5eee] flex items-center gap-2"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 50 40" stroke="#5e5eee" xmlns="http://www.w3.org/2000/svg">
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
                            </svg>
                            <span className='text-sm sm:text-base lg:text-lg font-bold no-underline'>ABOUT US</span>
                        </motion.h1>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-3 sm:mb-4 text-black"
                        >
                            Commitment to your smile's health and beauty
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6"
                        >
                            The goal of our practice is to provide friendly, caring dentistry, practice highest level of
                            skill and expertise, and deliver treatments with compassion. We're always committed to
                            bringing forth the best in dental care.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-8 mb-6 sm:mb-8 border-t border-gray-200 border-b py-6 sm:py-8 lg:py-10"
                        >
                            <div className="flex items-center justify-center sm:justify-start">
                                <motion.span className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#5e5eee]">
                                    {inView1 ? <CountUp end={98} duration={2} /> : 98}%
                                </motion.span>
                                <p className="text-left text-gray-500 ml-3 sm:ml-4 text-xs sm:text-sm lg:text-base">
                                    Patient Satisfaction <br /> Rate
                                </p>
                            </div>

                            <div className="flex items-center justify-center sm:justify-start">
                                <motion.span className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#5e5eee]">
                                    {inView2 ? <CountUp end={100} duration={2} /> : 100}%
                                </motion.span>
                                <p className="text-left text-gray-500 ml-3 sm:ml-4 text-xs sm:text-sm lg:text-base">
                                    Invisalign Treatment <br /> Complete
                                </p>
                            </div>
                        </motion.div>
                        <div className='flex gap-5 items-center '>
                            <motion.button
                                whileHover={{ backgroundColor: 'black', cursor: 'pointer' }}
                                transition={{ duration: 0.1 }}
                                className="w-full sm:w-auto bg-[#5e5eee] max-h-15 flex items-center justify-center text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 font-bold rounded-full text-sm sm:text-base hover:bg-[#4b4bdd] transition-colors duration-300"
                            >
                                Make About
                                <Plus className='ml-2 sm:ml-3 font-bold w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5' strokeWidth={3} />
                            </motion.button>
                            <motion.div
                                transition={{ duration: 0.1 }}
                                className="w-full sm:w-auto flex items-center justify-center px-3 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4 rounded-full"
                            >
                                <img
                                    src='https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=1200'
                                    className='w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 object-cover rounded-full'
                                    alt="Dr. John Doe"
                                />
                                <div className='flex flex-col justify-center ml-2 sm:ml-3 lg:ml-4'>
                                    <span className='text-sm sm:text-base lg:text-lg font-semibold leading-tight'>Dr. John Doe</span>
                                    <span className='text-xs sm:text-sm lg:text-base text-gray-500 mt-0.5 sm:mt-1'>Dental Surgeon</span>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default About

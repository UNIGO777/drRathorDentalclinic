import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { Star, Phone, Plus, Clock,PhoneCall, ArrowRight } from 'lucide-react';

const Hero = () => {
    const [ref, inView] = useInView({
        threshold: 0.3,
        triggerOnce: true
    });

    return (
        <div className="bg-gradient-to-r pb-10  from-[#25255d] to-[#0b0b37] min-h-screen flex items-center relative">
            <div className="absolute hidden inset-0 md:grid grid-cols-16 sm:grid-cols-24 md:grid-cols-32 grid-rows-10 sm:grid-rows-15 md:grid-rows-20 gap-0">
                {Array.from({ length: 650 }).map((_, index) => (
                    <div key={index} className="border-1 border-[#8c8c990d]"></div>
                ))}
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-12 z-10 w-full">
                <div className="grid relative grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-2 items-center">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6 sm:space-y-8 lg:space-y-10 w-full lg:w-[55vw] px-2 sm:px-4 lg:-ml-10 lg:-mt-10 lg:pr-10"
                    >
                        <div className="space-y-4 sm:space-y-7">
                            <h1 className="text-4xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight">
                                Your smile <span className='text-[#5e5eee] w-20 h-8 sm:w-24 sm:h-10 lg:w-30 lg:h-12 rounded-full inline-block'>
                                    <img loading="lazy" className='w-full h-full mt-1 object-cover rounded-full' src="https://demo.awaikenthemes.com/html-preview/primecare/images/hero-title-img-1.jpg" alt="Smile" />
                                </span> matters Expert dental care <span className='text-[#5e5eee] w-20 h-8 sm:w-24 sm:h-10 lg:w-30 lg:h-12 rounded-full inline-block'>
                                    <img loading="lazy" className='w-full h-full mt-1 object-cover rounded-full' src="https://demo.awaikenthemes.com/html-preview/primecare/images/hero-title-img-2.jpg" alt="Smile" />
                                </span>
                                <br />
                                for a bright tomorrow.
                            </h1>
                        </div>

                        <p className="text-gray-300 text-base sm:text-lg max-w-xl">
                            Experience our quality dental care focused on giving you the finest treatment possible.
                            Visit us to make a brighter, healthier smile tomorrow.
                        </p>

                        <div className="grid grid-cols-3 gap-6 sm:gap-10 border-t border-b border-[#ffffff39] py-5 w-full sm:w-[95%] lg:w-[85%]">
                            <div ref={ref} className="text-center">
                                <div className="text-2xl sm:text-[2.5em] lg:text-[2.9em] font-bold text-[#ffffff] mb-2">
                                    {inView && <CountUp end={24} suffix="x7" duration={2} />}
                                </div>
                                <div className="text-gray-300 text-sm sm:text-base">Emergency Service</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl sm:text-[2.5em] lg:text-[2.9em] font-bold text-[#ffffff] mb-2">
                                    {inView && <CountUp end={25} suffix="K+" duration={2} />}
                                </div>
                                <div className="text-gray-300">Happy Patients</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl sm:text-[2.5em] lg:text-[2.9em] font-bold text-[#ffffff] mb-2">
                                    {inView && <CountUp end={15} suffix="+" duration={2} />}
                                </div>
                                <div className="text-gray-300">Years Experience</div>
                            </div>
                        </div>

                        <div className="flex flex-col lg:w-1/2 sm:flex-col lg:flex-row gap-4 sm:gap-6">
                            <button className="px-6 sm:px-8 py-3 rounded-full hover:bg-[#00000064] flex items-center justify-center bg-[#5e5eee] text-white transition duration-300 font-semibold w-full">
                                <Phone className='w-5 h-5 mr-2' /> Book Now
                            </button>
                            <motion.button
                                whileHover={{ backgroundColor: '#0000008f', cursor: 'pointer' }}
                                transition={{ duration: 0.1 }}
                                className="px-6 sm:px-8 py-3 rounded-full flex items-center justify-center border-2 border-white text-white hover:bg-[#0000008f] transition duration-300 font-semibold w-full"
                            >
                                <Plus className='w-5 h-5 mr-2' />
                                Enquire
                            </motion.button>
                        </div>
                    </motion.div>

                    {/* Right Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative mt-0 pb-30 lg:pb-0 lg:mt-0 lg:ml-20 p-2"
                    >
                        <div className='flex justify-center items-center'>
                            <motion.div
                                className="relative w-full h-[40vh] lg:h-auto rounded-2xl shadow-xl"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            >
                                <img
                                    loading="lazy"
                                    src="https://demo.awaikenthemes.com/html-preview/primecare/images/hero-image.jpg"
                                    alt="Professional Dental Care"
                                    className="w-full h-full object-cover rounded-4xl"
                                />
                                <div className="absolute inset-0 bg-[#ffffffb6] opacity-0 hover:opacity-30 transition-opacity duration-300 rounded-4xl"></div>
                            </motion.div>

                            <motion.div
                                animate={{
                                    opacity: 1,
                                    x: [-30, 0, -30],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                                className="absolute -bottom-6 w-[80%] lg:w-[20vw] h-[15vh]  sm:h-[18vw] md:h-[13vw] lg:h-[10vw] top-[60%] lg:top-1/2 left-1/2 lg:left-0 -translate-x-1/2 lg:-translate-x-0  bg-white p-4 sm:p-6 rounded-xl "
                            >
                                <div className="flex items-center gap-2 mb-2">
                                    {Array.from({ length: 5 }).map((_, index) => (
                                        <Star key={index} className="w-4 sm:w-5 h-4 sm:h-5 text-white" fill="#5e5eee" stroke="#5e5eee" />
                                    ))}
                                </div>
                                <div>
                                    <p className="text-gray-800 font-bold text-base sm:text-lg">Best Service & 5 Star</p>
                                    <p className="text-gray-500 text-sm sm:text-base">Hospital are crucial institutions in our society</p>
                                </div>
                            </motion.div>

                        </div>
                    </motion.div>
                    

                    

                </div>
                
            </div>
            {/* Appointment Hours Section */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute -bottom-45 mb-2 sm:-bottom-55 lg:-bottom-35 right-0 w-[90%] left-1/2 -translate-x-1/2 bg-white rounded-4xl p-4 sm:p-6 lg:p-10"
            >
                <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-4">
                    <div className="flex items-center p-2 sm:p-4 gap-3 w-full lg:w-auto">
                        <div className="bg-[#5e5eee] p-2 sm:p-3 rounded-xl">
                            <PhoneCall className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" fill="white" stroke="none" viewBox="0 0 24 24"/>
                        </div>
                        <div>
                            <p className="text-gray-800 font-bold text-sm sm:text-base lg:text-lg">Opening Hours</p>
                            <p className="text-gray-500 text-xs sm:text-sm">Mon to Fri 9:00 AM to 5:00 PM</p>
                        </div>
                    </div>

                    <span className='hidden lg:block border-r border-gray-300 h-20'/>

                    <div className="flex items-center p-2 sm:p-4 gap-3 w-full lg:w-auto">
                        <div className="bg-[#5e5eee] p-2 sm:p-3 rounded-xl">
                            <Clock className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"/>
                        </div>
                        <div>
                            <p className="text-gray-800 font-bold text-sm sm:text-base lg:text-lg">Opening Hours</p>
                            <p className="text-gray-500 text-xs sm:text-sm">Mon to Fri 9:00 AM to 5:00 PM</p>
                        </div>
                    </div>

                    <span className='hidden lg:block border-r border-gray-300 h-20'/>

                    <motion.button 
                        whileHover={{backgroundColor: 'black', cursor: 'pointer'}} 
                        transition={{duration: 0.1}} 
                        className="w-full lg:w-auto bg-[#5e5eee] flex items-center justify-center text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 font-bold rounded-full text-sm sm:text-base hover:bg-[#4b4bdd] transition-colors duration-300"
                    >
                        Make An Appointment
                        <ArrowRight className='ml-2 font-bold w-4 h-4 sm:w-5 sm:h-5 mr-2'/>
                    </motion.button>
                </div>
            </motion.div>
        </div>
    );
};

export default Hero;

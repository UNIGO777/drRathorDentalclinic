import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from '../../images/57FEEE61-079D-4512-8A49-0D68B4AAB830.png'

const WhyChooseUs = () => {
    const [ref1, inView1] = useInView({
        threshold: 0.1,
        triggerOnce: true
    });

    const [ref2, inView2] = useInView({
        threshold: 0.1,
        triggerOnce: true
    });

    const [ref3, inView3] = useInView({
        threshold: 0.1,
        triggerOnce: true
    });

    return (
        <div className="py-10 md:py-0  bg-[#0b0b37] ">
            <div className="container mx-auto px-4 sm:px-6 lg:px-2">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                    
                    <motion.div
                        ref={ref1}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: inView1 ? 1 : 0, x: inView1 ? 0 : -50 }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2"
                    >
                         <h2 className="text-sm mb-5 flex gap-2 font-semibold text-white tracking-wide uppercase">
                        <svg className="w-5 h-5" viewBox="0 0 50 40" stroke="" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.1655 21.0395C11.1655 10.9698 22.6178 11.6742 23.0091 18.5612C23.1395 20.8047 19.7482 20.9873 19.6177 18.7438C19.383 16.1351 14.5308 15.4046 14.5308 21.0395C14.5308 24.7177 21.7047 36.6134 27.7569 36.6134C33.2352 36.6134 39.2352 21.0134 39.2352 14.3872C39.2352 8.93505 36.0265 3.40459 28.9047 3.40459C21.9656 3.40459 19.4351 12.3525 14.5829 12.3525C12.3394 12.3525 12.3394 8.96113 14.5829 8.96113C16.8264 8.96113 20.7134 0.0132675 28.9047 0.0132675C39.0265 0.0132675 47.9483 9.56114 38.5309 29.596C26.6091 55.0309 11.1655 26.5177 11.1655 21.0395Z" fill="url(#paint0_linear_1_155)" />
                            <path d="M0 14.3872C0 2.59589 10.9827 -2.38675 18.4436 1.08283C20.4784 2.02197 19.0436 5.10025 17.0088 4.16111C11.6609 1.65675 3.36523 5.15242 3.36523 14.3872C3.36523 21.0134 9.36526 36.6134 14.8436 36.6134C20.8958 36.6134 28.0697 24.7438 28.0697 21.0395C28.0697 15.4046 23.2175 16.109 22.9827 18.7699C22.9306 19.709 22.1218 20.4134 21.1827 20.3612C18.0001 20.1786 19.7218 13.422 25.3306 13.422C30.2871 13.422 35.5045 20.2568 26.2958 32.3873C9.75657 54.2483 0 22.6569 0 14.3872Z" fill="url(#paint1_linear_1_155)" />
                            <defs>
                                <linearGradient id="paint0_linear_1_155" x1="8.78448" y1="15.9099" x2="49.2762" y2="21.7176" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#5E5EEE" />
                                    <stop offset="1" stopColor="#0B0B38" />
                                </linearGradient>
                                <linearGradient id="paint1_linear_1_155" x1="8.78448" y1="15.9099" x2="49.2762" y2="21.7176" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#5E5EEE" />
                                    <stop offset="1" stopColor="#0B0B38" />
                                </linearGradient>
                            </defs>
                        </svg>
                        Why choose us
                    </h2>
                        <h2 className="text-4xl md:text-[3em] font-bold text-white mb-4">
                            Excellence results you can trust
                        </h2>
                        <p className="text-gray-400 mb-6">
                            Providing comprehensive dental care with proven, effective treatment plans, helping to maintain and establish confidence in life's simple smiles.
                        </p>
                        <motion.button 
                            whileHover={{ scale: 0.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-[#5e5eee] text-white px-6 py-3 rounded-full hover:bg-[#4b4bdd] transition duration-300"
                        >
                            Get Started
                        </motion.button>
                    </motion.div>

                    <motion.div
                        className="pt-20 relative"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <motion.img 
                            loading='lazy' 
                            className='w-[300px] md:w-[500px] relative z-20' 
                            src={Image} 
                            alt="" 
                            initial={{ scale: 0 }} 
                            animate={{ scale: 1 }} 
                            transition={{ duration: 0.5, delay: 0.5 }} 
                        />
                        <div className='absolute top-5 left-[50%] z-10 -translate-x-1/2 w-[350px] h-[350px] rounded-full p-10 bg-gray-400/50'>
                            <div className=' z-10  w-full h-full rounded-full bg-gray-300/50'></div>
                        </div>
                    </motion.div>

                    <div
                        ref={ref2}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: inView2 ? 1 : 0, x: inView2 ? 0 : 50 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full lg:w-1/2"
                    >
                        <div className="space-y-6">
                            <div 
                                ref={ref3}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: inView3 ? 1 : 0, y: inView3 ? 0 : 20 }}
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.5 }}
                                className=" p-6 rounded-xl shadow-lg"
                            >
                                <div className="flex items-center gap-4">
                                    <div 
                                        whileHover={{ rotate: 10 }}
                                        className="bg-[#5e5eee] p-3 rounded-lg"
                                    >
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-white">Emergency Services</h3>
                                        <p className="text-gray-300">Prompt and reliable emergency dental care, available when you need it.</p>
                                    </div>
                                </div>
                            </div>
                            <div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: inView3 ? 1 : 0, y: inView3 ? 0 : 20 }}
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className=" p-6 py-8  shadow-lg border-b border-t border-gray-200/50"
                            >
                                <div className="flex items-center gap-4">
                                    <div 
                                        whileHover={{ rotate: -10 }}
                                        className="bg-[#5e5eee] p-3 rounded-lg"
                                    >
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.318a4.5 4.5 0 016.364 0L20.364 6.318a4.5 4.5 0 010 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364L5.636 4.318a4.5 4.5 0 016.364 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-white">Comprehensive Care</h3>
                                        <p className="text-gray-300">Offering a wide range of dental services to meet all your oral health needs.</p>
                                    </div>
                                </div>
                            </div>
                            <div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: inView3 ? 1 : 0, y: inView3 ? 0 : 20 }}
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className=" p-6 rounded-xl shadow-lg "
                            >
                                <div className="flex items-center gap-4">
                                    <div 
                                        whileHover={{ rotate: 10 }}
                                        className="bg-[#5e5eee] p-3 rounded-lg"
                                    >
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2a10 10 0 100 20 10 10 0 000-20zm-1 15h-2v-2h2v2zm0-4h-2V7h2v6zm4 4h-2v-2h2v2zm0-4h-2V7h2v6z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-white">Preventive Care</h3>
                                        <p className="text-gray-300">Regular check-ups and cleanings to maintain optimal oral health and prevent issues.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;

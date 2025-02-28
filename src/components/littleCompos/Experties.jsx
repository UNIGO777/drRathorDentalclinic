import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Experties = () => {
    const [ref, inView] = useInView({
        threshold: 0.3,
        triggerOnce: true
    });

    return (
        <div ref={ref} className="bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                <motion.div
                    
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-left md:mb-12"
                >
                    <h2 className="text-sm flex gap-2 font-semibold text-[#5e5eee] tracking-wide uppercase">
                        <svg className="w-5 h-5" viewBox="0 0 50 40" stroke="#5e5eee" xmlns="http://www.w3.org/2000/svg">
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
                        Expertise
                    </h2>
                    <h3 className="mt-2 text-4xl md:text-[3em] w-full font-extrabold text-gray-900">
                        Commitment to your oral health and smile aesthetics
                    </h3>
                    <p className="mt-4 mb-10 w-full text-xl text-gray-500">
                        A specialist doctor is available for any need. We are available in 150+ locations with modern facilities and experienced doctors.
                    </p>
                    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
                        <div className="flex-1">
                            <ul className="space-y-4 border-t border-gray-200 py-10">
                                <li className="flex items-start mb-10">
                                    <div className="flex-shrink-0 bg-[#5e5eee] mt-1 rounded-md p-1">
                                        <svg className="h-2 w-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="ml-3 font-bold text-base leading-6 text-gray-700">
                                            The needs of our patients always come first
                                        </h3>
                                        <p className="ml-3 text-base leading-6 text-gray-700">
                                            A specialist doctor is available for any need. We are available in 150+ locations with modern facilities and experienced doctors.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 bg-[#5e5eee] mt-1 rounded-md p-1">
                                        <svg className="h-2 w-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="ml-3 font-bold text-base leading-6 text-gray-700">
                                            A world leader in eye education
                                        </h3>
                                        <p className="ml-3 text-base leading-6 text-gray-700">
                                            We make it a priority to educate ophthalmologists from around the world and also share the latest advances in patient care and services.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="flex items-center justify-center"
                >
                    <div className="relative rounded-4xl flex items-center justify-center">
                        <img src="https://images.pexels.com/photos/3845983/pexels-photo-3845983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Expertise" className="w-full md:w-[90%] h-[500px] rounded-4xl" />
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Experties;

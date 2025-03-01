import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useInView } from "react-intersection-observer";


const Contact = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <section className="relative px-4 sm:px-8 md:px-16 py-8 sm:py-12 md:py-24">

            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="text-left mb-8 sm:mb-12"
            >
                <h2 className="text-sm mb-3 flex gap-2 font-semibold text-[#5e5eee] tracking-wide uppercase"><svg className="w-5 h-5" viewBox="0 0 50 40" stroke="#5e5eee" xmlns="http://www.w3.org/2000/svg">
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
                </svg>Contact Us</h2>
                <div className='flex flex-col gap-4 md:flex-row md:justify-between md:items-center'>
                    <p className="text-3xl sm:text-4xl md:text-[3em] font-bold text-black md:w-1/2">
                        Book your dental visit online with primecare
                    </p>

                    <motion.h1
                        whileHover={{ backgroundColor: 'black', cursor: 'pointer' }}
                        transition={{ duration: 0.1 }}
                        className="text-sm sm:text-base md:w-1/2 sm:p-6 rounded-full cursor-pointer transition-colors duration-300"
                    >
                        Ready to take the next step towards a healthier smile? Use our easy online booking system to schedule your dental appointment. Simply select a convenient date and time, provide some basic information, and we'll handle the rest.
                    </motion.h1>
                </div>
            </motion.div>

            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="max-w-7xl mx-auto"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.2 }}
                        className="space-y-7 w-full md:w-[30vw] md:pt-10"
                    >
                        <div className="bg-[#0b0b37] text-white p-6 sm:p-10 rounded-3xl sm:rounded-4xl overflow-hidden">
                            <h3 className="text-lg sm:text-xl font-semibold mb-4 pb-4 border-b-2 border-white/70">Working Hours</h3>
                            <div className="space-y-4 flex flex-col justify-between">
                                <div className="flex justify-between text-sm sm:text-base">
                                    <span>Monday To Friday</span>
                                    <span>8am - 9pm</span>
                                </div>
                                
                                <div className="flex justify-between text-sm sm:text-base">
                                    <span>Sunday</span>
                                    <span>Closed</span>
                                </div>
                            </div>
                        </div>

                       
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.4 }}
                        className="bg-white p-6 sm:p-8 rounded-xl "
                    >
                        <form className="space-y-4 sm:space-y-6">
                        <h1 className="uppercase">rathoredentalclinic@gmail.com</h1>
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={inView ? { opacity: 1, x: 0 } : {}}
                                transition={{ delay: 0.5 }}
                            >
                                <label className="block text-gray-700 text-sm mb-2">Full Name</label>
                                <input type="text" className="w-full p-2 sm:p-3 border rounded-full text-sm" />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={inView ? { opacity: 1, x: 0 } : {}}
                                transition={{ delay: 0.6 }}
                            >
                                <label className="block text-gray-700 text-sm mb-2">Email</label>
                                <input type="email" className="w-full p-2 sm:p-3 border rounded-full text-sm" />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={inView ? { opacity: 1, x: 0 } : {}}
                                transition={{ delay: 0.7 }}
                            >
                                <label className="block text-gray-700 text-sm mb-2">Phone</label>
                                <input type="tel" className="w-full p-2 sm:p-3 border rounded-full text-sm" />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={inView ? { opacity: 1, x: 0 } : {}}
                                transition={{ delay: 0.8 }}
                            >
                                <label className="block text-gray-700 text-sm mb-2">Message</label>
                                <textarea className="w-full p-2 sm:p-3 border rounded-md  sm:h-32 text-sm" />
                            </motion.div>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 400 }}
                                className="w-full bg-indigo-600 text-white py-2 sm:py-3 rounded-full hover:bg-indigo-700 transition-colors text-sm sm:text-base"
                            >
                                Send Message
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}

export default Contact

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Footer = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <>
    <div className="bg-gradient-to-r md:pb-10  from-[#25255d] to-[#0b0b37] text-white md:py-10 px-5 md:px-10 lg:px-0">
    <motion.footer
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className=" text-white py-10 px-5 md:px-10 lg:px-20"
    >
      {/* Footer Container */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Logo & Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="w-[30vw] space-y-5"
        >
           
          <h2 className="text-2xl font-bold  flex flex-col md:flex-row  md:items-center">
          <svg className="w-12 h-12 text-white" viewBox="0 0 50 40" fill="#fffff" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.1655 21.0395C11.1655 10.9698 22.6178 11.6742 23.0091 18.5612C23.1395 20.8047 19.7482 20.9873 19.6177 18.7438C19.383 16.1351 14.5308 15.4046 14.5308 21.0395C14.5308 24.7177 21.7047 36.6134 27.7569 36.6134C33.2352 36.6134 39.2352 21.0134 39.2352 14.3872C39.2352 8.93505 36.0265 3.40459 28.9047 3.40459C21.9656 3.40459 19.4351 12.3525 14.5829 12.3525C12.3394 12.3525 12.3394 8.96113 14.5829 8.96113C16.8264 8.96113 20.7134 0.0132675 28.9047 0.0132675C39.0265 0.0132675 47.9483 9.56114 38.5309 29.596C26.6091 55.0309 11.1655 26.5177 11.1655 21.0395Z" fill="#ffffff"/>
                <path d="M0 14.3872C0 2.59589 10.9827 -2.38675 18.4436 1.08283C20.4784 2.02197 19.0436 5.10025 17.0088 4.16111C11.6609 1.65675 3.36523 5.15242 3.36523 14.3872C3.36523 21.0134 9.36526 36.6134 14.8436 36.6134C20.8958 36.6134 28.0697 24.7438 28.0697 21.0395C28.0697 15.4046 23.2175 16.109 22.9827 18.7699C22.9306 19.709 22.1218 20.4134 21.1827 20.3612C18.0001 20.1786 19.7218 13.422 25.3306 13.422C30.2871 13.422 35.5045 20.2568 26.2958 32.3873C9.75657 54.2483 0 22.6569 0 14.3872Z" fill="#ffffff"/>
                <defs>
                  <linearGradient id="paint0_linear_1_155" x1="8.78448" y1="15.9099" x2="49.2762" y2="21.7176" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#ffffff"/>
                    <stop offset="1" stopColor="#ffffff"/>
                  </linearGradient>
                  <linearGradient id="paint1_linear_1_155" x1="-2.38176" y1="15.8862" x2="38.1205" y2="21.701" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#ffffff"/>
                    <stop offset="1" stopColor="#ffffff"/>
                  </linearGradient>
                </defs>
              </svg>
              <span className="text-lg sm:text-xl lg:text-2xl text-white font-bold no-underline mt-2 md:mt-0 md:ml-2">RathoreDental<span className='text-[#5e5eee] pacifico-regular text-xl sm:text-2xl lg:text-3xl'>care</span></span>
          </h2>
          <p className="text-white  mt-3 lgxt-sm">
            Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document.
          </p>
          <p className="mt-3 text-sm font-semibold">support@domain.com</p>
          <p className="text-sm font-semibold">(+0)789345601</p>
        </motion.div>

        {/* Quick Links */}
        
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.4 }}
          className=" md:text-center"
        >
          <h3 className="text-xl font-bold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-white  text-lg">
            <li className="hover:text-[#A685FF] transition cursor-pointer">Home</li>
            <li className="hover:text-[#A685FF] transition cursor-pointer">About Us</li>
            <li className="hover:text-[#A685FF] transition cursor-pointer">Services</li>
            <li className="hover:text-[#A685FF] transition cursor-pointer">Appointment</li>
          </ul>
        </motion.div>

        {/* Social Media */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.6 }}
          className=" md:text-center"
        >
          <h3 className="text-xl font-bold mb-3">Socials</h3>
          <ul className="space-y-2 text-white  text-lg">
            <li className="hover:text-[#A685FF] transition cursor-pointer">Facebook</li>
            <li className="hover:text-[#A685FF] transition cursor-pointer">Twitter</li>
            <li className="hover:text-[#A685FF] transition cursor-pointer">LinkedIn</li>
            <li className="hover:text-[#A685FF] transition cursor-pointer">Instagram</li>
          </ul>
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.8 }}
          className=" md:text-center"
        >
          <h3 className="text-xl font-bold mb-3">Our Services</h3>
          <ul className="space-y-2 text-white  text-lg">
            <li className="hover:text-[#A685FF] transition cursor-pointer">General Dentistry</li>
            <li className="hover:text-[#A685FF] transition cursor-pointer">Cosmetic Dentistry</li>
            <li className="hover:text-[#A685FF] transition cursor-pointer">Restorative Dentistry</li>
            <li className="hover:text-[#A685FF] transition cursor-pointer">Routine Cleanings</li>
          </ul>
        </motion.div>
      </div>

      {/* Bottom Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 1 }}
        className="mt-10 text-center text-white  text-lg"
      >
        <hr className="border-gray-600 mb-4" />
        <p>Copyright © 2025 All Rights Reserved.</p>
      </motion.div>
    </motion.footer>
    </div>
    </>
  );
};

export default Footer;

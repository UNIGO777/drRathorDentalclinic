import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Carousel } from 'antd';
import { Star, ChevronLeft, ChevronRight, Plus } from 'lucide-react';

const testimonials = [
    {
        name: "Aarav Patel",
        text: "Rathore Dental Clinic exceeded my expectations! The staff was incredibly welcoming and professional. Dr. Rathore explained every step of my treatment, which made me feel at ease. The clinic is modern and well-equipped, ensuring a comfortable experience. I highly recommend them for anyone seeking top-notch dental care.",
        rating: 5,
        image: "https://randomuser.me/api/portraits/men/3.jpg"
    },
    {
        name: "Priya Sharma",
        text: "I had a wonderful experience at Rathore Dental Clinic. The team is friendly and attentive, and Dr. Rathore is a true expert in his field. The clinic's ambiance is calming, and the service is exceptional. My dental procedure was painless, and the results are fantastic. I am grateful for their excellent care.",
        rating: 5,
        image: "https://randomuser.me/api/portraits/women/3.jpg"
    },
    {
        name: "Vikram Singh",
        text: "Rathore Dental Clinic is the best dental clinic I have visited. The staff is courteous and knowledgeable, and Dr. Rathore's expertise is evident in his work. The clinic is clean and well-maintained, making each visit pleasant. I am extremely satisfied with the treatment I received and would recommend them to everyone.",
        rating: 5,
        image: "https://randomuser.me/api/portraits/men/4.jpg"
    }
];

const Testimonials = () => {
    const [ref, inView] = useInView({
        threshold: 0.3,
        triggerOnce: true
    });

    const carouselRef = React.useRef();

    const handleNext = () => {
        carouselRef.current.next();
    };

    const handlePrev = () => {
        carouselRef.current.prev();
    };

    return (
        <div className="bg-[#0b0b37] py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 mb-[20vh]">
            <div className="max-w-7xl mx-auto relative">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-left mb-8 sm:mb-12 relative"
                >
                    <h2 className="text-xs sm:text-sm flex gap-2 font-semibold text-[#5e5eee] tracking-wide uppercase">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 50 40" stroke="#5e5eee" xmlns="http://www.w3.org/2000/svg">
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
                        TESTIMONIAL
                    </h2>
                    <div className='flex flex-col md:flex-row justify-between md:items-center gap-4 md:gap-8'>
                        <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-[3em] text-white md:w-[70%] font-bold">
                            Real stories of exceptional care and transformative smiles
                        </h2>

                        <motion.button
                            whileHover={{ backgroundColor: 'black', cursor: 'pointer' }}
                            transition={{ duration: 0.1 }}
                            className="w-fit md:w-auto bg-[#5e5eee] max-h-15 flex items-center justify-center text-white hover:border-2 hover:border-white px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 font-bold rounded-full text-xs sm:text-sm md:text-base hover:bg-[black] cursor-pointer transition-colors duration-300"
                        >
                            Contact Us Now
                            <Plus className='ml-2 sm:ml-3 font-bold w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5' strokeWidth={3} />
                        </motion.button>
                    </div>
                </motion.div>

                <div className="relative">
                    <Carousel
                        ref={carouselRef}
                        infinite={true}
                        autoplay={true}
                        autoplaySpeed={3000}
                        className="pb-12 h-[30vh]"
                    >
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="px-2 sm:px-4 mt-6 sm:mt-10">
                                <div className="bg-white p-6 sm:p-8 md:p-10 lg:p-14 rounded-2xl sm:rounded-4xl shadow-sm">
                                    <svg width="40" height="40" className='mb-6 sm:mb-10 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12' viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_31_14925)">
                                            <path d="M0.76082 34.4668C1.79174 39.351 5.6485 45.1383 11.6797 46.3031C13.1609 46.5738 14.6828 46.5272 16.1447 46.1665C17.6066 45.8057 18.9754 45.139 20.1607 44.2103C21.5085 43.1997 22.6016 41.8883 23.353 40.3805C24.1044 38.8728 24.4933 37.2104 24.4887 35.5258C24.4842 33.8412 24.0863 32.181 23.3267 30.6774C22.5672 29.1737 21.467 27.8682 20.1138 26.8649C18.7225 25.7805 17.0838 25.0585 15.3447 24.7637C13.6056 24.4689 11.8204 24.6105 10.1495 25.1758C10.0685 25.2051 9.98145 25.2138 9.89623 25.201C9.81101 25.1883 9.7303 25.1546 9.66137 25.1029C9.59067 25.0498 9.53428 24.98 9.49727 24.8998C9.46025 24.8195 9.44378 24.7313 9.44934 24.6431C9.93712 13.8465 19.6203 9.62547 21.5566 8.88871C21.86 8.77355 22.1153 8.55849 22.2802 8.27894C22.4451 7.99939 22.51 7.67201 22.464 7.35069C22.464 7.35069 22.217 5.53778 22.2167 5.53566C22.1835 5.32209 22.1032 5.1186 21.9815 4.93996C21.8598 4.76133 21.6999 4.61204 21.5133 4.50294C21.3268 4.39384 21.1182 4.32767 20.9029 4.30924C20.6875 4.29081 20.4708 4.32058 20.2684 4.39638C-1.82796 13.3669 -0.249308 29.6803 0.76082 34.4668ZM20.6901 5.91186L20.902 7.46592C18.5964 8.36254 8.41149 12.9743 7.88744 24.5725C7.8699 24.9146 7.93672 25.2557 8.08202 25.5658C8.22731 25.876 8.44663 26.1457 8.72067 26.3511C8.9947 26.5566 9.31504 26.6915 9.65349 26.744C9.99193 26.7966 10.3381 26.7651 10.6615 26.6523C12.0885 26.1721 13.6123 26.0536 15.0963 26.3073C16.5804 26.5611 17.9782 27.1793 19.1645 28.1064C20.3271 28.9642 21.2727 30.0823 21.9257 31.3711C22.5787 32.6599 22.921 34.0836 22.9252 35.5284C22.9293 36.9732 22.5952 38.3989 21.9496 39.6914C21.3039 40.9839 20.3647 42.1074 19.2071 42.9718C18.1976 43.7658 17.031 44.3366 15.7845 44.6463C14.5381 44.956 13.24 44.9977 11.9763 44.7685C6.64506 43.7391 3.2183 38.5394 2.29061 34.144C1.34614 29.6696 -0.109449 14.439 20.6901 5.91186Z" fill="#5E5EEE" />
                                            <path d="M16.1701 41.797C16.2662 41.7604 16.3541 41.7052 16.4288 41.6345C16.5036 41.5638 16.5636 41.4791 16.6055 41.3852C16.6474 41.2913 16.6704 41.19 16.6731 41.0872C16.6758 40.9844 16.6581 40.8821 16.6212 40.7861C16.5842 40.6901 16.5287 40.6024 16.4577 40.5279C16.3868 40.4534 16.3019 40.3937 16.2078 40.3522C16.1137 40.3106 16.0124 40.288 15.9095 40.2857C15.8067 40.2834 15.7045 40.3014 15.6086 40.3387C15.5794 40.3502 12.7002 41.4265 11.0255 39.3551C10.8953 39.1938 10.7063 39.0909 10.5002 39.069C10.2941 39.047 10.0877 39.1079 9.92645 39.2381C9.7652 39.3683 9.66228 39.5573 9.64034 39.7634C9.6184 39.9695 9.67924 40.1759 9.80947 40.3372C12.1918 43.2835 16.0086 41.8592 16.1701 41.797Z" fill="#5E5EEE" />
                                            <path d="M37.4609 46.3031C38.9422 46.5738 40.464 46.5272 41.9259 46.1665C43.3879 45.8057 44.7567 45.139 45.942 44.2104C47.2897 43.1997 48.3829 41.8883 49.1342 40.3805C49.8856 38.8728 50.2745 37.2104 50.27 35.5258C50.2654 33.8413 49.8675 32.181 49.108 30.6774C48.3484 29.1737 47.2483 27.8682 45.895 26.8649C44.5038 25.7805 42.8651 25.0585 41.1259 24.7637C39.3868 24.4689 37.6017 24.6105 35.9308 25.1758C35.8497 25.2051 35.7627 25.2138 35.6775 25.2011C35.5923 25.1883 35.5115 25.1546 35.4426 25.1029C35.3719 25.0499 35.3155 24.9801 35.2785 24.8998C35.2415 24.8195 35.225 24.7313 35.2306 24.6431C35.7184 13.8465 45.4015 9.62548 47.3378 8.88871C47.6413 8.77356 47.8965 8.5585 48.0614 8.27895C48.2264 7.9994 48.2912 7.67202 48.2453 7.3507C48.2453 7.3507 47.9982 5.53779 47.998 5.53567C47.9648 5.3221 47.8844 5.11861 47.7628 4.93997C47.6411 4.76134 47.4812 4.61205 47.2946 4.50295C47.108 4.39385 46.8995 4.32767 46.6841 4.30925C46.4688 4.29081 46.252 4.32058 46.0496 4.39639C23.9533 13.3669 25.5319 29.6803 26.5421 34.4668C27.573 39.351 31.4297 45.1383 37.4609 46.3031ZM46.4714 5.91187L46.6832 7.46592C44.3776 8.36255 34.1928 12.9743 33.6687 24.5725C33.6512 24.9146 33.718 25.2557 33.8633 25.5658C34.0086 25.876 34.2279 26.1457 34.5019 26.3511C34.776 26.5566 35.0963 26.6915 35.4347 26.744C35.7732 26.7966 36.1194 26.7651 36.4428 26.6524C37.8697 26.1721 39.3936 26.0536 40.8776 26.3073C42.3617 26.5611 43.7595 27.1793 44.9458 28.1064C46.1083 28.9642 47.054 30.0823 47.707 31.3711C48.36 32.6599 48.7023 34.0836 48.7064 35.5284C48.7106 36.9732 48.3764 38.3989 47.7308 39.6914C47.0852 40.9839 46.146 42.1074 44.9883 42.9718C43.9788 43.7658 42.8123 44.3366 41.5658 44.6463C40.3193 44.956 39.0213 44.9977 37.7575 44.7685C32.4263 43.7392 28.9995 38.5394 28.0719 34.144C27.1274 29.6696 25.6718 14.4391 46.4714 5.91187Z" fill="#5E5EEE" />
                                            <path d="M41.9513 41.797C42.0474 41.7604 42.1354 41.7052 42.2101 41.6345C42.2848 41.5638 42.3449 41.4791 42.3868 41.3852C42.4287 41.2913 42.4516 41.19 42.4543 41.0872C42.457 40.9844 42.4394 40.8821 42.4024 40.7861C42.3655 40.6901 42.3099 40.6024 42.239 40.5279C42.1681 40.4534 42.0831 40.3937 41.989 40.3522C41.895 40.3106 41.7936 40.288 41.6908 40.2857C41.588 40.2834 41.4857 40.3014 41.3899 40.3387C41.3607 40.3502 38.4815 41.4265 36.8068 39.3551C36.6734 39.1984 36.485 39.0989 36.2804 39.0772C36.0758 39.0555 35.8706 39.1131 35.7073 39.2383C35.6275 39.3028 35.5612 39.3824 35.5121 39.4725C35.4631 39.5626 35.4322 39.6615 35.4214 39.7636C35.4106 39.8656 35.42 39.9688 35.449 40.0672C35.4781 40.1656 35.5262 40.2574 35.5907 40.3372C37.973 43.2835 41.7899 41.8592 41.9513 41.797Z" fill="#5E5EEE" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_31_14925">
                                                <rect width="50" height="50" fill="white" transform="matrix(-1 0 0 -1 50.2686 50.3916)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    
                                    <p className="text-gray-600 text-base sm:text-lg md:text-xl font-bold italic">{testimonial.text}</p>
                                    <div className="flex items-center mt-6 sm:mt-8 md:mt-10">
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full mr-3 sm:mr-4"
                                        />
                                        <div>
                                            <h3 className="text-base sm:text-lg font-semibold">{testimonial.name}</h3>
                                            <div className="flex">
                                                {[...Array(testimonial.rating)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400"
                                                        fill="currentColor"
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Carousel>

                    <div className='absolute flex gap-2 sm:gap-4 right-0 top-16 sm:top-24 -translate-y-1/2 -translate-x-1/2'>
                        <button 
                            onClick={handlePrev}
                            className="bg-[#5e5eee] hover:bg-black transition-colors duration-300 p-2 sm:p-3 rounded-lg sm:rounded-xl text-white"
                        >
                            <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
                        </button>

                        <button 
                            onClick={handleNext}
                            className="bg-[#5e5eee] hover:bg-black transition-colors duration-300 p-2 sm:p-3 rounded-lg sm:rounded-xl text-white"
                        >
                            <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;

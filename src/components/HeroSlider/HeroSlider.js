import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination } from 'swiper';

export default function HeroSlider() {
    SwiperCore?.use([Autoplay])
    return (
        <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            loop={true}
            lazy={"true"}
            pagination={{ clickable: true }}
            autoplay={{
                delay: 3000
            }}

        >
            {["bg-banner-1", "bg-banner-2", "bg-banner-3", "bg-banner-2"].map((item, index) => {
                return (
                    <SwiperSlide
                        key={index}
                    >
                        <div className={`${item} bg-cover bg-no-repeat bg-center pb-[120px] px-3 md:px-5 lg:px-[40px] xl:px-[91px] py-7 lg:py-[50px] xl:py-[100px]`}>
                            <div className='md:flex'>
                                <motion.div className='lg:w-4/12 pt-48 text-white text-center md:text-start'
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: false, amount: 0.5 }}
                                    transition={{ duration: .5 }}
                                    variants={
                                        {
                                            hidden: { opacity: 0, x: -50 },
                                            visible: { opacity: 1, x: 0 }
                                        }
                                    }
                                >
                                    <h1 className='text-[40px]'>Lorem Ipsum is simply dummy text of the printing</h1>
                                    <p>Lorem Ipsum is simply dummy text of the.</p>
                                    <div className='mt-5 lg:flex'>
                                        <button className='btn bg-[#BCB2A0] rounded-none px-16 border-0'>shop now</button>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </SwiperSlide>
                )
            })

            }

        </Swiper>
    )
}
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import collection1 from '../../banner-images/collection-1.jpg'
import collection2 from '../../banner-images/collection-2.jpg'
import collection3 from '../../banner-images/collection-3.jpg'
import collection4 from '../../banner-images/collection-4.jpg'
import collection5 from '../../banner-images/collection-5.jpg'
import collection6 from '../../banner-images/collection-6.jpg'
export default function Collection() {
    SwiperCore?.use([Autoplay])
    return (
        <div className='px-3 md:px-5 lg:px-[40px] xl:px-[91px] py-7 lg:py-[50px] xl:py-[100px]'>
            <h2 className='uppercase text-[28px] text-start pb-6 xl:pb-12'>our collections</h2>
            <Swiper
                modules={[Pagination]}
                slidesPerView={3}
                loop={true}
                lazy={"true"}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 3000
                }}
                breakpoints={{
                    280: {
                        slidesPerView: 1,
                        spaceBetween: 15,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
            >
                {
                    [`${collection1}`, `${collection2}`, `${collection3}`, `${collection4}`, `${collection5}`, `${collection6}`].map((collection, index) => {
                        return (
                            <SwiperSlide
                                key={index}
                            >
                                <div className='mb-20'>
                                    <img src={collection} alt="Collection_image" className='h-[370px] w-full' />
                                    <h3>Flower</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply</p>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>
        </div>
    )
}
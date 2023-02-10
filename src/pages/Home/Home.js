import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import Collection from '../../components/Collection/Collection';
import DiscountBanner from '../../components/DiscountBanner/DiscountBanner';
import Blog from '../../components/Blog/Blog';
export default function Home() {
    SwiperCore?.use([Autoplay])
    return (
        <div>
            <div>
                <Swiper
                    modules={[Pagination]}
                    slidesPerView={1}
                    loop={true}
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
                                        <div className='lg:w-4/12 pt-48 text-white text-center md:text-start'>
                                            <h1 className='text-[40px]'>Lorem Ipsum is simply dummy text of the printing {index}</h1>
                                            <p>Lorem Ipsum is simply dummy text of the.</p>
                                            <div className='mt-5 lg:flex'>
                                                <button className='btn bg-[#BCB2A0] rounded-none px-16 border-0'>shop now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })

                    }

                </Swiper>
            </div>
            <Collection />
            <DiscountBanner />
            <Blog />
        </div>
    )
}
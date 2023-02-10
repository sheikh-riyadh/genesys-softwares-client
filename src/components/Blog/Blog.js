import blog1 from '../../banner-images/blog-1.jpg'
import blog2 from '../../banner-images/blog-2.jpg'
import blog3 from '../../banner-images/blog-3.jpg'
import blog4 from '../../banner-images/blog-4.jpg'
export default function Blog() {
    return (
        <div className='py-7 lg:py-[50px] xl:py-[100px] bg-white'>
            <h2 className='uppercase text-[28px] text-center pb-6 xl:pb-12'>our blog</h2>
            <div className='grid md:grid-cols-2 lg:grid-rows-4 gap-3 px-3 md:px-5 lg:px-[40px] xl:px-[177px]'>
                <div className='xl:row-span-3 flex gap-2 xl:flex-col xl:border-r-2'>
                    <img src={blog1} alt="blog_image" className='w-[350px] h-[150px] xl:h-[490px] xl:w-full xl:pr-3' />
                    <div className='text-start text-[#2D2929]'>
                        <span>16 May, 2022</span>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <div>
                        <img src={blog2} alt="blog_image" className='w-[350px] h-[150px]' />
                    </div>
                    <div className='text-start'>
                        <span>16 May, 2022</span>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
                <div className='flex gap-2 xl:-mt-6'>
                    <div>
                        <img src={blog3} alt="blog_image" className='w-[350px] h-[150px]' />
                    </div>
                    <div className='text-start'>
                        <span>16 May, 2022</span>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
                <div className='flex gap-2 xl:-mt-12'>
                    <div>
                        <img src={blog4} alt="blog_image" className='w-[350px] h-[150px]' />
                    </div>
                    <div className='text-start'>
                        <span>16 May, 2022</span>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
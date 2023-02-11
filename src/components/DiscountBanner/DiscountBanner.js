import React from 'react';
export default function DiscountBanner() {
    return (
        <div className="bg-discount_banner bg-no-repeat bg-left bg-cover ">
            <div className="px-3 md:px-5 lg:px-[40px] xl:px-[91px] bg-black hero-overlay bg-opacity-50">
                <div className="text-white py-16 lg:py-20 xl:py-24 z-40">
                    <h1 className="font-semibold text-[44px] text-white">20% Off</h1>
                    <p className="text-lg pt-3 xl:pt-6">And extra 50% off sale styles code FORCE20</p>
                    <button className="btn btn-outline outline-white text-white xl:px-16 xl:text-lg mt-8 lg:mt[45px] xl:mt-[60px] rounded-none">View all</button>
                </div>
            </div>
        </div>
    )
}
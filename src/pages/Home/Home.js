import React from 'react';
import Collection from '../../components/Collection/Collection';
import DiscountBanner from '../../components/DiscountBanner/DiscountBanner';
import Blog from '../../components/Blog/Blog';
import Footer from '../SharedPage/Footer/Footer';
import HeroSlider from '../../components/HeroSlider/HeroSlider';

export default function Home() {
    return (
        <div>
            <HeroSlider />
            <Collection />
            <DiscountBanner />
            <Blog />
            <Footer />
        </div>
    )
}
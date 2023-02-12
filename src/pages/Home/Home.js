import React, { useContext, useState } from 'react';
import Collection from '../../components/Collection/Collection';
import DiscountBanner from '../../components/DiscountBanner/DiscountBanner';
import Blog from '../../components/Blog/Blog';
import HeroSlider from '../../components/HeroSlider/HeroSlider';
import Spinner from '../../components/Spinner/Spinner';
import { AuthContext } from '../../context/AuthProvider';

export default function Home() {

    const [loaing, setLoading] = useState(true)
    let { count, setCount } = useContext(AuthContext)

    /* First time loading code here */
    if (count === 0) {
        setTimeout(() => {
            setLoading(false)
            setCount(count += 1)
        }, 4000)

        if (loaing) {
            return <Spinner />
        }
    }

    return (
        <div>
            <HeroSlider />
            <Collection />
            <DiscountBanner />
            <Blog />
        </div>
    )
}
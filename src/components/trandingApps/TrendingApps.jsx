import React, { Suspense } from 'react';
import Cards from '../cards/Cards';

const TrendingApps = () => {
    const appPromise = fetch('trendingApps.json').then(res => res.json())
    return (
        <div className='mt-10 sm:mt-20'>
            <h1 className='font-bold mb-2 sm:mb-4 text-center text-[rgba(0,25,49,1)] text-[min(6vw,48px)]'>Trending Apps</h1>
            <p className='text-[rgba(98,115,130,1)] text-[min(2vw,20px)] text-center'>Explore All trending Apps on the Market developed by us</p>
            <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}><Cards appPromise={appPromise}></Cards></Suspense>
        </div>
    );
};

export default TrendingApps;
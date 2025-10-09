import React from 'react';

const Banner2 = () => {
    return (
        <div className='bg-gradient-to-r from-[rgba(99,46,227,1)] to-[rgba(159,98,242,1)] p-6 md:p-10 lg:p-20 text-white text-center'>
            <h1 className='font-bold text-[min(5vw,48px)] mb-5 sm:mb-10'>Trusted by Millions, Built For you</h1>
            <div className='flex justify-between'>
                <div>
                    <p className='text-[min(2vw,16px)]'>Total Downloads</p>
                    <p className='text-[min(8vw,64px)] font-extrabold'>29.6 M</p>
                    <p className='text-[min(2vw,16px)]'>21% More Than Last Month</p>
                </div>
                <div>
                    <p className='text-[min(2vw,16px)]'>Total Reviews</p>
                    <p className='text-[min(8vw,64px)] font-extrabold'>906 K</p>
                    <p className='text-[min(2vw,16px)]'>46% More Than Last Month</p>
                </div>
                <div>
                    <p className='text-[min(2vw,16px)]'>Active Apps</p>
                    <p className='text-[min(8vw,64px)] font-extrabold'>132+</p>
                    <p className='text-[min(2vw,16px)]'>31 More Will Launch</p>
                </div>
            </div>
        </div>
    );
};

export default Banner2;
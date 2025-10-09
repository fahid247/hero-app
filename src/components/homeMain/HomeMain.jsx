import React from 'react';
import Banner from '../banner/Banner';
import bannerimg from "../../assets/hero.png"
import Banner2 from '../banner/Banner2';
import TrandingApps from '../trandingApps/TrendingApps';

const HomeMain = () => {
    return (
        <div className='bg-[rgba(241,245,232,1)]'>
            <Banner></Banner>
            <div className='px-10 flex justify-center'> <img src={bannerimg} alt="" /> </div>
            <Banner2></Banner2>
            <TrandingApps></TrandingApps>
        </div>
    );
};

export default HomeMain;
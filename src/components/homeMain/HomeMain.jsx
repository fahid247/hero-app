import React from 'react';
import Banner from '../banner/Banner';
import bannerimg from "../../assets/hero.png"
import Banner2 from '../banner/Banner2';
import TrandingApps from '../trandingApps/TrendingApps';
import { Link } from 'react-router';

const HomeMain = () => {
    return (
        <div className='bg-[rgba(241,245,232,1)]'>
            <Banner></Banner>
            <div className='px-10 flex justify-center'> <img src={bannerimg} alt="" /> </div>
            <Banner2></Banner2>
            <TrandingApps></TrandingApps>
            <div className='flex justify-center items-center mb-10'>
                <Link to={"/Apps"} className=" flex lg:text-sm text-[10px] items-center py-2 px-4 gap-1 rounded-sm bg-gradient-to-r from-[rgba(99,46,227,1)] to-[rgba(159,98,242,1)] text-white  border-none">
                 Show All
                </Link>
            </div>
        </div>
    );
};

export default HomeMain;
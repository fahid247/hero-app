import React from 'react';
import googleplay from "../../assets/icons8-google-play-store-48.png"
import appstore from "../../assets/icons8-app-store-48.png"
import { Link } from 'react-router';

const Banner = () => {
    return (
        <div className='max-w-[1440px] mx-auto flex flex-col gap-4 justify-center items-center text-center pb-10 py-20 pt-20'>
            <div className='font-bold text-[min(12vw,72px)] leading-none'>
                <h1 className='text-[rgba(0,25,49,1)]'>We Build</h1>
                <h1 className='text-[rgba(0,25,49,1)]'><span className='text-violet-700'>Productive </span>Apps</h1>
            </div>
            <p className='text-[min(3vw,20px)] text-[rgba(98,115,130,1)]'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            <div className='flex gap-5 sm:gap-10'>
                <Link to={`https://play.google.com/store/games?hl=en`}><button className='btn btn-outline hover:bg-black bg-white border-none'><img className='h-8' src={googleplay} alt="" />Google Play</button></Link>
                <Link to={`https://www.apple.com/app-store/`}><button className='btn btn-outline hover:bg-black bg-white border-none'><img className='h-8' src={appstore} alt="" />App Store</button></Link>
            </div>
        </div>
    );
};

export default Banner;
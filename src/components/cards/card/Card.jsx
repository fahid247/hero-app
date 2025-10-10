import React from 'react';
import { CiStar } from "react-icons/ci";
import { FaDownload } from "react-icons/fa6";




const Card = ({card}) => {
    
    return (
        <div className='bg-white h-[100%] rounded-2xl shadow-[0px_10px_20px_rgba(0,0,0,0.1)] p-4'>
            <div className='border border-[rgba(205,198,198,0.8)] rounded-2xl p-2'>
                <img src={card.image} alt="" />
            </div>
            <h1 className='font-medium text-[min(2vw,20px)] text-[rgba(0,25,49,1)] mt-4'>{card.title}</h1>
            <div className='flex justify-between mt-4'>
                <div  className='bg-[rgba(241,245,232,1)] p-1 sm:p-2 px-2 sm:px-4 rounded-2xl text-[rgba(0,211,144,1)] flex items-center justify-center gap-1 text-[min(2vw,16px)]'><FaDownload /><h1>{card.downloads/1000}K</h1></div>
                <div className='bg-[rgba(255,240,225,1)] text-[rgba(255,136,17,1)] p-2 px-2 sm:px-4 rounded-2xl flex items-center justify-center gap-1 text-[min(2vw,16px)]'><CiStar /> <h1>{card.ratingAvg}</h1></div>
            </div>
        </div>
    );
};

export default Card;
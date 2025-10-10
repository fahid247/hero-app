import React from 'react';
import { CiStar } from "react-icons/ci";
import { FaDownload } from "react-icons/fa6";


const InstalledApp = ({card , handleRemove}) => {
    
    return (
        <div className='max-w-[1440px] mx-auto px-3 '>
            <div className='bg-white  flex justify-between rounded-lg h-[min(10vw,122px)] mb-2 sm:mb-4 p-1 md:p-3 lg:p-5'>
            <div className='flex gap-4'>
                <img src={card.image} alt="" />
                <div>
                    <h1 className='text-[min(2vw,20px)]'>{card.title}</h1>
                    <div className='flex gap-4 items-center text-center text-[min(1.5vw,16px)] mt-1 sm:mt-4'>
                        <p className='flex items-center text-[rgba(0,211,144,1)]'><FaDownload></FaDownload>{card.downloads/1000}K</p>
                        <p className='flex items-center text-[rgba(255,136,17,1)]'><CiStar></CiStar>{card.ratingAvg}</p>
                        <p className='text-[rgba(98,115,130,1)]'>{card.size} MB</p>
                    </div>
                </div>
            </div>
            <div className='flex items-center'>
                <button onClick={()=>handleRemove(card.id)}  className=" flex text-[min(2vw,20px)] items-center p-1 sm:px-4 sm:p-2  gap-1 rounded-sm bg-[rgba(0,211,144,1)] text-white  border-none">
         UnInstall
      </button>
            </div>
        </div>
        </div>
    );
};

export default InstalledApp;
import React, { useEffect, useState } from 'react';
import { FaDownload } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { addToDb, getStoreApp } from '../../Utilities/addToDb';




const DetailedCard = ({singleAppData}) => {
    const [isDisabled,setIsDisabled] =useState(false)
     useEffect(() => {
    const storedIds = getStoreApp() || [];
    if (storedIds.includes(singleAppData.id)) {
      setIsDisabled(true);
    }
  }, [singleAppData.id]);
    const handleDownloadClick = (id) =>{
        addToDb(id)
        setIsDisabled(true)
    }
    return (
        <div className='flex gap-5 sm:gap-10 border-b border-[rgba(0,25,49,1)] max-w-[1440px] mx-auto  sm:p-20 p-10'>
            <div className='w-[24%]'>
                <img className='' src={singleAppData.image} alt="" />
            </div>
            <div className=' w-[74%]'>
                <div className='border-b border-[rgba(0,25,49,1)] pb-2.5 sm:pb-5'>
                    <h1 className='font-bold text-[min(3vw,32px)] text-[rgba(0,25,49,1)]'>{singleAppData.title}</h1>
                    <p className='text-[rgba(98,115,130,1)] text-[min(2vw,20px)]'>Developed By: <span className='text-violet-700'>{singleAppData.companyName}</span></p>
                </div>
                <div className='flex justify-between mt-4 sm:mt-7 mb-4 sm:mb-7'>
                    <div className='text-center'>
                       <div className='flex justify-center'><FaDownload /></div>
                        <p className='text-[rgba(0,25,49,1)] mt-2 text-[min(1.5vw,16px)]'>Downloads</p>
                        <h1 className='text-[rgba(0,25,49,1)] font-extrabold text-[min(4vw,40px)]'>{singleAppData.downloads}</h1>
                    </div>
                    <div className='text-center'>
                        <div className='flex justify-center'><FaStar /></div>
                        <p className='text-[rgba(0,25,49,1)] mt-2 text-[min(1.5vw,16px)]'>Average Rating</p>
                        <h1 className='text-[rgba(0,25,49,1)] font-extrabold text-[min(4vw,40px)]'>{singleAppData.ratingAvg}</h1>
                    </div>
                    <div className='text-center'>
                        <div className='flex justify-center'><AiOutlineLike /></div>
                        <p className='text-[rgba(0,25,49,1)] mt-2 text-[min(1.5vw,16px)]'>Total Reviews</p>
                        <h1 className='text-[rgba(0,25,49,1)] font-extrabold text-[min(4vw,40px)]'>{singleAppData.reviews}</h1>
                    </div>
                </div>
                <button onClick={()=>handleDownloadClick(singleAppData.id)} className= {isDisabled?`btn border-none text-[min(2vw,20px)] bg-[rgba(0,211,144,1)] opacity-50 cursor-not-allowed`:`btn border-none text-[min(2vw,20px)] bg-[rgba(0,211,144,1)]`}>{isDisabled?"Installed":`Install Now(${singleAppData.size}MB)`} </button>
            </div>
        </div>
    );
};

export default DetailedCard;
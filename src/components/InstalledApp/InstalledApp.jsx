import React from 'react';
import { CiStar } from "react-icons/ci";
import { FaDownload } from "react-icons/fa6";
import { removeItem } from '../../Utilities/addToDb';

const InstalledApp = ({card}) => {
    const handleRemove=(id)=>{
        removeItem(id);
    }
    return (
        <div className='bg-white max-w-[1440px] mx-auto flex justify-between rounded-2xl h-[min(10vw,122px)] mb-4 p-5'>
            <div className='flex gap-4'>
                <img src={card.image} alt="" />
                <div>
                    <h1 className='text-[min(2vw,20px)]'>{card.title}</h1>
                    <div className='flex gap-4 items-center text-center text-[min(1.5vw,16px)]'>
                        <p><FaDownload></FaDownload>{card.downloads}</p>
                        <p><CiStar></CiStar>{card.ratingAvg}</p>
                        <p>{card.size}MB</p>
                    </div>
                </div>
            </div>
            <div>
                <button onClick={()=>handleRemove(card.id)}  className=" flex lg:text-sm text-[10px] items-center p-2 gap-1 rounded-sm bg-[rgba(0,211,144,1)] text-white  border-none">
         UnInstall
      </button>
            </div>
        </div>
    );
};

export default InstalledApp;
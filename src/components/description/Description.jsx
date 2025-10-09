import React from 'react';

const Description = ({singleAppData}) => {
    return (
        <div className='max-w-[1440px] mx-auto p-5'>
            <h1 className='text-[rgba(0,25,49,1)] mt-5 mb-4 sm:mt-10 text-[min(2.2vw,24px)] font-semibold'>Description</h1>
            <p className='text-[rgba(98,115,130,1)] text-[min(2vw,20px)] mb-4'>{singleAppData.description}</p>
            
        </div>
    );
};

export default Description;
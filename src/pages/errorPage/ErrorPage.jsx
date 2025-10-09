import React from 'react';
import error from "../../assets/error-404.png"
import { useNavigate } from 'react-router';

const ErrorPage = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div className=" col-span-full flex flex-col justify-center items-center text-center p-25">
                  <img src={error} alt="" />
                  <h1 className="font-semibold text-[min(6vw,48px)] text-[rgba(0,25,49,1)]">OPPS!! Page NOT FOUND</h1>
                  <h3 className="text-[rgba(98,115,130,1)] text-[min(2vw,20px)] mb-4">
                    The page you are requesting is not found on our system. please try again.
                  </h3>
                  <button onClick={()=>navigate(-1)} className=" flex lg:text-sm text-[10px] items-center p-2 gap-1 rounded-sm bg-gradient-to-r from-[rgba(99,46,227,1)] to-[rgba(159,98,242,1)] text-white  border-none">
                     Go Back
                  </button>
                </div>
        </div>
    );
};

export default ErrorPage;
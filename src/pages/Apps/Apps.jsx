import React, { useState } from "react";
import { useLoaderData } from "react-router";
import Card from "../../components/cards/card/Card";
import AppNotFound from "../../components/appNotFound/AppNotFound";

const Apps = () => {
  const data = useLoaderData();
  const [searchItem,setSearchItem] = useState("");
  const filterData = data.filter(card => card.title.toLowerCase().includes(searchItem.toLowerCase()))
  const length = data.length;

  return (
    <div className="max-w-[1440px] mx-auto p-5">
      <h1 className="text-center font-bold text-[rgba(0,25,49,1)] text-[min(4vw,48px)] mt-5 sm:mt-20 mb-4">
        Our All Applications
      </h1>
      <p className="text-center mb-5 sm:mb-10 text-[rgba(98,115,130,1)] text-[min(2vw,20px)]">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>
      <div className="flex justify-between items-center px-10">
        <h1 className="font-semibold text-[min(2.2vw,24px)]">({length}) Apps Found</h1>
        <label className="input h-[min(5vw,44px)] w-[min(30vw,400px)] bg-[white]">
          <svg
            className="h-[min(4vw,1em)] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input defaultValue={searchItem} onChange={(e)=>setSearchItem(e.target.value)} className="text-[rgba(98,115,130,1)] text-[min(1.8vw,16px)]" type="search" required placeholder="Search" />
        </label>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 py-5 sm:p-5">
        {filterData.length > 0 ? (
          filterData.map((card) => <Card key={card.id} card={card} />)
        ) : (
          <AppNotFound></AppNotFound>
        )}
      </div>
    </div>
  );
};

export default Apps;

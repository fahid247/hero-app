import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getStoreApp, removeItem } from "../../Utilities/addToDb";
import InstalledApp from "../../components/InstalledApp/InstalledApp";

const Installation = () => {
    const data = useLoaderData()
    const [apps,setApps]=useState([])
    const [sort , setSort] =useState("")

    const handleSort=(type)=>{
        setSort(type)
        if(type==="Sorted by Size"){
            const sortedApps = [...apps].sort((a,b)=>a.size-b.size)
            setApps(sortedApps)
        }
        if(type==="Sorted by Rating"){
            const sortedApps = [...apps].sort((a,b)=>b.ratingAvg-a.ratingAvg)
            setApps(sortedApps)
        }
        if(type==="Sorted by Downloads(a)"){
            const sortedApps = [...apps].sort((a,b)=>a.downloads-b.downloads)
            setApps(sortedApps)
        }
        if(type==="Sorted by Downloads(d)"){
            const sortedApps = [...apps].sort((a,b)=>b.downloads-a.downloads)
            setApps(sortedApps)
        }
        
    }

    useEffect(()=>{

        const id = getStoreApp()
        const installedApp = data.filter(card => id.includes(card.id))
        setApps(installedApp)
    },[data])
    const length = apps.length
    const handleRemove=(id)=>{
        removeItem(id);
        setApps(prevApps => prevApps.filter(app => app.id !== id));
    }
  return (
    <div className="max-w-[1440px] mx-auto">
      <h1 className="text-center font-bold text-[rgba(0,25,49,1)] text-[min(4vw,48px)] mt-5 sm:mt-20 mb-4">
        Your Installed Apps
      </h1>
      <p className="text-center mb-5 sm:mb-10 text-[rgba(98,115,130,1)] text-[min(2vw,20px)]">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="flex justify-between items-center px-10 pb-5">
        <h1 className="font-semibold text-[min(2.2vw,24px)]">
          ({length}) Apps Found
        </h1>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn m-1">
             {sort?sort:"Sort ⤵︎"}
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-white rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li onClick={()=>handleSort("Sorted by Downloads(d)")}>
              <a>By Downloads(d)</a>
            </li>
            <li onClick={()=>handleSort("Sorted by Downloads(a)")}>
              <a>By Downloads(a)</a> 
            </li>
            <li onClick={()=>handleSort("Sorted by Size")}>
              <a>By Size</a>
            </li>
            <li onClick={()=>handleSort("Sorted by Rating")}>
              <a>By Rating</a>
            </li>
          </ul>
        </div>
      </div>
      <div>
            {apps.map(card=> <InstalledApp key={card.id} handleRemove={handleRemove} card={card}></InstalledApp>)}
      </div>
    </div>
  );
};

export default Installation;

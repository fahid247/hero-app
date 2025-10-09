import React from "react";
import { useLoaderData } from "react-router";
import { getStoreApp } from "../../Utilities/addToDb";
import InstalledApp from "../../components/InstalledApp/InstalledApp";

const Installation = () => {
    const data = useLoaderData()
    const id = getStoreApp()
    const installedApp = data.filter(card => id.includes(card.id))
    const length = installedApp.length
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
        <div className="dropdown dropdown-start">
          <div tabIndex={0} role="button" className="btn m-1">
            Sort ⬇️
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <a>by Item</a>
            </li>
            <li>
              <a>by rating</a>
            </li>
          </ul>
        </div>
      </div>
      <div>
            {installedApp.map(card=> <InstalledApp key={card.id} card={card}></InstalledApp>)}
      </div>
    </div>
  );
};

export default Installation;

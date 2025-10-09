import React from 'react';
import { createBrowserRouter } from 'react-router';
import Home from '../pages/home/Home';
import HomeMain from '../components/homeMain/HomeMain';
import Apps from '../pages/Apps/Apps';
import Installation from '../pages/installation/Installation';
import AppDetails from '../pages/AppDetails/AppDetails';
import ErrorPage from '../pages/errorPage/ErrorPage';

const router = createBrowserRouter([
    {
        path:"/",
        Component: Home,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                index:true,
                path:"/",
                Component:HomeMain,
            },
            {
                path:"/Apps",
                loader:()=>fetch('/apps.json'),
                Component: Apps,
                hydrateFallbackElement: <div className='flex justify-center'><span className="loading loading-spinner loading-xl"></span></div>
            },
            {
                path:"/installation",
                Component: Installation
            },
            {
                path:"/appDetails/:id",
                loader:()=>fetch('/apps.json'),
                Component: AppDetails,
                hydrateFallbackElement:<div className='flex justify-center'><span className="loading loading-spinner loading-xl"></span></div>
            }
        ]

    }
]);

export {router}
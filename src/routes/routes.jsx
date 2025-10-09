import React from 'react';
import { createBrowserRouter } from 'react-router';
import Home from '../pages/home/Home';
import HomeMain from '../components/homeMain/HomeMain';
import Apps from '../pages/Apps/Apps';
import Installation from '../pages/installation/Installation';
import AppDetails from '../pages/AppDetails/AppDetails';

const router = createBrowserRouter([
    {
        path:"/",
        Component: Home,
        children:[
            {
                index:true,
                path:"/",
                Component:HomeMain
            },
            {
                path:"/Apps",
                loader:()=>fetch('/apps.json'),
                Component: Apps,
                hydrateFallbackElement:<span>Loading...</span>
            },
            {
                path:"/installation",
                Component: Installation
            },
            {
                path:"/appDetails/:id",
                loader:()=>fetch('/apps.json'),
                Component: AppDetails,
                hydrateFallbackElement:<span>Loading...</span>
            }
        ]

    }
]);

export {router}
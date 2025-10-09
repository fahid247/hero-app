import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import DetailedCard from '../../components/detailedCard/DetailedCard';
import Rechart from '../../components/rechart/Rechart';
import Description from '../../components/description/Description';

const AppDetails = () => {
    const {id} = useParams()
    const intId = parseInt(id);
    const data = useLoaderData()
    const singleAppData = data.find(card=>card.id === intId)
    
    
    return (
        <div className='bg-[rgba(241,245,232,1)] max-w-[1440px] mx-auto'>
            <DetailedCard singleAppData={singleAppData}></DetailedCard>
            <Rechart singleAppData={singleAppData}></Rechart>
            <Description singleAppData={singleAppData}></Description>
        </div>
    );
};

export default AppDetails;
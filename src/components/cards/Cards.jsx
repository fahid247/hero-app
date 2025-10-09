import React, { use } from 'react';
import Card from './card/Card';
import { Link } from 'react-router';

const Cards = ({appPromise}) => {
    const data = use(appPromise)
    return (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5 sm:p-20'>
            {data.map(card => <Link to={`/appDetails/${card.id}`}><Card key={card.id} card={card}></Card></Link>)}
        </div>
    );
};

export default Cards;
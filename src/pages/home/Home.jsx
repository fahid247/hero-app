import React from 'react';
import Nav from '../../components/header/Nav';
import { Outlet } from 'react-router';
import Footer from '../../components/footer/Footer';

const Home = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;
import React from 'react';

import { Outlet } from 'react-router-dom';
import Footer from '../shared components/Footer';
import Navbar from '../shared components/Navbar';

const MainLayout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;
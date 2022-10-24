import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/shared/Footer';
import Header from '../pages/shared/Header';
import LeftSideNav from '../pages/shared/LeftSideNav'
import RightSidenav from '../pages/shared/RightSidenav';
import './Main.css'

const Main = () => {
    return (
        <div>
            <Header />
            <div className="custom-grid container mx-auto">
                <LeftSideNav />
                <Outlet />
                <RightSidenav />
            </div>
            <Footer />
        </div>
    );
};

export default Main;
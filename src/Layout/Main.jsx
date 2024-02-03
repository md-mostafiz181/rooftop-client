import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/Shared/Navbar/Navbar';
import Footer from '../pages/Shared/Footer/Footer';
import CopyRight from '../pages/Shared/CopyRight/CopyRight';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <CopyRight></CopyRight>
            
        </div>
    );
};

export default Main;
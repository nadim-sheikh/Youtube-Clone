import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../../Pages/Shared/NavBar/NavBar';
import LeftMenuBar from '../../Pages/Shared/LeftMenuBar/LeftMenuBar';

const Main = () => {
    return (
        <div className=''>
            <NavBar/>
            <div className='custom-css-grid'>
            <LeftMenuBar/>
            <Outlet/>
            </div>
        </div>
    );
};

export default Main;
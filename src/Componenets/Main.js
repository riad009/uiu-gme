import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import SplashScreen from './SplashScreen';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;
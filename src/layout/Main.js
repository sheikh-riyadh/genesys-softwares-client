import React from 'react';
import { Outlet } from "react-router-dom";
import Footer from "../pages/SharedPage/Footer/Footer";
import Header from "../pages/SharedPage/Header/Header";

export default function Main() {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}
import React from "react";
import { FeatureNav } from "./Navigation";
import { useNavigate, Outlet } from "react-router-dom";


const HomePage = () => {
    // navigator = useNavigate()
    return (
        <div className="home__page flex flex-col justify-center items-center w-screen h-full">
            <FeatureNav/>
            <p className="welcome-txt">Welcome to the home page.</p>
        </div>
    )
}


export const Layout = () => {
    return (
        <>
        <Outlet/>
        </>
    )
}

export default HomePage;
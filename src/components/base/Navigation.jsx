import React from "react";
import { Link } from "react-router-dom";
import { displayOtherNavs } from "../../../utils/general";


export const Header = ()=>{
    return (
        <div className="headerContents flex flex-row justify-between item-center h-auto bg-white text-blue-800 w-full">
            <div className="logo m-0">
                <img src="" alt="logo"/>
            </div>
            <ul className="baseNav flex flex-row justify-between item-center m-0">
                <li className="about nav-child m-4"><Link>About</Link></li>
                <li className="services nav-child m-4"><Link>Services</Link></li>
                <li className="contact nav-child m-4"><Link>Contact</Link></li>
                <li className="more nav-child m-4 relative cursor-pointer" onClick={displayOtherNavs}>More <img src="" alt="toggle-icon" className="absolute"/></li>
            </ul>
            {/* other nav items */}
            <ul className="other-navs hidden flex flex-row justify-between item-center w-auto m-0">
                <li className="courses other-nav m-4"><Link>Courses</Link></li>
                <li className="instructors other-nav m-4"><Link>Instructors</Link></li>
                <li className="events other-nav m-4"><Link>Events</Link></li>
            </ul>
        </div>
    )
}


export const FeatureNav = () =>{
    return (
        // feature navigation across all pages
        <div className="hero bg-blue-800 text-white p-5 w-full flex flex-col justify-center items-center flex-wrap">
            <div className="catch-phrase text-center flex flex-col justify-center items-center flex-wrap">
                <h1 className="catch-phrase-text text-5xl font-bold">
                    Unluck Your Musical Potential At Maestro Arts And Music Hub
                </h1>
                <div className="welcome-phrase">
                    <p className="welcome-text">
                        Welcome to Maestro Arts and Music Hub, where passion meets proficiency.<br/>
                        We're dedicated to nurturing musical talents, and fostering a lifelong love of music in every student.
                    </p>
                </div>
            </div>
        </div>
    )
}
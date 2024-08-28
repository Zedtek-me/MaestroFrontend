import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { displayOtherNavs, redirectRoute } from "../../../utils/general";



export const Header = ()=>{
    let navigator = useNavigate()
    return (
        <div className="headerContents flex flex-row justify-between item-center bg-white text-blue-800 w-full p-5">
            <div className="logo m-0">
                <img src="" alt="logo"/>
            </div>
            <ul className="baseNav flex flex-row justify-between item-center m-0">
                <li className="about nav-child m-4"><Link>About</Link></li>
                <li className="services nav-child m-4"><Link>Services</Link></li>
                <li className="contact nav-child m-4"><Link>Contact</Link></li>
                <li className="more nav-child m-4 relative cursor-pointer" onClick={displayOtherNavs}>More {/*<img src="" alt="toggle-icon" className="absolute"/>*/}</li>
            </ul>
             <div className="action-btns flex flex-row justify-center item-center m-0 p-0 text-center">
                <input type="button" value="Enroll" className="flex enroll-btn m-2 p-2 self-center bg-white cursor-pointer border-solid border-black border-2 w-1/2 h-auto" onClick={()=> redirectRoute(navigator, "/login/")}/>
                <input type="button" value="Sign Up" className="flex top-signup-btn m-2 p-2 self-center cursor-pointer w-1/2 h-auto" onClick={()=> redirectRoute(navigator, "/signup/")}/>
             </div>
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
        <div className="hero bg-blue-1000 text-white p-5 w-full flex flex-col justify-center items-center flex-wrap">
            <div className="catch-phrase text-center flex flex-col justify-center items-center w-1/2 h-full">
                <h1 className="catch-phrase-text text-6xl font-medium flex flex-wrap break-wrap p-5">
                   <p>Unluck Your Musical Potential at Maestro Arts And Music Hub</p>
                </h1>
                <div className="welcome-phrase flex flex-wrap break-wrap">
                    <p className="welcome-text p-4 break-wrap">
                        Welcome to Maestro Arts and Music Hub, where passion meets proficiency.
                        We're dedicated to nurturing musical talents, and fostering a lifelong love of music in every student.
                    </p>
                </div>
                <div className="auth-btns flex justify-space-between p-5 font-medium text-lg">
                    <input type="button" value="Learn More" className="learn-more-btn m-4 bg-white text-blue-800 p-3"/>
                    <input type="button" value="Sign Up" className="signup-btn m-4 p-3"/>
                </div>
            </div>
        </div>
    )
}
import React from "react";
import { Link } from "react-router-dom";


export const Header = ()=>{
    return (
        <div className="headerContents">
            <div className="logo">
                <img src="" alt="logo"/>
            </div>
            <ul className="baseNav">
                <li className="about nav-child"><Link>About</Link></li>
                <li className="services nav-child"><Link>Services</Link></li>
                <li className="contact nav-child"><Link>Contact</Link></li>
                <li className="more nav-child">More {/*needs an icon to toggle the remaining navs */}</li>
            </ul>
            {/* other nav items */}
            <ul className="other-navs">
                <li className="courses other-nav"><Link>Course</Link></li>
                <li className="instructors other-nav"><Link>Instructors</Link></li>
                <li className="events other-nav"><Link>Events</Link></li>
            </ul>
        </div>
    )
}


export const FeatureNav = () =>{
    return (
        // feature navigation across all pages
        <div className="featureNavigation">
            
        </div>
    )
}
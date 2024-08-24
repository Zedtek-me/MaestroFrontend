import React from "react";
import { Link } from "react-router-dom";


export const Header = ()=>{
    return (
        <div className="headerContents flex flex-row justify-between item-center h-auto bg-black text-white w-full">
            <div className="logo">
                <img src="" alt="logo"/>
            </div>
            <ul className="baseNav flex flex-row justify-between item-center">
                <li className="about nav-child"><Link>About</Link></li>
                <li className="services nav-child"><Link>Services</Link></li>
                <li className="contact nav-child"><Link>Contact</Link></li>
                <li className="more nav-child">More {/*needs an icon to toggle the remaining navs */}</li>
            </ul>
            {/* other nav items */}
            <ul className="other-navs">
                <li className="courses other-nav"><Link>Courses</Link></li>
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
            Items to go into the feature navs...
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit neque eos tenetur tempore enim eligendi reiciendis, quod voluptas, similique soluta mollitia modi libero ratione ut doloremque nulla? Perferendis, suscipit sint. Dicta quibusdam ea minima? Nulla a non, commodi distinctio harum voluptatem officia adipisci dolor, dolorum culpa quia vel, quam esse?
        </div>
    )
}
import React from "react"
import "../../styles/index.css"
import { Header, FeatureNav, NavOnSignUp } from "./Navigation"



const Base = ({location}) =>{
    return (
        <div className="base flex flex-col justify-start items-center w-screen bg-yellow-400">
            <Header/>
            {
               location != "signup" ? <FeatureNav/> : <NavOnSignUp/>
            }
        </div>
    )
}

export const Footer = ({loginPage})=>{
    return (
        <div className="footer text-white flex flex-col justify-start items-center">
            {
                loginPage ? <DiscoverBoard /> : ""
            }
            <div className="other__footer__things flex justfiy-between items-center">
                <div className="newsletter text-black text-left">
                    <p id="stay-updated-txt">Stay upto date with our course by subscribing to our newsletter</p>
                    <div className="info-box flex justify-center items-center text-left">
                        <input type="text" placeholder="Enter Your Email Here" className="newsletter__mail" name="newsletter__mail" />
                        <button type="button" className="newsletter__submit__btn">Submit</button>
                    </div>
                </div>
                <div className="social__links text-black">
                    <p id="facebook">FaceBook</p>
                    <p id="instagram">Instagram</p>
                    <p id="X">X</p>
                    <p id="linkedin">LinkedIn</p>
                    <p id="youtube">Youtube</p>
                </div>
            </div>
        </div>
    )
}

export const DiscoverBoard = ({signedIn})=> (
    <div className="discover__board flex justify-between items-start p-10 w-full h-1/2">
        <div className="discover__and__join-prompt flex flex-col justify-between items-start text-left">
            <h1 className="text-3xl font-black m-3">Discover The Difference In Music Education!</h1>
            {
                !signedIn ? (
                    <p className="m-2">Join Maestro music to unlock your musical potential</p>
                ) : null
            }
        </div>
        {
            !signedIn ? (
                <div className="join__prompts flex justify-center items-center">
                    <input type="button" name="SignUpInDiscover" id="signup__in__discover" value="Sign up" className="signup__in__discover cursor-pointer p-3 text-center bg-white"/>
                    <p className="learn__more text-center p-5">Learn More</p>
                </div>
            ) : null
        }
    </div>
)
export default Base
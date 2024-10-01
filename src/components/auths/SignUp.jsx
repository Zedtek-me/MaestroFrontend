import React, {useState} from "react";
import { useNavigate, Link } from "react-router-dom";
import "../../styles/index.css"
import Base from "../base/Base.jsx";
import littlePianoGirl from "../../../static/MaestroAssets/littleGirlPlayingPiano.png"
import { handleFormSubmission, handleInput } from "../../../utils/auth_utils/auth.js";

const SignUp = (props) =>{
    const [signupData, setSignupData] = useState({})
    return (
        <div className="auth signup h-full bg-white">
            <Base location="signup"/>
            <form action="" className="signup__form">
                <label htmlFor="first_name" className="first_name m-3">
                    <p>Fisrt Name</p>
                    <input type="text" name="first_name" id="first_name" placeholder="Zechariah"/>
                </label>
                <label htmlFor="last_name" className="last_name m-3">
                    <p>Last Name</p>
                    <input type="text" name="last_name" id="last_name" placeholder="Adebayo"/>
                </label>
                <label htmlFor="username" className="username m-3">
                    <p>Username</p>
                    <input type="text" name="first_name" id="first_name" placeholder="Zedtek"/>
                </label>
                <label htmlFor="email" className="email m-3">
                    <p>Email</p>
                    <input type="email" name="email" id="email" placeholder="johndoe@gmail.com"/>
                </label>
                <label htmlFor="password" className="password m-3">
                    <p>Password</p>
                    <input type="password" name="password" id="password" placeholder="********"/>
                </label>
            </form>
            <div className="form-and-img flex flex-row justify-around items-center">
                <div className="side-img-wrapper"><img src={littlePianoGirl} alt="child playing the piano" className="form-side-img"/></div>
            </div>
            <div className="buttom-left-cta">Join our music school now</div>
            <div className="newsletter-sub socials">
                Stay up to date with our latest news and updates
            </div>
            <div className="bottom-nav">
                <Link to="/privacy-policy/">Privary Policy</Link>
                <Link to="/privacy-policy/">Privary Policy</Link>
                <Link to="/privacy-policy/">Privary Policy</Link>
            </div>
        </div>
    )
}

export default SignUp

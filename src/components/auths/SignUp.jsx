import React, {useState} from "react";
import { useNavigate, Link } from "react-router-dom";
import "../../styles/index.css"
import Base from "../base/Base";
import Form from "./AuthForm.jsx";
import littlePianoGirl from "../../../static/MaestroAssets/littleGirlPlayingPiano.png"


const SignUp = (props) =>{
    const [signupData, setSignupData] = useState({})
    return (
        <div className="auth signup h-full bg-white">
            <Base location="signup"/>
            <div className="form-and-img flex flex-row justify-around items-center">
                <Form formType="signup"/>
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

import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/index.css"
import Base from "../base/Base";
import Form from "./AuthForm.jsx";


const SignUp = (props) =>{
    const [signupData, setSignupData] = useState({})
    return (
        <div className="auth signup">
            <Base/>
            <Form formType="signup"/>
            Signup part
        </div>
    )
}

export default SignUp

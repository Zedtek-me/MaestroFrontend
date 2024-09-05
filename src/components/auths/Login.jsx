import React, {useState} from "react";
import "../../styles/index.css";
import Base from "../base/Base";
import Form from "./AuthForm.jsx";


const Login = () =>{
    return (
        <div className="login h-1/2">
            <Base/>
            <Form/>
            This is the login component.
            All authentications related to loging in goes here.
        </div>
    )
}

export default Login

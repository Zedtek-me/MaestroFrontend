import React, {useState} from "react";
import "../../styles/index.css";
import Base from "../base/Base";


const Login = () =>{
    return (
        <div className="login h-1/2">
            <Base/>
            <form className="login__form">
                <label htmlFor="email" className="email m-3">
                    <p>Email</p>
                    <input type="email" name="email" id="email" placeholder="johndoe@gmail.com"/>
                </label>
                <label htmlFor="password" className="password m-3">
                    <p>Password</p>
                    <input type="password" name="password" id="password" placeholder="********"/>
                </label>
            </form>
            This is the login component.
            All authentications related to loging in goes here.
        </div>
    )
}

export default Login

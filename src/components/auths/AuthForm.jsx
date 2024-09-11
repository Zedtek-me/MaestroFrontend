import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";


const Form = ({formType}) =>{
    return (
        <div className="auth-form-wrapper flex flex-col justify-center items-center p-5 w-1/2 h-full">
            <h1 className={formType == "signup" ? "signup-header auth-txt" : "login-header auth-txt"}>{formType == "signup" ? "Sign Up" : "Login"}</h1>
            <div className="auth-form flex flex-col justify-center items-center w-full h-full">
                {
                    formType === "signup" && (
                        <div className="other-signup-data flex flex-col justify-center items-center">
                            <label htmlFor="username" className="username m-3">
                                <p>Username</p>
                                <input type="text" name="username" id="username" placeholder="JohnDoe" className=""/>
                            </label>
                            <label htmlFor="firstName" className="firstName m-3 rounded-lg">
                                <p>First Name</p>
                                <input type="text" name="firstName" id="firstName" placeholder="John" className=""/>
                            </label>
                            <label htmlFor="lastName" className="lastName m-3 rounded-lg">
                                <p>Last Name</p>
                                <input type="text" name="lastName" id="lastName" className="lastName"  placeholder="Doe" />
                            </label>
                        </div>
                    )
                }
                <label htmlFor="email" className="email m-3">
                    <p>Email</p>
                    <input type="email" name="email" id="email" placeholder="johndoe@gmail.com"/>
                </label>
                <label htmlFor="password" className="password m-3">
                    <p>Password</p>
                    <input type="password" name="password" id="password" placeholder="********"/>
                </label>
            </div>
        </div>
    )
}

export default Form
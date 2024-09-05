import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";


const Form = ({formType}) =>{
    return (
        <div className="auth-form-wrapper flex flex-col justify-center items-center bg-black p-5 w-full h-1/2">
            <div className="auth-form">
                {
                    formType === "signup" && (
                        <div className="other-signup-data">
                            <label htmlFor="username" className="username">
                                <input type="text" name="username" id="username" />
                            </label>
                            <label htmlFor="firstName" className="firstName">
                                <input type="text" name="firstName" id="firstName" />
                            </label>
                            <label htmlFor="lastName" className="lastName">
                                <input type="text" name="lastName" id="lastName" className="lastName" />
                            </label>
                        </div>
                    )
                }
                <label htmlFor="email" className="email">
                    <input type="email" name="email" id="email" />
                </label>
                <label htmlFor="password" className="password">
                    <input type="password" name="password" id="password" />
                </label>
            </div>
        </div>
    )
}

export default Form
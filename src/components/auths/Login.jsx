import React, {useState} from "react";
import "../../styles/index.css";
import Base, { Footer } from "../base/Base";
import { handleFormSubmission, handleInput } from "../../../utils/auth_utils/auth";


const Login = () =>{
    const [loginData, setLoginData] = useState({})
    return (
        <div className="auth login h-full flex flex-col align-center justify-between w-full">
            <Base/>
            <div className="sign__in__prompt__txt text-center flex justify-center items-center text-xl">Sign in to your Maestro Account</div>
            <form method="POST" className="login__form flex flex-col justify-ceneter items-center self-center justify-self-center h-1/2 w-1/2 p-5" onSubmit={(event)=> handleFormSubmission(event, loginData)}>
                <label htmlFor="email" className="email m-3 flex flex-col justify-center items-start w-full">
                    <p className="flex justify-start text-start items-center text-3xl self-start">Email</p>
                    <input type="email" name="email" className="text-center" id="email" placeholder="johndoe@gmail.com" onChange={(event)=>{handleInput(event, setLoginData)}}/>
                </label>
                <label htmlFor="password" className="password m-3 flex flex-col justify-center items-start w-full">
                    <p className="flex justify-start text-start items-center text-3xl self-start">Password</p>
                    <input type="password" name="password" className="text-center" id="password" placeholder="********" onChange={(event)=>{handleInput(event, setLoginData)}}/>
                </label>
                <button type="submit" className="submit login flex flex-row justify-center items-center text-xl text-center">Login</button>
            </form>
            <Footer loginPage={true}/>
        </div>
    )
}

export default Login

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

export default Base
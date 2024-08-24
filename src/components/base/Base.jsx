import React from "react"
import "../../styles/index.css"
import { Header, FeatureNav } from "./Navigation"



const Base = () =>{
    return (
        <div className="base flex flex-col justify-start items-center w-screen bg-yellow-500 h-auto">
            <Header/>
            <FeatureNav/>
        </div>
    )
}

export default Base
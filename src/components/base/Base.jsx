import React from "react"
import "../../styles/index.css"
import { Header, FeatureNav } from "./Navigation"



const Base = () =>{
    return (
        <div className="base flex flex-col justify-center items-center">
            <Header/>
            <FeatureNav/>
        </div>
    )
}

export default Base
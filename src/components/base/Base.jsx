import React from "react"
import "../../styles/index.css"
import { Header, FeatureNav } from "./Navigation"



const Base = () =>{
    return (
        <div className="base">
            <Header/>
            <FeatureNav/>
        </div>
    )
}

export default Base
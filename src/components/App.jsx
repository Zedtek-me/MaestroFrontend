import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./auths/Login";
import SignUp from "./auths/SignUp";


export default function App(){
    return <div className="w-screen h-screen flex justify-center items-center">
            <Router>
                <Routes>
                    <Route path="/">
                        <Route index element={<>This is the root path</>}/>
                        <Route path="signup/" element={<SignUp/>}/>
                        <Route path="login/" element={<Login/>}/>
                    </Route>
                </Routes>
            </Router>
        </div>
}

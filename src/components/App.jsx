import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";


export default function App(){
    return <div>
            <Router>
                <Routes>
                    <Route index>{"This is the root path"}</Route>
                </Routes>
            </Router>
        </div>
}

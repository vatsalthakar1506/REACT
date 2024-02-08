import React from "react";    
import ReactDOM from "react-dom/client";
import {Header} from "./components/Header";
import {Body} from "./components/Body.js";


const AppLayout = () =>{
    return (
        <div className="app ">
            {Header()} 
            <Body/>
        </div>
    )
}

const result = ReactDOM.createRoot(document.getElementById('root'));

result.render(<AppLayout/>);
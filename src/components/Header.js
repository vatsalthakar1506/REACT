import { useState } from "react";
import { LOGO_URL } from "../utils/constant";

import {Link} from "react-router-dom";

export const  Header = ()=>{
    const [btnLogin, setBtnLogin] = useState("Login")
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}  />
            </div>

            <div className="nav-items">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About Us</Link>
                </li>
                <li>
                    <Link to="/contact">Contact Us</Link>
                </li>
                <li>Cart</li>
                <button className="login" onClick={()=>{
                   btnLogin === "Login" ? setBtnLogin("Logout") : setBtnLogin("Login")
                }} >
                    {btnLogin }
                </button>
            </ul>
            </div>
        </div>
    );
};



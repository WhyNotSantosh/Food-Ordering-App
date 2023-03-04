import React from "react";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // never write inside a if condition
    useEffect(() => {
        console.log("use effect header");
    }, [isLoggedIn]); // called whenever isLoggedin Changes after first time render
    const isOnline = useOnline();
    const user = useContext(UserContext)
    return (
        <div className="flex justify-between shadow-lg lg:bg-green-100 sm:bg-red-200 md:bg-blue-200">
            <a href="/">
                <img className="h-28 p-2" alt="logo" src="https://i.pinimg.com/474x/e6/17/f1/e617f1bfb9af4d9cf132cd3dec0da072.jpg" />
            </a>
            <ul className="flex py-5 px-10 m-4">
                {/* Link tag is converted to a tag but it wil not reload page as react-router-dom keeps track of it */}
                <li className="p-4"><Link to="/">Home</Link></li>
                <li className="p-4"><Link to="/about">About</Link></li>
                <li className="p-4"><Link to="/contact">Contact</Link></li>
                <li className="p-4"><Link to="/instamart">Instmart</Link></li>
                <li className="p-4">Cart</li>
            </ul>
            <div className="flex">
                <h1 className="py-10">{isOnline ? "🟢" : "🔴"}</h1>
                <span className="p-10 font-bold text-blue-600">{user.user.name}</span>
                {!isLoggedIn ? <button onClick={() => setIsLoggedIn(true)}>Login</button> : <button onClick={() => setIsLoggedIn(false)}>Logout</button>}
            </div>
        </div>
    )
}

export default Header;
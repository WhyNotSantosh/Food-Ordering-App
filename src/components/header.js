import { Store } from "@reduxjs/toolkit";
import React from "react";
import { useEffect, useState, useContext } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // never write inside a if condition
    const isOnline = useOnline();
    const user = useContext(UserContext);
    const cartItems = useSelector(store => store.cart.items);
    console.log(cartItems);
    useEffect(() => {
        console.log("use effect header");
    }, [isLoggedIn]); // called whenever isLoggedin Changes after first time render

    return (
        <div className="flex justify-between shadow-lg lg:bg-green-100 sm:bg-red-200 md:bg-blue-200">
            <a href="/">
                <img className="h-28 m-2 rounded-lg" alt="logo" src="https://i.pinimg.com/474x/e6/17/f1/e617f1bfb9af4d9cf132cd3dec0da072.jpg" />
            </a>
            <ul className="flex py-5 px-10 m-4">
                {/* Link tag is converted to a tag but it wil not reload page as react-router-dom keeps track of it */}
                <li className="p-4"><Link to="/">Home</Link></li>
                <li className="p-4"><Link to="/about">About</Link></li>
                {/* <li className="p-4"><Link to="/contact">Contact</Link></li> */}
                <li className="p-4"><Link to="/instamart">Instamart</Link></li>
                <li className="p-4"> <Link to="/cart">Cart - {cartItems?.length}</Link></li>
            </ul>
            <div className="flex py-5 px-10 m-4 items-center">
                <h1 className="p-2 cursor-default" title="I am custom hook. Shows whether you are connected to internet or not.">{isOnline ? "🟢" : "🔴"}</h1>
                <span className="p-2 font-bold text-blue-600">{user.user.name}</span>
                {!isLoggedIn ? <button title="I am custom hook. Shows whether a user is logged in or out." onClick={() => setIsLoggedIn(true)}>Login</button> : <button title="I am custom hook. Shows whether a user is logged in or out." onClick={() => setIsLoggedIn(false)}>Logout</button>}
            </div>
        </div>
    )
}

export default Header;
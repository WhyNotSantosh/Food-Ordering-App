import { Store } from "@reduxjs/toolkit";
import React from "react";
import { useEffect, useState, useContext } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { LoginModal } from "./Modal";
const Header = () => {
    const [showLoginModal, setShowLoginModal] = useState(false); // never write inside a if condition
    const isOnline = useOnline();
    const { user, setUser } = useContext(UserContext);
    const cartItems = useSelector(store => store.cart.items);

    return (
        <div className="flex justify-between shadow-lg items-center">
            <a href="/">
                <img className="h-16 m-2 rounded-lg" alt="logo" src="https://i.pinimg.com/474x/e6/17/f1/e617f1bfb9af4d9cf132cd3dec0da072.jpg" />
            </a>
            <ul className="flex py-2 px-10 m-4">
                {/* Link tag is converted to a tag but it wil not reload page as react-router-dom keeps track of it */}
                <li className="p-4"><Link to="/">Home</Link></li>
                <li className="p-4"><Link to="/about">About</Link></li>
                {/* <li className="p-4"><Link to="/contact">Contact</Link></li> */}
                <li className="p-4"><Link to="/instamart">Instamart</Link></li>
                <li className="p-4"> <Link to="/cart">Cart - {cartItems?.length}</Link></li>
            </ul>
            <div className="flex py-5 px-10 m-4 items-center">
                <h1 className="p-2 cursor-default" title="I am custom hook. Shows whether you are connected to internet or not.">{isOnline ? "🟢" : "🔴"}</h1>
                {/* <span className="p-2 font-bold text-blue-600">{user.user.name}</span>
                {!isLoggedIn ? <button title="I am state variable. Shows whether a user is logged in or out." onClick={() => setIsLoggedIn(true)}>Login</button> : <button title="I am custom hook. Shows whether a user is logged in or out." onClick={() => setIsLoggedIn(false)}>Logout</button>} */}
                {!user.user.name ? <button title="I am state variable. Shows whether a user is logged in or out." onClick={() => {
                    setShowLoginModal(true)
                    console.log(user);
                }}>Login</button> : <>
                <span>{user.user.name}</span>
                <svg class="h-5 w-6 text-red-500 cursor-pointer ml-2 mt-1"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"
                onClick={() => {
                    setUser({ user: { name: "" } });
                }}
                >  
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />  
                <polyline points="16 17 21 12 16 7" />  
                <line x1="21" y1="12" x2="9" y2="12" />
                </svg>
                </>}
            </div>
            {showLoginModal && <LoginModal setUser={setUser} cancel={setShowLoginModal} />}
        </div>
    )
}

export default Header;
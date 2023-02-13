import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // never write inside a if condition
    useEffect(() => {
        console.log("use effect header");
    }, [isLoggedIn]); // called whenever isLoggedin Changes after first time render
    const isOnline  = useOnline();
    return (
        <div className="header">
            <a href="/">
                <img className="logo" alt="logo" src="https://i.pinimg.com/474x/e6/17/f1/e617f1bfb9af4d9cf132cd3dec0da072.jpg" />
            </a>
            <h1> Food Villa </h1>
            <ul className="nav-items">
                {/* Link tag is converted to a tag but it wil not reload page as react-router-dom keeps track of it */}
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li>Cart</li>
            </ul>
            <div>
                <h1>{isOnline ? "🟢" : "🔴"}</h1>
                {!isLoggedIn ? <button onClick={() => setIsLoggedIn(true)}>Login</button> : <button onClick={() => setIsLoggedIn(false)}>Logout</button>}
            </div>
        </div>
    )
}

export default Header;
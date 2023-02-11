import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SWIGGY_PUBLIC_DATA_END_POINT } from "../../constants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { filterRestaurants } from "../utils/helper";


const Body = () => {
    const [searchText, setSearchText] = useState();
    const [restaurantsList, setRestaurantsList] = useState([]);
    const [searchRestaurantList, setSearchRestaurantList] = useState([]);
    console.log("hook");
    console.log(useState());
    console.log("hook2");
    useEffect(() => {
        console.log("USE EFFECT body");
        getSwiggyData();
    }, []);

    getSwiggyData = async () => {
        const data = await fetch(SWIGGY_PUBLIC_DATA_END_POINT);
        const json = await data.json();
        console.log(json);
        setRestaurantsList(json?.data?.cards[2]?.data?.data?.cards);
        setSearchRestaurantList(json?.data?.cards[2]?.data?.data?.cards);
    }
    // if (searchRestaurantList.length === 0) {
    //     return null;
    // };
    console.log("render");
    return (searchRestaurantList.length === 0) ? <Shimmer /> : (
        <React.Fragment>
            <input type="text" className="search-input" placeholder="Search" value={searchText} onChange={(e) => {
                setSearchText(e.target.value)
            }} />
            <button className="search-btn" onClick={() => {
                const data = filterRestaurants(searchText, searchRestaurantList);
                setRestaurantsList(data);
            }}>Search</button>
            <div className="restaurant-list">
                {restaurantsList?.length > 0 ? restaurantsList.map((restaurant) => {
                    return (<Link to={"/restaurant/" + restaurant.data.id} key={restaurant.data.id}><RestaurantCard restaurantsList={restaurant} /></Link>)
                }) : <h1>No such results found.</h1>}
            </div>
        </React.Fragment>
    )
}


export default Body;
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { filterRestaurants } from "../utils/helper";
import useRestaurantList from "../utils/useRestaurantList";
import useOnline from "../utils/useOnline";

const Body = () => {
    const [searchText, setSearchText] = useState();
    const [restaurantsListData, searchRestaurantList] = useRestaurantList();
    const [restaurantsList, setRestaurantsList] = useState();
    useEffect(() => {
        setRestaurantsList(restaurantsListData);
    }, [restaurantsListData]);
    const isOnline = useOnline();
    // if (searchRestaurantList.length === 0) {
    //     return null;
    // };    
    if (!isOnline) {
        return <h1>🔴You are offline. Please check your internet.</h1>
    }
    return (searchRestaurantList?.length === 0) ? <Shimmer /> : (
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
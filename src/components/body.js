import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { filterRestaurants } from "../utils/helper";
import useRestaurantList from "../utils/useRestaurantList";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
const Body = () => {
    const [searchText, setSearchText] = useState();
    const [restaurantsListData, searchRestaurantList] = useRestaurantList();
    const [restaurantsList, setRestaurantsList] = useState();
    const { user, setUser } = useContext(UserContext);
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
            <div className="p-5 bg-gray-100 flex">
                <input type="text" className="p-2 m-2 h-8 rounded-md" placeholder="Search" value={searchText} onChange={(e) => {
                    setSearchText(e.target.value)
                    if (e.target.value.length === 0) {
                        setRestaurantsList(restaurantsListData);
                    }
                }} />
                <button className="p-2 m-2 bg-orange-300 h-8 rounded-md text-justify" onClick={() => {
                    const data = filterRestaurants(searchText, searchRestaurantList);
                    setRestaurantsList(data);
                }}>Search</button>
                <input type="text" className="p-2 m-2 h-8 rounded-md" placeholder="Update Context" value={user.user.name}
                    onChange={(e) => {
                        setUser({ user: { name: e.target.value, email: "newemail@gmail.com" } })
                    }}
                    title="Change value here to see how my context is updated in footer."
                />
            </div>
            <div className="flex flex-wrap">
                {restaurantsList?.length > 0 ? restaurantsList.map((restaurant) => {
                    return (<Link to={"/restaurant/" + restaurant.data.id} key={restaurant.data.id}><RestaurantCard restaurantsList={restaurant} /></Link>)
                }) : <h1>No such results found.</h1>}
            </div>
        </React.Fragment>
    )
}


export default Body;
import React, { useEffect, useState } from "react";
import { ImageDomain, SwiggyPublicDataEndPoint } from "../../constants";


function filterRestaurants(searchText, restaurantsList) {
    const filterData = restaurantsList.filter((restaurant) =>
        restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
    );
    return filterData;
}

const Body = () => {
    const [searchText, setSearchText] = useState();
    const [restaurantsList, setRestaurantsList] = useState([]);
    const [searchRestaurantList, setSearchRestaurantList] = useState([]);
    useEffect(() => {
        getSwiggyData();
    }, []);
    
    getSwiggyData = async () => {
        const data = await fetch(SwiggyPublicDataEndPoint);
        const json = await data.json();
        console.log(json);
        setRestaurantsList(json?.data?.cards[2]?.data?.data?.cards);
        setSearchRestaurantList(json?.data?.cards[2]?.data?.data?.cards);
    }
    if (searchRestaurantList.length === 0) {
        return null;
    };
    console.log("render");
    return (
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
                    return (<RestaurantCard restaurantsList={restaurant} key={restaurant.data.id} />)
                }) : <h1>No such results found.</h1>}
            </div>
        </React.Fragment>
    )
}

const RestaurantCard = (props) => {
    return (
        <div className="card">
            <img src={ImageDomain + props.restaurantsList.data.cloudinaryImageId} />
            <h2>{props.restaurantsList.data.name}</h2>
            <h3>{props.restaurantsList.data.cuisines.join(',')}</h3>
            <h4>{props.restaurantsList.data.lastMileTravelString}</h4>
        </div>
    )
}

export default Body;
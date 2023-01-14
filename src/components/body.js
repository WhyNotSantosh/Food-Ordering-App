import React, { useEffect, useState } from "react";
import { ImageDomain, SwiggyPublicDataEndPoint } from "../../constants";


filterRestaurants = (searchTxt, restaurantsList) => {
    const filterData = restaurantsList.filter((f) => {
        f.data.name.includes(searchTxt);
    });
    return filterData;
}

const Body = () => {
    const [searchText, setSearchText] = useState();
    const [restaurantsList, setRestaurantsList] = useState([]);
    useEffect(() => {
        getSwiggyData();
    }, []);
    console.log("render");
    getSwiggyData = async () => {
        const data = await fetch(SwiggyPublicDataEndPoint);
        const json = await data.json();
        console.log(json);
        setRestaurantsList(json?.data?.cards[2]?.data?.data?.cards);
    }
    return (
        <React.Fragment>
            <input type="text" className="search-input" placeholder="Search" value={searchText} onChange={(e) => {
                setSearchText(e.target.value)
            }} />
            <button className="search-btn" onClick={() => {
                const data = filterRestaurants(searchText, restaurantsList);
                setRestaurantsList(data);
            }}>Search</button>
            <div className="restaurant-list">
                {restaurantsList.map((restaurant) => {
                    return (<RestaurantCard restaurantsList={restaurant} key = {restaurant.data.id}/>)
                })}
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
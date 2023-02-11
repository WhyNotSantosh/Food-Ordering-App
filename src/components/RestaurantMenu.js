import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMAGE_DOMAIN } from "../../constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
const RestaurantMenu = () => {
    const { id } = useParams(); // read dynamic url params    

    const restaurant = useRestaurant(id);
    
    if (!restaurant) {
        return <Shimmer />;
    }
    return (
        <div>
            <h1> Restaurant Menu : {id} </h1>
            <h2>{restaurant.name}</h2>
            <img src={IMAGE_DOMAIN + restaurant.cloudinaryImageId} alt="item" />
            <h3>{restaurant.area}</h3>
            <h3>{restaurant.city}</h3>
            <h3>{restaurant.avgRating} stars</h3>
            <h3>{restaurant.costForTwoMsg}</h3>
            <div>
                <h1>Menu</h1>
                <ul>
                    {
                        Object.values(restaurant?.menu?.items).map((item, index) => {
                            return <li key={index}>{item.name}</li>
                        })
                    }
                    <li></li>
                </ul>
            </div>
        </div>
    )
}

export default RestaurantMenu;
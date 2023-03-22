import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMAGE_DOMAIN } from "../../constants";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = () => {
    const { id } = useParams(); // read dynamic url params    

    const restaurant = useRestaurantMenu(id);
    
    if (!restaurant) {
        return <Shimmer />;
    }
    return (
        <div>
            <h1> Restaurant Menu : {id} </h1>
            <h2>{restaurant.cards[0].card.card.info.name}</h2>
            <img src={IMAGE_DOMAIN + restaurant.cards[0].card.card.info.cloudinaryImageId} alt="item" />
            <h3>{restaurant.cards[0].card.card.info.areaName}</h3>
            <h3>{restaurant.cards[0].card.card.info.city}</h3>
            <h3>{restaurant.cards[0].card.card.info.avgRating} stars</h3>
            <h3>{restaurant.cards[0].card.card.info.costForTwoMessage}</h3>
            <div>
                <h1>Menu</h1>
                {/* <ul>
                    {
                        Object.values(restaurant?.menu?.items).map((item, index) => {
                            return <li key={index}>{item.name}</li>
                        })
                    }
                    <li></li>
                </ul> */}
            </div>
        </div>
    )
}

export default RestaurantMenu;
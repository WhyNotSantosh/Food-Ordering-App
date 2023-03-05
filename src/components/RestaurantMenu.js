import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMAGE_DOMAIN } from "../../constants";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { addItem, removeItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
    const { id } = useParams(); // read dynamic url params    

    const restaurant = useRestaurantMenu(id);
    const dispatch = useDispatch();
    const handleAddItem = (item) => {
        dispatch(addItem(item));
    }

    const handleRemoveItem = () => {
        dispatch(removeItem());
    }

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

                <button className="p-2 m-2 bg-green-400" onClick={() => {
                    handleRemoveItem()
                }}>Remove Item</button>
            </div>
            <div>
                <h1>Menu</h1>
                <ul>
                    {
                        Object.values(restaurant?.menu?.items).map((item, index) => {
                            return <li key={index}>{item.name} -
                                <button className="p-2 m-2 bg-green-400" onClick={() => {
                                    handleAddItem(item)
                                }}>Add Item</button>
                            </li>
                        })
                    }
                </ul>
            </div>

        </div>
    )
}

export default RestaurantMenu;
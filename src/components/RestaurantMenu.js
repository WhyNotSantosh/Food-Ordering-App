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
    const restaurantInfo = restaurant?.cards[0]?.card?.card?.info;
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
        <div className="flex justify-center p-4">
            {restaurantInfo && <div className="grid grid-cols-2 gap-12 border-dotted border-b-2 border-gray-600 p-2">
                <div className="">
                    <h1 className="font-bold p-2">{restaurantInfo.name}</h1>
                    {/* <img src={IMAGE_DOMAIN + restaurant.cards[0].card.card.info.cloudinaryImageId} alt="item" /> */}
                    <span className="p-2">{restaurantInfo.cuisines?.join(", ")}</span>
                    <span className="p-2 flex">{restaurantInfo.areaName}, {restaurantInfo.feeDetails?.fees[0]?.fee / 1000}kms</span>
                    <span className="p-2">{restaurantInfo.expectationNotifiers[0]?.text}</span>
                </div>
                <div className="grid grid-cols-1 justify-self-end border border-gray-300 rounded-lg text-center align-middle">
                    <span className="p-2 border-b m-2 border-gray-300 font-bold text-green-700">{restaurantInfo.avgRating} stars</span>
                    <span className="p-2 font-bold">{restaurantInfo.totalRatingsString}</span>
                </div>
            </div>}
            {/* <div>

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
            </div>*/}
        </div>
    )
}

export default RestaurantMenu;

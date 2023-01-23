import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ImageDomain } from "../../constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    const { id } = useParams(); // read dynamic url params
    const [restaurant, setRestaurant] = useState(null);
    useEffect(() => {
        getRestaurantInfo();
    }, []);

    getRestaurantInfo = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=17.3358592&lng=78.527558&menuId=17099");
        const json = await data.json();
        setRestaurant(json.data);
    }
    if (!restaurant) {
        return <Shimmer />;
    }
    return (
        <div>
            <h1> Restaurant Menu : {id} </h1>
            <h2>{restaurant.Name}</h2>
            <img src={ImageDomain + restaurant.cloudinaryImageId} alt="item" />
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
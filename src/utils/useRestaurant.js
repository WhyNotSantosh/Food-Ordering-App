import { useState, useEffect } from "react";
import { FETCH_RESTAURANT_MENU_URL } from "../../constants";

const useRestaurant = (resId) => {
    const [restaurant, setRestaurant] = useState(null);
    useEffect(() => {
        getRestaurantInfo();
    }, []);

    getRestaurantInfo = async () => {
        const data = await fetch( FETCH_RESTAURANT_MENU_URL + resId);
        const json = await data.json();
        setRestaurant(json.data);
    }

    return restaurant;
};

export default useRestaurant;
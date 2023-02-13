import { useState, useEffect } from "react";
import { SWIGGY_PUBLIC_DATA_END_POINT } from "../../constants";

const useRestaurantList = () => {
    const [restaurantsListData, setRestaurantsList] = useState([]);
    const [searchRestaurantList, setSearchRestaurantList] = useState([]);
    useEffect(() => {
        getRestaurantsListData();
    }, []);

    const getRestaurantsListData = async () => {
        const data = await fetch(SWIGGY_PUBLIC_DATA_END_POINT);
        const json = await data.json();
        console.log(json);
        setRestaurantsList(json?.data?.cards[2]?.data?.data?.cards);
        setSearchRestaurantList(json?.data?.cards[2]?.data?.data?.cards);
    }
    return [restaurantsListData, searchRestaurantList];
}

export default useRestaurantList;
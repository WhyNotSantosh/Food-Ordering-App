import { useState, useEffect } from "react";
import { SWIGGY_PUBLIC_DATA_END_POINT } from "../../constants";
import restaurantsDataDummy from "../../restaurantsDataDummy.js";

const useRestaurantList = () => {
  const [restaurantsListData, setRestaurantsList] = useState();
  const [searchRestaurantList, setSearchRestaurantList] = useState();
  useEffect(() => {
    getRestaurantsListData();
  }, []);

  const getRestaurantsListData = async () => {
    const cors =  await fetch("https://cors-anywhere.herokuapp.com/corsdemo");

    
    try {    
      const data = await fetch(SWIGGY_PUBLIC_DATA_END_POINT);
      if (!data.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
      const json = await data.json();
      setRestaurantsList(json?.data?.cards[2]?.data?.data?.cards);
      setSearchRestaurantList(json?.data?.cards[2]?.data?.data?.cards);
    } catch (e) {
      console.log("Unable to fetch restaturant data", e);
    }
  };
  return [restaurantsListData, searchRestaurantList];
};

export default useRestaurantList;

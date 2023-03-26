import { useParams } from "react-router-dom";
import { IMAGE_DOMAIN } from "../../constants";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { addItem, removeItem } from "../utils/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const RestaurantMenu = () => {
    const { id } = useParams(); // read dynamic url params    

    const restaurant = useRestaurantMenu(id);
    const restaurantInfo = restaurant?.cards[0]?.card?.card?.info;
    let result = [], uniqueFoodItems = [];
    const restaurantMenuInfo = restaurant?.cards;//[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards//[1]?.card.card.itemCards;

    const customFilter = (object, result) => {
        if (object.hasOwnProperty('itemCards'))
            result.push(object);

        for (var i = 0; i < Object.keys(object).length; i++) {
            if (typeof object[Object.keys(object)[i]] == "object") {
                customFilter(object[Object.keys(object)[i]], result);
            }
        }
    }
    const resMenu = restaurantMenuInfo?.length > 0 && customFilter(restaurantMenuInfo, result)//, "@type", "type.googleapis.com/swiggy.presentation.food.v2.Dish");
    if (result.length > 0) {
        const uniqueIds = [];
        let uniqueItems = [...new Set(result.flatMap(f => f.itemCards).map(p => p.card.info))];
        uniqueFoodItems = uniqueItems?.filter(element => {
            const isDuplicate = uniqueIds.includes(element.id);

            if (!isDuplicate) {
                uniqueIds.push(element.id);

                return true;
            }

            return false;
        });
    }
    const dispatch = useDispatch();
    const cartItems = useSelector(store => store.cart.items);
    const addFoodItem = (item) => {
        dispatch(addItem(item));
    }

    const removeFoodItem = () => {
        dispatch(removeItem());
    }

    if (!restaurant) {
        return <Shimmer />;
    }
    return (
        <div className="grid justify-center m-auto max-w-[70%] p-4">
            {restaurantInfo && <div className="grid grid-cols-2 gap-12 border-dotted border-b-2 p-2">
                <div>
                    <h1 className="font-bold p-2">{restaurantInfo.name}</h1>
                    {/* <img src={IMAGE_DOMAIN + restaurant.cards[0].card.card.info.cloudinaryImageId} alt="item" /> */}
                    <span className="p-2 font-small text-sm text-slate-500 font-sans">{restaurantInfo.cuisines?.join(", ")}</span>
                    <span className="p-2 flex font-small text-sm text-slate-500 font-sans">{restaurantInfo.areaName}, {restaurantInfo.feeDetails?.fees[0]?.fee / 1000}kms</span>
                    <span className="p-2 font-small text-sm text-slate-500 font-sans">{restaurantInfo.availabilityServiceabilityMessage || restaurantInfo?.expectationNotifiers[0]?.text}</span>
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
            </div> */}
            <div className="">
                <h1 className="font-bold border-b pt-5 pb-2  m-auto">Menu</h1>
                <ul>
                    {uniqueFoodItems.length > 0 ?
                        Object.values(uniqueFoodItems).map((item, index) => {
                            if (index < 25) {
                                return <li className="grid grid-cols-6 justify-center p-2 gap-2 m-2 border-b" key={index}>
                                    <>
                                        <div className="col-span-5">
                                            <span className="font-bold">{item?.name}</span>
                                            <br />
                                            <span>₹ {(item?.price || item?.defaultPrice) / 100}</span>
                                            <br />
                                            <span className="font-small text-sm text-slate-500 font-sans">{item?.description}</span>
                                        </div>
                                        <div className="relative justify-self-end ">
                                            {item?.imageId &&
                                                <img className="w-[118] rounded-md h-[96] object-cover" src={IMAGE_DOMAIN + item?.imageId} alt="item" />
                                            }
                                            <div class="text-center w-[118] mt-1 border-2 rounded-md">
                                                <button className="text-gray-800 font-extrabold px-3" onClick={() => {
                                                    removeFoodItem()
                                                }}>
                                                    -
                                                </button>
                                                <button className="text-green-800 font-bold  px-2 m-1 text-sm border-x-2 align-middle" disabled={true}>{cartItems.filter(f => f.id === item.id).length}</button>
                                                <button className="text-green-800 font-extrabold px-3" onClick={() => {
                                                    addFoodItem(item)
                                                }}>
                                                    +
                                                </button>
                                            </div>
                                        </div></>
                                </li>
                            }

                        }) : <span>No restaurant menu items.</span>
                    }
                </ul>
            </div>
        </div>
    )
}

export default RestaurantMenu;

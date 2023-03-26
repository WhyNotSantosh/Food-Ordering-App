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
    const restaurantMenuInfo = restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card.card.itemCards;
    const dispatch = useDispatch();
    const addFoodItem = (item) => {
        dispatch(addItem(item));
    }

    const handleRemoveItem = () => {
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
                    <span className="p-2 font-small text-sm text-slate-500 font-sans">{restaurantInfo.expectationNotifiers[0]?.text}</span>
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
                    {
                        Object.values(restaurantMenuInfo).map((item, index) => {
                            return <li className="grid grid-cols-6 justify-center p-2 gap-2 m-2 border-b" key={index}>
                                <>
                                    <div className="col-span-5">
                                        <span className="font-bold">{item?.card?.info?.name}</span>
                                        <br />
                                        <span>₹ {(item?.card?.info?.price || item?.card?.info?.defaultPrice) / 100}</span>
                                        <br />
                                        <span className="font-small text-sm text-slate-500 font-sans">{item?.card?.info?.description}</span>
                                    </div>
                                    <div className="relative justify-self-end ">
                                        {item?.card?.info?.imageId &&
                                            <img className="w-[118] rounded-md h-[96] object-cover" src={IMAGE_DOMAIN + item?.card?.info?.imageId} alt="item" />
                                        }
                                        <div class="text-center">
                                            {/* <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l" onClick={() => {
                                                handleRemoveItem()
                                            }}>
                                                -
                                            </button> */}
                                            <button className="top-0 p-2 m-2 text-green-400 rounded-md font-bold border border-gray-300 w-24 h-10" onClick={() => {
                                                addFoodItem(item)
                                            }}>Add</button>
                                            {/* <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r" onClick={() => {
                                                handleAddItem(item)
                                            }}>
                                                +
                                            </button> */}
                                        </div>
                                    </div></>
                            </li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default RestaurantMenu;

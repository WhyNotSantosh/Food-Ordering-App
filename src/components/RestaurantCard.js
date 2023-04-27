import { IMAGE_DOMAIN } from "../../constants";

const RestaurantCard = (props) => {
    return (
        <div className="w-64 rounded my-2">
            <img src={IMAGE_DOMAIN + props?.restaurantsList?.data?.cloudinaryImageId} />
            <span className="font-bold font-sans pt-3 block">{props?.restaurantsList?.data?.name}</span>
            <span className="font-medium text-sm text-slate-500 font-sans mb-3 border-b pb-1 block">{props?.restaurantsList?.data?.cuisines?.join(', ')}</span>
            <span className="font-medium text-sm text-slate-500 mb-3 block">{props?.restaurantsList?.data?.lastMileTravelString?.toUpperCase()}</span>
        </div>
    )
}

export default RestaurantCard;

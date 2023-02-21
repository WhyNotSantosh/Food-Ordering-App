import { IMAGE_DOMAIN } from "../../constants";

const RestaurantCard = (props) => {
    return (
        <div className="w-56 p-2 m-2 shadow-lg bg-stone-100 rounded h-64">
            <img src={IMAGE_DOMAIN + props.restaurantsList.data.cloudinaryImageId} />
            <h2 className="font-bold text-xl pt-3">{props.restaurantsList.data.name}</h2>
            <h3 className="text-sm">{props.restaurantsList.data.cuisines.join(', ')}</h3>
            <h4>{props.restaurantsList.data.lastMileTravelString}</h4>
        </div>
    )
}

export default RestaurantCard;
import { IMAGE_DOMAIN } from "../../constants";

const RestaurantCard = (props) => {
    return (
        <div className="card">
            <img src={IMAGE_DOMAIN + props.restaurantsList.data.cloudinaryImageId} />
            <h2>{props.restaurantsList.data.name}</h2>
            <h3>{props.restaurantsList.data.cuisines.join(',')}</h3>
            <h4>{props.restaurantsList.data.lastMileTravelString}</h4>
        </div>
    )
}

export default RestaurantCard;
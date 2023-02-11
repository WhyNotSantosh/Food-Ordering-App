export function filterRestaurants(searchText, restaurantsList) {
    const filterData = restaurantsList.filter((restaurant) =>
        restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
    );
    return filterData;
}

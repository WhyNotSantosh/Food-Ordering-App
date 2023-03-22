import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

    const cartItems = useSelector(store => store.cart.items)
    //const cartItems = useSelector(store => store) // never subscribe to entire store, as anything changes in entire store, component re-renders again and again
    const dispatch = useDispatch();
    const handleClearCartItems = () => {
       dispatch(clearCart());
    }
    return (<div>
        <h1>Cart Items - {cartItems.length}</h1>
        <button onClick={() => {
            handleClearCartItems();
        }}>Clear Cart</button>
    </div>)
}

export default Cart;
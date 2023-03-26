import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import { IMAGE_DOMAIN } from "../../constants";
import Modal from "./Modal";
import Info from "./Info";
const Cart = () => {
    const [openModal, setOpenModal] = useState(false);
    const [openInfoModal, setOpenInfoModal] = useState(false);
    const infoModel = ["I am functional component.", "I have subscribed to cart slice created using redux.", "All the items selected are retrieved from redux store."];
    const cartItems = useSelector(store => store.cart.items);
    let uniqueFoodItems = [];
    if (cartItems.length > 0) {
        let uniqueItems = [...new Set(cartItems)];
        uniqueFoodItems = uniqueItems.map(value => [value, cartItems.filter(str => str === value).length]);
    }
    const info = ["Order Placed succesfully! Bon Appétit!"];
    const modalTitle = "Order Confirmation";

    //const cartItems = useSelector(store => store) // never subscribe to entire store, as anything changes in entire store, component re-renders again and again
    const dispatch = useDispatch();
    const handleClearCartItems = () => {
        dispatch(clearCart());
    }
    const placeOrder = () => {
        setOpenModal(true);
        dispatch(clearCart());
    }
    return (
        <>
            <div className="p-2 m-2"><Info openModal={setOpenInfoModal} /></div>
            <div className="grid justify-center m-auto max-w-[70%] p-4">
                <div className="grid grid-cols-4 pb-4 border-b items-baseline">
                    <span className="col-span-3  border rounded-lg bg-orange-200 p-2 m-2">Total Cart Items - {cartItems.length}</span>
                    <button className="col-span-1 justify-self-end border rounded-lg bg-slate-200 p-2" onClick={() => {
                        handleClearCartItems();
                    }} disabled={!cartItems.length}>Clear Cart</button>
                </div>
                <ul>
                    {
                        Object.values(uniqueFoodItems).map((item, index) => {
                            return <li className="grid grid-cols-6 justify-center p-2 gap-2 m-2 border-b" key={index}>
                                <>
                                    <div className="col-span-5">
                                        <span className="font-bold">{item[0].name} - [{item[1]}]</span>
                                        <br />
                                        <span>₹ {(item[0]?.price || item[0]?.defaultPrice) / 100}</span>
                                        <br />
                                        <span className="font-small text-sm text-slate-500 font-sans">{item[0]?.description}</span>
                                    </div>
                                    <div className="relative justify-self-end ">
                                        {item[0]?.imageId &&
                                            <img className="w-[118] rounded-md h-[96] object-cover" src={IMAGE_DOMAIN + item[0]?.imageId} alt="item" />
                                        }
                                    </div></>
                            </li>
                        })
                    }
                </ul>
                {cartItems?.length > 0 && <div className="grid">
                    <button className="col-span-1 justify-self-center border rounded-lg bg-orange-200 p-2" onClick={() => {
                        placeOrder();
                    }} disabled={!cartItems.length}>Place Order</button>
                </div>}
                {openModal && <Modal closeModal={setOpenModal} info={info} title={modalTitle} />}
                {openInfoModal && <Modal closeModal={setOpenInfoModal} info={infoModel} />}
            </div>
        </>)
}

export default Cart;
import React from "react";
import { useCart } from "../context/Cart";

const Item = (props) => {
    const cart = useCart();
    console.log(cart);
    return (
        <div className="bg-blue-50 m-1 p-2 rounded text-center">
            <p className="text-xl font-bold">{props.name}</p>
            <p>price : {props.price}$</p>
            <button
                onClick={() =>
                    cart.setItem([...cart.item, { name: props.name, price: props.price }])
                }
                className="px-3 py-1 bg-yellow-100 hover:bg-green-300 rounded-md my-3 font-semibold"
            >
                Add to cart
            </button>
        </div>
    );
};

export default Item;

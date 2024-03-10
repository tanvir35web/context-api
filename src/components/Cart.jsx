import React from "react";
import { useCart } from "../context/Cart";

const Cart = () => {
    const cart = useCart();
    const totalBill = cart.item.reduce((a,b) => a+b.price, 0);

    return (
        <div className="text-center bg-yellow-50 p-4">
            <p className="font-bold mb-2 border-b-2 pb-2 border-gray-500">Shopping-Cart</p>
            {cart &&
                cart.item.map((product, index) => (
                    <li key={index} className="list-none">
                        {product.name} -- {product.price}$
                    </li>
                ))}
            <p className="text-xl font-bold mt-2">Total Bill: {totalBill} $</p>
        </div>
    );
};

export default Cart;

import React from "react";
import { useCart } from "../context/Cart";

const Cart = () => {
    const cart = useCart();
    const totalBill = cart.item.reduce((a,b) => a+b.price, 0);

    return (
        <div className="text-center bg-yellow-50 p-4">
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

import { createContext, useContext, useState } from "react";

export const cartContext = createContext(null);

export const useCart = () => {
    const cart = useContext(cartContext);
    return cart;
}

export const CartProvider = (props) => {
    const [item, setItem] = useState([]);
    return (
        <cartContext.Provider value={{ item, setItem }}>
            {props.children}
        </cartContext.Provider>
    );
};

import { createContext, useState } from "react";

export const CounterContextApi = createContext(null);

export const CounterProvider = (props) => {
    const [count, setCount] = useState(0);

    return (
        <CounterContextApi.Provider value={{ count, setCount }}>
            {props.children}
        </CounterContextApi.Provider>
    );
};

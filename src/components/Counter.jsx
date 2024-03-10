import React from "react";
import { useContext } from "react";
import { CounterContextApi } from "../context/CounterContext";

const Counter = () => {
    const counterContext = useContext(CounterContextApi);
    return (
        <div className="text-center">
            <button
                onClick={() =>
                    counterContext.setCount(counterContext.count + 1)
                }
                className="p-2 bg-gray-100 m-1 rounded-md hover:bg-green-200"
            >
                Increment
            </button> 
            <button
                onClick={() =>
                    counterContext.setCount(counterContext.count - 1)
                }
                className="p-2 bg-gray-100 m-1 rounded-md hover:bg-green-200"
            >
                Decrement
            </button> 
        </div>
    );
};

export default Counter;

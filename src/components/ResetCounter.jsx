import React, { useContext } from "react";
import { CounterContextApi } from "../context/CounterContext";

const ResetCounter = () => {

    const counterContext = useContext(CounterContextApi)
    
    return (
        <div className="text-center">
            <button onClick={() => counterContext.setCount(0)} className="p-2 w-[193px] bg-gray-100 m-1 rounded-md hover:text-white hover:bg-red-500">
                RESET
            </button>
        </div>
    );
};

export default ResetCounter;

import "./App.css";
import Counter from "./components/Counter";
import { useContext } from "react";
import { CounterContextApi } from "./context/CounterContext";
import ResetCounter from "./components/ResetCounter";

function App() {

  const counterContext = useContext(CounterContextApi)

    return (
        <div className="p-10">
            <h1 className="text-4xl mb-5 font-bold text-center">Count is {counterContext.count}</h1>
            <Counter />
            <Counter />
            <Counter />
            <Counter />
            <ResetCounter />
        </div>
    );
}

export default App;

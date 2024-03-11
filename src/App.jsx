import Cart from "./components/Cart";
import Item from "./components/Item";
import ResetShoppingCart from "./components/ResetShoppingCart";
import Title from "./components/Title";

function App() {
    return (
        <>
            <Title />
            <div className="p-10 grid grid-cols-2">
                <Item name="MacBook pro" price={1000} />
                <Item name="iPhone 15 pro" price={1300} />
                <Item name="Apple watch 8" price={600} />
                <Item name="Apple Vision Pro" price={6000} />
                <Item name="Air Pods pro 2nd gen" price={300} />
                <Item name="iPad 9Gen" price={1000} />
                
            </div>
            <ResetShoppingCart />
            <Cart />
        </>
    );
}

export default App;

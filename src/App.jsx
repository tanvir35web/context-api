import Cart from "./components/Cart";
import Item from "./components/Item";

function App() {
    return (
        <>
            <div className="p-10 grid grid-cols-2">
                <Item name="MacBook pro" price={1000} />
                <Item name="iPhone 15 pro" price={1300} />
                <Item name="Apple watch 8" price={600} />
                <Item name="Apple Vision Pro" price={6000} />
            </div>
            <Cart />
        </>
    );
}

export default App;

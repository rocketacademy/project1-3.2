import "./App.css";
import { useState } from "react";
import LandingPage from "./LandingPage.jsx";
import ShoppingCart from "./Shoppingcart.jsx";

function App() {
  //for switching pages between landingpage and shoppingcart
  const [showShoppingCart, setShowShoppingCart] = useState(false);
  const goToShoppingCart = () => {
    setShowShoppingCart(true);
  };

  //for adding jewelries into the shopping cart
  const [shoppingCart, setshoppingCart] = useState([]);
  const handleAddToCart = (item) => {
    item.price = parseFloat(item.price.replace(/,/g, ""));
    setshoppingCart([...shoppingCart, item]);
  };

  return (
    <>
      <div>
        {showShoppingCart ? (
          <ShoppingCart shoppingCart={shoppingCart} />
        ) : (
          <LandingPage
            goToShoppingCart={goToShoppingCart}
            onAddToCart={handleAddToCart}
          />
        )}
        {/* <JewelryItem onAddToCart={handleAddToCart} /> */}
      </div>
    </>
  );
}

export default App;

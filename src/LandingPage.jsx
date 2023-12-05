import React, { useState } from "react";
import JewelryItem from "./JewelryItems";
import jewelryItems from "./JewelryData";
import "./landingPage.css";

function LandingPage({ goToShoppingCart, onAddToCart }) {
  const [selectedCategory, setSelectedCategory] = useState("bestSellers");

  const [showJewelryItems, setShowJewelryItems] = useState(false);

  const filteredJewelryItems = jewelryItems.filter((item) =>
    item.categories.includes(selectedCategory)
  );

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setShowJewelryItems(true);
  };

  return (
    <div className="landing_page">
      {/* Navbar */}
      <div className="navBar">
        <div className="left_buttons">
          <button onClick={() => handleCategoryClick("bestSellers")}>
            Best Sellers
          </button>
          <button onClick={() => handleCategoryClick("Bracelets")}>
            Bracelets
          </button>
          <button onClick={() => handleCategoryClick("Rings")}>Rings</button>
          <button onClick={() => handleCategoryClick("Earrings")}>
            Earrings
          </button>
        </div>
        <div className="right_buttons">
          <button onClick={goToShoppingCart}>
            <img src="./shopping cart.png" alt="shopping cart" />
          </button>
        </div>
      </div>

      {/* product section*/}
      {showJewelryItems ? (
        <div className="product_section">
          <div className="title">
            <h3>
              {selectedCategory === "bestSellers"
                ? "Best Sellers"
                : selectedCategory}
            </h3>
            <div className="product_Gallery">
              {filteredJewelryItems.map((item) => (
                <JewelryItem
                  key={item.id}
                  name={item.name}
                  price={item.price}
                  picture={item.picture}
                  onAddToCart={onAddToCart}
                />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="default_page">
          <img src="./landingpageimage3.jpg" className="image3" />
          <div className="text_section">
            <p>"Shall I compare thee to a gem so rare?</p>
            <p>Thou art more lovely and more fair.</p>
            <p>In every jewel, your grace does shine,</p>
            <p>A symbol of love, forever thine."</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default LandingPage;

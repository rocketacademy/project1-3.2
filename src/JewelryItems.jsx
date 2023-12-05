import React from "react";
import "./JewelryItems.css";

function JewelryItem(props) {
  return (
    <div className="jewelry_item">
      <img src={props.picture} alt={props.name} />
      <p>{props.name}</p>
      <p>Price: ${props.price}</p>
      <button
        onClick={() =>
          props.onAddToCart({
            name: props.name,
            price: props.price,
            picture: props.picture,
          })
        }
      >
        Buy
      </button>
    </div>
  );
}
export default JewelryItem;

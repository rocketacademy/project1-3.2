import { useState } from "react";
import "./cart.css";

function ShoppingCart({ shoppingCart }) {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    cardNumber: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const totalPrice = shoppingCart.reduce(
    (total, item) => total + Number(item.price),
    0
  );

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    if (submitted) setSubmitted(false);
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      name: "",
      address: "",
      cardNumber: "",
    });
    setSubmitted(true);
    console.log("Form submitted with data:", formData);
  };

  return (
    <div className="shopping_cart">
      <div className="items_section">
        <h2>Items</h2>
        <ul className="ul_style">
          {shoppingCart.map((item) => (
            <li key={item.id}>
              <div className="item_container">
                <img
                  src={item.picture}
                  alt={item.name}
                  className="item_image"
                />
                <div className="item_info">
                  <p className="item_name">{item.name}</p>
                  <p className="item_price">${item.price}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <h3 className="total_price">Total Price: ${totalPrice}</h3>
      </div>
      <div className="checkout_section">
        <h2>Checkout</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              //This means that when the form containing this input field is submitted,
              //the data for the user's name will be labeled with the key "name" in the form data.
              name="name"
              //This part is responsible for making the input field a "controlled input."
              //It means that the input field's value is controlled by the formData.name property.
              //Whatever value is in formData.name will be displayed in the input field. When the user types in the field, the handleFormChange function is called to update formData.name,
              //and as a result, the value in the input field changes.
              value={formData.name}
              onChange={handleFormChange}
            />
          </label>
          <label>
            Address:
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleFormChange}
            />
          </label>
          <label>
            Card Number:
            <input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleFormChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
        {submitted && <div className="success_message">Success!</div>}
      </div>
    </div>
  );
}

export default ShoppingCart;

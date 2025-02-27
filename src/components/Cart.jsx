import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Cart({ cart, setCart }) {
  const [sortOrder, setSortOrder] = useState("name");

  // Sorting logic
  const sortedCart = [...cart].sort((a, b) => {
    if (sortOrder === "name") return a.name.localeCompare(b.name);
    if (sortOrder === "price") return a.price - b.price;
    return 0;
  });

  // Increase quantity
  const increaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
      )
    );
  };

  // Decrease quantity
  const decreaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Remove item from cart
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Total price calculation
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0
  );

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">🛒 Shopping Cart</h1>

      {/* Sorting & Clear Cart */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <label htmlFor="sort" className="mr-2 text-gray-700">
            Sort by:
          </label>
          <select
            id="sort"
            className="border rounded px-3 py-2 text-gray-700 focus:ring-2 focus:ring-blue-500"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="name">Name</option>
            <option value="price">Price</option>
          </select>
        </div>
        {cart.length > 0 && (
          <button
            onClick={() => setCart([])}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Clear Cart
          </button>
        )}
      </div>

      {sortedCart.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray text-lg btn btn-primary">Your cart is empty 😢</p>
          <Link
            to="/"
            className="text-white btn btn-info"
          >
            Continue Shopping 😢
          </Link>
        </div>
      ) : (
        <div className="grid gap-6 max-w-3xl mx-auto">
          {sortedCart.map((product) => (
            <div
              key={product.id}
              className="flex items-center bg-white rounded-xl shadow-md p-4"
            >
              {/* Product Image */}
              <img
                src={product.image}
                alt={product.name}
                className="w-24 h-24 object-cover rounded-lg"
              />

              {/* Product Details */}
              <div className="ml-4 flex-1">
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <p className="text-gray-600">${product.price.toFixed(2)}</p>

                {/* Quantity Controls */}
                <div className="flex items-center mt-2">
                  <button
                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-3 rounded-l"
                    onClick={() => decreaseQuantity(product.id)}
                    disabled={product.quantity === 1}
                  >
                    <FontAwesomeIcon icon={faMinus} />
                  </button>

                  <span className="mx-3 text-lg font-semibold">
                    {product.quantity}
                  </span>

                  <button
                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-3 rounded-r"
                    onClick={() => increaseQuantity(product.id)}
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                </div>
              </div>

              {/* Remove Button */}
              <button
                className="text-red-600 hover:text-red-900 ml-4"
                onClick={() => removeFromCart(product.id)}
              >
                <FontAwesomeIcon icon={faTrash} className="mr-2" />
                Remove
              </button>
            </div>
          ))}

          {/* Checkout Section */}
<div className="p-4 bg-gray-100 rounded-lg shadow-md text-center">
    <h3 className="text-xl font-bold">Total: ${totalPrice.toFixed(2)}</h3>
    <button
        className="btn btn-primary w-full mt-4"
        onClick={() => {
            // Replace with your actual checkout URL
            window.location.href = "/checkout";
        }}
    >
        Proceed to Checkout
    </button>
</div>

        </div>
      )}
    </div>
  );
}

export default Cart;

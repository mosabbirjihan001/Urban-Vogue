import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

function BuyNowPage() {
  const location = useLocation();
  const product = location.state?.product;  // Access the product passed via state
  const [paymentMethod, setPaymentMethod] = useState('creditCard'); // Default payment method
  const [quantity, setQuantity] = useState(1); // Initialize quantity state

  // Function to handle quantity changes
  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10); // Parse as integer
    if (!isNaN(newQuantity) && newQuantity > 0) {
      setQuantity(newQuantity);
    } else {
      setQuantity(1); // Reset to 1 if invalid input
    }
  };

  if (!product) {
    return (
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-4">Buy Now</h1>
        <p>No product selected. Please return to the home page to select a product.</p>
        <Link to="/" className="btn btn-primary mt-4">Return to Home</Link>
      </div>
    );
  }

  const totalPrice = product.price * quantity;  // Calculate total price

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Buy Now - {product.name}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img src={product.image} alt={product.name} className="rounded-lg shadow-md" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>
          <p className="text-gray-700 mb-4">${product.price}</p>
          <p className="text-gray-600 mb-4">{product.description}</p>

          <div className="mb-4">
            <label htmlFor="quantity" className="block text-gray-700 text-sm font-bold mb-2">
              Quantity:
            </label>
            <input
              type="number"
              id="quantity"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={quantity}  // Use the state value
              onChange={handleQuantityChange}  // Use the change handler
            />
          </div>

          {/* Total Price */}
          <p className="text-xl font-semibold mb-4">Total: ${totalPrice.toFixed(2)}</p>

          {/* Payment Options */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Payment Method</h3>
            <div className="flex items-center">
              <input
                type="radio"
                id="creditCard"
                name="paymentMethod"
                value="creditCard"
                className="mr-2"
                checked={paymentMethod === 'creditCard'}
                onChange={() => setPaymentMethod('creditCard')}
              />
              <label htmlFor="creditCard" className="mr-4">Credit Card</label>

              <input
                type="radio"
                id="paypal"
                name="paymentMethod"
                value="paypal"
                className="mr-2"
                checked={paymentMethod === 'paypal'}
                onChange={() => setPaymentMethod('paypal')}
              />
              <label htmlFor="paypal">PayPal</label>
            </div>
          </div>

          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline">
            Complete Purchase (Simulated)
          </button>
        </div>
      </div>
    </div>
  );
}

export default BuyNowPage;
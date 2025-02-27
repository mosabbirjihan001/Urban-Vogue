import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Cart from './components/Cart'; // Import the Cart component
import MenSection from './components/MenSection';
import WomenSection from './components/WomenSection';
import ChildrenSection from './components/ChildrenSection';
import SalePage from './pages/SalePage';
import BestSellersPage from './pages/BestSellersPage';
import NewArrivalsPage from './pages/NewArrivalsPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import BuyNowPage from './components/BuyNowPage'

function App() {
  const [cart, setCart] = useState([]); // Initialize cart state

  // Function to add item to cart
  const addToCart = (product) => {
    const existingProductIndex = cart.findIndex((item) => item.id === product.id);

    if (existingProductIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex] = {
        ...updatedCart[existingProductIndex],
        quantity: (updatedCart[existingProductIndex].quantity || 1) + 1,
      };
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };
  const buyNow = (product) => {
    // Logic to handle "Buy Now" click (e.g., redirect to checkout)
    window.location.href = `/checkout?productId=${product.id}`; // Example redirect
};

  return (
    <Router>
      <div className="bg-base-200 min-h-screen">
        <Navbar cartCount={cart.length} /> {/* Pass cart count to Navbar */}

        <main className="container mx-auto py-10">
          <Routes>
            <Route path="/men" element={<MenSection />} />
            <Route path="/women" element={<WomenSection />} />
            <Route path="/children" element={<ChildrenSection />} />
            <Route path="/" element={<Home addToCart={addToCart} buyNow={buyNow} />} />
            <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
            <Route path="/sale" element={<SalePage />} />
            <Route path="/best-sellers" element={<BestSellersPage />} />
            <Route path="/new-arrivals" element={<NewArrivalsPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
             <Route path="/buy-now" element={<BuyNowPage />} />  {/* Add the route for BuyNowPage */}
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
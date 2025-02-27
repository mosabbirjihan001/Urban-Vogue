import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import HomeSection from './HomeSection';
import productData from '../data/productData';
import { motion } from 'framer-motion';

function getRandomProducts(products, count) {
    const shuffled = [...products].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function Home({ addToCart }) {
    const numProductsToShow = 6;
    const menProducts = getRandomProducts(productData.men, numProductsToShow);
    const womenProducts = getRandomProducts(productData.women, numProductsToShow);
    const childrenProducts = getRandomProducts(productData.children, numProductsToShow);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleAddToCart = (product) => {
        addToCart(product);
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProduct(null);
    };

    return (
        <div className="bg-base-200 py-6">

           {/* Marquee with Pulsing Animation */}
           <motion.div
                className="mb-4 bg-gradient-to-r from-green-400 to-blue-500 text-white py-3 rounded-md shadow-lg overflow-hidden" // Added mb-4
                animate={{ backgroundPosition: '200% center' }}
                transition={{
                    loop: Infinity,
                    duration: 5,
                    ease: "linear"
                }}
                style={{ backgroundSize: '200% auto' }}
            >
                <Marquee speed={60} gradient={false} className="font-semibold">
                    <span>✨ Free Shipping on Orders Over $75!    </span>
                    <span>🔥 Hot New Arrivals - Just In!    </span>
                    <span>☀️ Summer Clearance - Up to 60% Off!    </span>
                    <span>🛍️ Limited Time Offer - Don't Miss Out!    </span>
                </Marquee>
            </motion.div>

            {/* Banner with Tilt Effect and Overlapping Elements */}
            <motion.div
                className="relative w-full h-96 rounded-xl overflow-hidden shadow-2xl mt-6"
                style={{ perspective: 600 }}
            >
                <motion.img
                    src="https://i.ibb.co.com/pvyvf3sn/pexels-minan1398-1087727.jpg"
                    alt="Store Banner"
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ willChange: 'transform' }}
                    initial={{ scale: 1.1 }}
                    animate={{ rotate: 2, scale: 1.0 }}  // Subtle zoom and rotation
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-gray-900 to-transparent opacity-70"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
                    <h1 className="text-5xl font-extrabold mb-4 drop-shadow-md">
                        Style Unleashed
                    </h1>
                    <p className="text-xl mb-6 drop-shadow-md">
                        Express yourself with our curated collections.
                    </p>
                    <Link
                        to="/new-arrivals"
                        className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-3 px-6 rounded-full shadow-lg transition duration-300"
                    >
                        Discover Your Look
                    </Link>
                </div>
            </motion.div>
            
            
            <div className="my-12 px-6 md:px-12 lg:px-24 text-center relative overflow-hidden">
    {/* Background Image */}
    <div
        className="absolute inset-0 bg-gradient-to-br from-purple-400 to-blue-500 opacity-90 rounded-2xl blur-md transform scale-110"
        style={{
            backgroundImage: `url(https://i.ibb.co/21j91gjJ/pexels-kiara-coll-1519602-2928381.jpg)`, // Corrected URL
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}
    ></div>

    <motion.div
        className="relative z-10 bg-white bg-opacity-10 backdrop-filter backdrop-blur-md py-10 px-8 rounded-2xl shadow-2xl max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
            Unlock Exclusive Savings!
        </h2>
        <p className="text-lg text-gray-700 mb-6">
            Get up to <span className="font-bold text-indigo-600">40% OFF</span> on selected items. Limited time offer!
        </p>
        <Link
            to="/sale"
            className="inline-block bg-indigo-600 text-white font-medium py-3 px-8 rounded-full shadow-md hover:bg-indigo-700 transition-colors duration-300"
        >
            Explore the Sale
        </Link>
    </motion.div>
</div>


              {/* Men's Section */}
              <HomeSection title="Men's Collection">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {menProducts.map((product) => (
                        <div key={product.id} className="card bg-base-100 shadow-xl">
                            <figure><img src={product.image} alt={product.name} /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{product.name}</h2>
                                <p>${product.price}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-neutral" onClick={() => handleAddToCart(product)}>Add to Cart</button>
                                    <Link to={`/buy-now?product=${product.id}`} className="btn btn-warning">Buy Now</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </HomeSection>

            {/* Women's Section */}
            <HomeSection title="Women's Collection">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {womenProducts.map((product) => (
                        <div key={product.id} className="card bg-base-100 shadow-xl">
                            <figure><img src={product.image} alt={product.name} /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{product.name}</h2>
                                <p>${product.price}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary" onClick={() => handleAddToCart(product)}>Add to Cart</button>
                                    <Link to={`/buy-now?product=${product.id}`} className="btn btn-secondary">Buy Now</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </HomeSection>

            {/* Children's Section */}
            <HomeSection title="Children's Collection">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {childrenProducts.map((product) => (
                        <div key={product.id} className="card bg-base-100 shadow-xl">
                            <figure><img src={product.image} alt={product.name} /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{product.name}</h2>
                                <p>${product.price}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary" onClick={() => handleAddToCart(product)}>Add to Cart</button>
                                    <Link to={`/buy-now?product=${product.id}`} className="btn btn-secondary">Buy Now</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </HomeSection>

            {/* Modal */}
            {isModalOpen && (
                <div className="modal modal-open">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Item Added to Cart!</h3>
                        {selectedProduct && (
                            <p className="py-4">
                                You have successfully added <b>{selectedProduct.name}</b> to your cart.
                            </p>
                        )}
                        <div className="modal-action">
                            <button className="btn" onClick={closeModal}>Continue Shopping</button>
                            <Link to="/cart" className="btn btn-primary">Go to Cart</Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Home;

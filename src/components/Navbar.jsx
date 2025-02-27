

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser, faSearch } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';

function Navbar({ cartCount }) {  // Receive cartCount as a prop
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    return (
        <div className="navbar bg-white shadow-md py-4 px-6">
            <div className="navbar-start">
                <Link to="/" className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text text-2xl">
                Urban Vogue
                </Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link to="/men" className="text-gray-600 hover:text-blue-500 transition duration-300">Men</Link>
                    </li>
                    <li>
                        <Link to="/women" className="text-gray-600 hover:text-pink-500 transition duration-300">Women</Link>
                    </li>
                    <li>
                        <Link to="/children" className="text-gray-600 hover:text-green-500 transition duration-300">Children</Link>
                    </li>
                    <li>
                        <Link to="/sale" className="text-gray-600 hover:text-red-500 transition duration-300">Sale</Link>
                    </li>
                    <li>
                        <Link to="/best-sellers" className="text-gray-600 hover:text-purple-500 transition duration-300">Best Sellers</Link>
                    </li>
                    <li>
                        <Link to="/new-arrivals" className="text-gray-600 hover:text-yellow-500 transition duration-300">New Arrivals</Link>
                    </li>
                </ul>
            </div>

            <div className="navbar-end">
                {/* Search Bar */}
                <motion.div
                    className="relative"
                    initial={false}
                    animate={{ width: isSearchOpen ? 200 : 0, opacity: isSearchOpen ? 1 : 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                    <input
                        type="text"
                        placeholder="Search..."
                        className="input input-bordered w-full max-w-xs absolute top-0 right-0 bg-white"
                        style={{ display: isSearchOpen ? 'block' : 'none' }}
                    />
                </motion.div>
                <button className="btn btn-ghost btn-circle" onClick={() => setIsSearchOpen(!isSearchOpen)}>
                    <FontAwesomeIcon icon={faSearch} className="h-5 w-5 text-gray-700" />
                </button>

                <Link to="/cart" className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <FontAwesomeIcon icon={faShoppingCart} className="h-5 w-5 text-gray-700" />
                        <span className="badge badge-sm indicator-item bg-blue-500 border-none text-white">{cartCount}</span>  {/* Display cartCount here */}
                    </div>
                </Link>

                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://api.dicebear.com/7.x/pixel-art/svg?seed=JohnDoe" alt="User Avatar" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <Link to="/profile" className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </Link>
                        </li>
                        <li><Link to="/settings">Settings</Link></li>
                        <li><Link to="/logout">Logout</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
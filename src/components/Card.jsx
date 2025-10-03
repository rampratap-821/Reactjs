import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Sample Cart Items data
const cartItems = [
    {
        id: 1,
        name: "Daisy Casual Bag",
        quantity: 1,
        price: 800.00,
        image: "https://via.placeholder.com/50/ff9800/ffffff?text=Bag"
    },
    {
        id: 2,
        name: "Corduroy Shirts",
        quantity: 1,
        price: 3200.00,
        image: "https://via.placeholder.com/50/f44336/ffffff?text=Shirt"
    },
];

const Card = ({ onMouseEnter, onMouseLeave }) => {
    const dropdownRef = useRef(null);

    // Total price calculate करें
    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        // Dropdown container with higher z-index and proper positioning
        <div 
            ref={dropdownRef}
            className="w-80 bg-white shadow-2xl rounded-xl p-6 border border-gray-100 z-50 absolute right-0 top-full mt-2"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        > 
            
            {/* Dropdown Items List */}
            <div className="space-y-4">
                {cartItems.map((item) => (
                    <div key={item.id} className="flex items-start justify-between">
                        
                        {/* Item Details */}
                        <div className="flex items-center space-x-3">
                            {/* Item Image */}
                            <img 
                                src={item.image} 
                                alt={item.name} 
                                className="w-16 h-16 rounded-md object-cover flex-shrink-0 border border-gray-200" 
                            />
                            <div className="flex flex-col">
                                <span className="text-sm font-semibold text-gray-800 hover:text-green-600 transition cursor-pointer">{item.name}</span>
                                <span className="text-xs text-gray-500 mt-1">
                                    {item.quantity} × <span className="text-green-600 font-bold">${item.price.toFixed(2)}</span>
                                </span>
                            </div>
                        </div>

                        {/* Remove Button (X icon) */}
                        <button className="text-gray-400 hover:text-red-500 transition-colors ml-2 p-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                ))}
            </div>

            {/* Total Section */}
            <div className="border-t border-gray-200 mt-5 pt-4">
                <div className="flex justify-between items-center mb-5">
                    <span className="text-base font-semibold text-gray-700">Total</span>
                    <span className="text-xl font-extrabold text-green-600">${total.toFixed(2)}</span>
                </div>

                {/* Buttons */}
                <div className="flex space-x-3">
                    {/* View Cart Button */}
                    <Link 
                        to="/cart" 
                        className="flex-1 text-center px-4 py-3 text-sm font-bold text-green-600 border border-green-600 rounded-md hover:bg-green-50 transition-colors"
                    >
                        View cart
                    </Link>
                    
                    {/* Checkout Button */}
                    <Link 
                        to="/checkout" 
                        className="flex-1 text-center px-4 py-3 text-sm font-bold text-white bg-green-600 rounded-md hover:bg-green-700 transition-colors"
                    >
                        Checkout
                    </Link>
                </div>
            </div>
        </div>
    );
};



export default Card

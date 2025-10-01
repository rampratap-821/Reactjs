

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
   
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isCategoryOpen, setIsCategoryOpen] = useState(false); 
    const [isBrowseOpen, setIsBrowseOpen] = useState(false); 
    
    // Home Link Dropdown State (नया State)
    const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);
    
    // Mock Categories List
    const categories = [
        "All Categories",
        "Milks and Dairies",
        "Wines & Alcohol",
        "Clothing & Beauty",
        "Pet Foods & Toy",
        "Fast food",
    ];

   
    const homeSubLinks = [
        "Home Page 1",
        "Home Page 2",
        "Home Page 3",
        "Home Page (RTL)",
    ];

    return (
        <header className="sticky top-0 z-50 shadow-md">
            
           
            <div className="hidden lg:block bg-gray-100 border-b border-gray-200 text-xs py-2">
                <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-gray-500">
                    
                   
                    <div className="flex space-x-4">
                        <Link to="/aboutPage" className="hover:text-green-600 transition">About Us</Link>
                        <Link to="/account" className="hover:text-green-600 transition">My Account</Link>
                        <Link to="/wishlist" className="hover:text-green-600 transition">Wishlist</Link>
                        <Link to="/tracking" className="hover:text-green-600 transition">Order Tracking</Link>
                    </div>
                    
                   
                    <div className="flex space-x-6 items-center">
                        <span className="text-sm">100% Secure delivery without contacting the courier</span>
                        <div className="h-4 w-px bg-gray-300"></div>
                        <span className="text-green-600 font-bold">Need Help? Call Us: +1800 900</span>
                        
                        <select className="bg-transparent text-gray-500 appearance-none focus:outline-none">
                            <option>English</option>
                        </select>
                        <select className="bg-transparent text-gray-500 appearance-none focus:outline-none">
                            <option>USD</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* 2. MAIN BAR (Logo, Search, Icons & Mobile Menu Button) */}
            <div className="bg-white py-3 border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
                    
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2">
                        <span className="text-2xl sm:text-3xl font-extrabold text-green-600">NEST</span>
                        <span className="text-gray-900 font-semibold text-sm hidden sm:block">MART & GROCERY</span>
                    </Link>

                    {/* Search Bar with Dropdown (Hidden on mobile) */}
                    <div className="hidden lg:flex flex-grow max-w-xl mx-8 border border-green-600 rounded-md overflow-visible relative">
                        
                        {/* Dropdown Button / Area */}
                        <div 
                            className="flex items-center bg-gray-50 px-3 border-r border-gray-200 cursor-pointer relative"
                            onMouseEnter={() => setIsCategoryOpen(true)}
                            onMouseLeave={() => setIsCategoryOpen(false)}
                        >
                            <div className='flex items-center space-x-1 text-gray-600 text-sm font-medium'>
                                <span>All Categories</span>
                                {/* Down Arrow Icon */}
                                <svg className="h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                            </div>

                            {/* Categories Dropdown Menu */}
                            {isCategoryOpen && (
                                <div className='absolute left-0 top-full mt-0 border border-gray-200 bg-white shadow-lg w-64 z-50'>
                                    <div className='py-2'>
                                        {categories.map((cat) => (
                                            <Link 
                                                key={cat}
                                                to={`/category/${cat.toLowerCase().replace(/\s/g, '-')}`} 
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                onClick={() => setIsCategoryOpen(false)}
                                            >
                                                {cat}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Search Input and Button */}
                        <input 
                            type="text" 
                            placeholder="Search for Items..." 
                            className="w-full p-3 focus:outline-none text-gray-700" 
                        />
                        <button className="bg-green-600 text-white p-3 hover:bg-green-700 transition">
                            {/* Search Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" /></svg>
                        </button>
                    </div>
                    
                    {/* Icons & Hamburger Button */}
                    <div className="flex items-center space-x-4 sm:space-x-6">
                        {/* Compare & Wishlist */}
                        <div className="hidden sm:flex space-x-6">
                            <div className="flex flex-col items-center group cursor-pointer">
                                <span className="text-xl text-gray-600 group-hover:text-green-600">❤️</span>
                                <span className="text-xs text-gray-500">Compare</span>
                            </div>
                            <div className="flex flex-col items-center group cursor-pointer">
                                <span className="text-xl text-gray-600 group-hover:text-green-600">⭐</span>
                                <span className="text-xs text-gray-500">Wishlist</span>
                            </div>
                        </div>

                        {/* Cart */}
                        <div className="flex flex-col items-center group cursor-pointer">
                            <span className="text-xl text-gray-600 group-hover:text-green-600">🛒</span>
                            <span className="text-xs text-gray-500">Cart</span>
                        </div>
                        {/* Account */}
                        <div className="flex flex-col items-center group cursor-pointer hidden sm:flex">
                            <span className="text-xl text-gray-600 group-hover:text-green-600">👤</span>
                            <span className="text-xs text-gray-500">Account</span>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none lg:hidden"
                            aria-expanded={isMobileMenuOpen}
                        >
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                {isMobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>

                </div>
            </div>

            {/* 3. NAVIGATION BAR (Menu Links & Support) */}
            <div className="hidden lg:block bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-12">
                    
                    {/* Browse Categories Button with Dropdown */}
                    <div 
                        className="relative"
                        onMouseEnter={() => setIsBrowseOpen(true)}
                        onMouseLeave={() => setIsBrowseOpen(false)}
                    >
                        <button className="bg-green-600 text-white px-4 py-2 font-semibold flex items-center space-x-2 rounded">
                            {/* Grid Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v2H5V5zm0 4h10v2H5V9zm0 4h10v2H5v-2z" /></svg>
                            <span>Browse All Categories</span>
                        </button>

                         {/* Categories Dropdown Menu (Mega Menu Link) */}
                        {isBrowseOpen && (
                            <div className='absolute left-0 top-full mt-0 border border-gray-200 bg-white shadow-xl w-64 z-40'>
                                <div className='py-2'>
                                    {categories.map((cat) => (
                                        <Link 
                                            key={cat}
                                            to={`/category/${cat.toLowerCase().replace(/\s/g, '-')}`} 
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            onClick={() => setIsBrowseOpen(false)}
                                        >
                                            {cat}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                    
                    {/* Menu Links */}
                    <nav className="flex items-center space-x-6 text-lg font-medium text-gray-700">
                        <Link to="/deals" className="hover:text-green-600 transition">Deals</Link>
                        
                        {/* 👈 HOME LINK WITH DROPDOWN - यहाँ बदलाव किया गया है */}
                        <div 
                            className="relative h-full flex items-center" 
                            onMouseEnter={() => setIsHomeDropdownOpen(true)}
                            onMouseLeave={() => setIsHomeDropdownOpen(false)}
                        >
                            <Link to="/" className="hover:text-green-600 transition h-full flex items-center">
                                Home
                             
                                <svg className="ml-1 h-4 w-4 text-gray-400 group-hover:text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                            </Link>

                            {isHomeDropdownOpen && (
                                <div className='absolute left-0 top-full mt-0 border border-gray-200 bg-white shadow-lg w-40 z-40'>
                                    <div className='py-1'>
                                        {homeSubLinks.map((link) => (
                                            <Link 
                                                key={link}
                                                to={`/${link.toLowerCase().replace(/\s/g, '-')}`} 
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-100"
                                                onClick={() => setIsHomeDropdownOpen(false)}
                                            >
                                                {link}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                        {/* 👆 HOME LINK WITH DROPDOWN ENDS HERE */}
                        
                        <Link to="/aboutPage" className="hover:text-green-600 transition">About</Link>
                        <Link to="/shop" className="hover:text-green-600 transition">Shop</Link>
                        <Link to="/vendors" className="hover:text-green-600 transition">Vendors</Link>
                        <Link to="/megamenu" className="hover:text-green-600 transition">Mega Menu</Link>
                        <Link to="/blog" className="hover:text-green-600 transition">Blog</Link>
                        <Link to="/pages" className="hover:text-green-600 transition">Pages</Link>
                         <Link to="/categories" className="hover:text-green-600 transition">Pages</Link>
                         <Link to="/popularProducts" className="hover:text-green-600 transition">Pages</Link>
                        <span className="text-green-600">📞 24/7 Support Center</span>
                    </nav>
                    
                    {/* Support Contact */}
                    <div className="text-right">
                        <p className="text-green-600 text-xl font-extrabold leading-none">1900-888</p>
                        <p className="text-gray-500 text-xs">24/7 Support Center</p>
                    </div>
                </div>
            </div>

            {/* 4. MOBILE MENU (Hamburger Open) */}
            {isMobileMenuOpen && (
                <div className="lg:hidden bg-white shadow-lg pb-3" id="mobile-menu">
                    <div className="px-2 pt-2 space-y-1">

                        {/* Search Bar Mobile */}
                        <input type="text" placeholder="Search..." className="w-full p-2 border border-gray-300 rounded mb-2 focus:outline-none" />

                        {/* Mobile Links */}
                        <Link to="/" className="text-gray-700 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
                        <Link to="/products" className="text-gray-700 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsMobileMenuOpen(false)}>Products</Link>
                        <Link to="/about" className="text-gray-700 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
                        <Link to="/account" className="text-gray-700 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsMobileMenuOpen(false)}>My Account</Link>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
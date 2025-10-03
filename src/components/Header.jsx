import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


import AccountUser from '../pages/AccountUser';
import Card from './Card';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isCategoryOpen, setIsCategoryOpen] = useState(false); 
    const [isBrowseOpen, setIsBrowseOpen] = useState(false); 
    const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isAccountDrawerOpen, setIsAccountDrawerOpen] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
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

    // Improved cart dropdown handlers
    const handleCartMouseEnter = () => {
        setIsCartOpen(true);
    };

    const handleCartMouseLeave = () => {
        // Small delay to allow moving to dropdown
        setTimeout(() => {
            setIsCartOpen(false);
        }, 100);
    };

    const handleDropdownMouseEnter = () => {
        setIsCartOpen(true);
    };

    const handleDropdownMouseLeave = () => {
        setIsCartOpen(false);
    };

    return (
        <header className="sticky top-0 z-40"> {/* Reduced z-index for header */}
            
            {/* Top Bar */}
            <div className={`hidden lg:block transition-all duration-300 ${
                isScrolled ? 'bg-white shadow-md py-1' : 'bg-gray-100 border-b border-gray-200 py-2'
            }`}>
                <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-gray-500 text-xs">
                    
                    {/* Left Links */}
                    <div className="flex space-x-4">
                        <Link to="/aboutPage" className="hover:text-green-600 transition">About Us</Link>
                        <Link to="/account" className="hover:text-green-600 transition">My Account</Link>
                        <Link to="/wishlist" className="hover:text-green-600 transition">Wishlist</Link>
                        <Link to="/tracking" className="hover:text-green-600 transition">Order Tracking</Link>
                    </div>
                    
                    {/* Right Info */}
                    <div className="flex space-x-6 items-center">
                        <span className={`text-sm transition-opacity duration-300 ${
                            isScrolled ? 'opacity-0 w-0 h-0 overflow-hidden' : 'opacity-100'
                        }`}>
                            100% Secure delivery without contacting the courier
                        </span>
                        <div className={`h-4 w-px bg-gray-300 transition-opacity duration-300 ${
                            isScrolled ? 'opacity-0' : 'opacity-100'
                        }`}></div>
                        <span className="text-green-600 font-bold">Need Help? Call Us: +1800 900</span>
                        
                        <select className="bg-transparent text-gray-500 appearance-none focus:outline-none border-none">
                            <option>English</option>
                        </select>
                        <select className="bg-transparent text-gray-500 appearance-none focus:outline-none border-none">
                            <option>USD</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <div className={`bg-white border-b border-gray-200 transition-all duration-300 ${
                isScrolled ? 'py-3 shadow-lg' : 'py-4'
            }`}>
                <div className="max-w-12xl mx-auto px-4 flex justify-between items-center">
                    
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2 flex-shrink-0">
                        <span className="text-2xl sm:text-3xl font-extrabold text-green-600">NEST</span>
                        <span className="text-gray-900 font-semibold text-sm hidden sm:block">MART & GROCERY</span>
                    </Link>

                    {/* Search Bar with Dropdown */}
                    <div className="hidden lg:flex flex-grow max-w-xl mx-8 border border-green-600 rounded-md overflow-visible relative">
                        
                        {/* Dropdown Button / Area */}
                        <div 
                            className="flex items-center bg-gray-50 px-3 border-r border-gray-200 cursor-pointer relative min-w-[140px]"
                            onMouseEnter={() => setIsCategoryOpen(true)}
                            onMouseLeave={() => setIsCategoryOpen(false)}
                        >
                            <div className='flex items-center space-x-1 text-gray-600 text-sm font-medium'>
                                <span>All Categories</span>
                                <svg className="h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>

                            {/* Categories Dropdown Menu */}
                            {isCategoryOpen && (
                                <div className='absolute left-0 top-full mt-1 border border-gray-200 bg-white shadow-lg w-64 z-50 rounded-md'>
                                    <div className='py-2'>
                                        {categories.map((cat) => (
                                            <Link 
                                                key={cat}
                                                to={`/category/${cat.toLowerCase().replace(/\s/g, '-')}`} 
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
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
                            className="w-full px-9 py-4 focus:outline-none text-gray-700" 
                        />
                        <button className="bg-green-600 text-white px-4 hover:bg-green-700 transition-colors flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                    
                    {/* Icons & Hamburger Button */}
                    <div className="flex items-center space-x-3 sm:space-x-4">
                        {/* Notifications */}
                        <div className="hidden sm:flex">
                            <div className="flex flex-col items-center group cursor-pointer relative">
                                <button type="button" className="relative inline-flex items-center p-2 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none transition-colors">
                                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                                        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                                    </svg>
                                    <div className="absolute -top-1 -right-1 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-green-500 border-2 border-white rounded-full">10</div>
                                </button>
                                <span className="text-xs text-gray-500 mt-1 group-hover:text-green-600 transition-colors">Notifications</span>
                            </div>
                        </div>

                        {/* User Profile */}
                        <div className="flex flex-col items-center group cursor-pointer">
                            <button 
                                onClick={() => setIsAccountDrawerOpen(true)}
                                className="text-xl text-gray-600 group-hover:text-green-600 transition-colors"
                            >
                                👨‍🌾
                            </button>
                            <span className="text-xs text-gray-500 group-hover:text-green-600 transition-colors">Profile</span>
                        </div>

                        {/* Cart - IMPROVED WITH BETTER HANDLERS */}
                        <div 
                            className="flex flex-col items-center group cursor-pointer relative"
                            onMouseEnter={handleCartMouseEnter}
                            onMouseLeave={handleCartMouseLeave}
                        >
                            <div className="text-xl text-gray-600 group-hover:text-green-600 transition-colors">🛒</div>
                            <span className="text-xs text-gray-500 group-hover:text-green-600 transition-colors">Cart</span>
                            <div className="absolute -top-1 -right-1 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full">3</div>
                            
                            {/* Cart Dropdown with improved positioning */}
                            {isCartOpen && (
                                <div className="absolute right-0 top-full mt-2 z-50">
                                    <Card
                                        onMouseEnter={handleDropdownMouseEnter}
                                        onMouseLeave={handleDropdownMouseLeave}
                                    />
                                </div>
                            )}
                        </div>
                        
                        {/* Account */}
                        <div className="flex flex-col items-center group cursor-pointer hidden sm:flex">
                            <button 
                                onClick={() => setIsAccountDrawerOpen(true)}
                                className="text-xl text-gray-600 group-hover:text-green-600 transition-colors"
                            >
                                👤
                            </button>
                            <span className="text-xs text-gray-500 group-hover:text-green-600 transition-colors">Account</span>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-white hover:bg-green-600 focus:outline-none lg:hidden transition-colors"
                            aria-expanded={isMobileMenuOpen}
                        >
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

            {/* Navigation Bar */}
            <div className={`hidden lg:block bg-white border-t border-gray-100 transition-all duration-300 ${
                isScrolled ? 'shadow-md' : 'shadow-sm'
            }`}>
                <div className="max-w-12xl mx-auto px-4 flex justify-between items-center h-12">
                    
                    {/* Browse Categories Button with Dropdown */}
                    <div 
                        className="relative"
                        onMouseEnter={() => setIsBrowseOpen(true)}
                        onMouseLeave={() => setIsBrowseOpen(false)}
                    >
                        <button className="bg-green-600 text-white px-4 py-2 font-semibold flex items-center space-x-2 rounded-md hover:bg-green-700 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v2H5V5zm0 4h10v2H5V9zm0 4h10v2H5v-2z" />
                            </svg>
                            <span>Browse All Categories</span>
                        </button>

                        {/* Categories Dropdown Menu */}
                        {isBrowseOpen && (
                            <div className='absolute left-0 top-full mt-1 border border-gray-200 bg-white shadow-xl w-64 z-40 rounded-md'>
                                <div className='py-2'>
                                    {categories.map((cat) => (
                                        <Link 
                                            key={cat}
                                            to={`/category/${cat.toLowerCase().replace(/\s/g, '-')}`} 
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
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
                    <nav className="flex items-center space-x-6 text-base font-medium text-gray-700">
                        <Link to="/deals" className="hover:text-green-600 transition-colors py-2">Deals</Link>
                        
                        {/* Home Link with Dropdown */}
                        <div 
                            className="relative h-full flex items-center" 
                            onMouseEnter={() => setIsHomeDropdownOpen(true)}
                            onMouseLeave={() => setIsHomeDropdownOpen(false)}
                        >
                            <div className="flex items-center space-x-1 hover:text-green-600 transition-colors py-2 cursor-pointer">
                                <span>Home</span>
                                <svg className="h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>

                            {isHomeDropdownOpen && (
                                <div className='absolute left-0 top-full mt-1 border border-gray-200 bg-white shadow-lg w-48 z-40 rounded-md'>
                                    <div className='py-1'>
                                        {homeSubLinks.map((link) => (
                                            <Link 
                                                key={link}
                                                to={`/${link.toLowerCase().replace(/\s/g, '-')}`} 
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                                                onClick={() => setIsHomeDropdownOpen(false)}
                                            >
                                                {link}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                        
                        <Link to="/aboutPage" className="hover:text-green-600 transition-colors py-2">About</Link>
                        <Link to="/shop" className="hover:text-green-600 transition-colors py-2">Shop</Link>
                        <Link to="/vendors" className="hover:text-green-600 transition-colors py-2">Vendors</Link>
                        <Link to="/megamenu" className="hover:text-green-600 transition-colors py-2">Mega Menu</Link>
                        <Link to="/blog" className="hover:text-green-600 transition-colors py-2">Blog</Link>
                        <Link to="/contact" className="hover:text-green-600 transition-colors py-2">Contact</Link>
                    </nav>
                    
                    {/* Support Contact */}
                    <div className="text-right">
                        <p className="text-green-600 text-xl font-extrabold leading-none">1900-888</p>
                        <p className="text-gray-500 text-xs">24/7 Support Center</p>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden bg-white shadow-lg border-t border-gray-200">
                    <div className="px-4 py-3 space-y-3">
                        {/* Search Bar Mobile */}
                        <div className="relative">
                            <input 
                                type="text" 
                                placeholder="Search for items..." 
                                className="w-full p-3 border border-green-600 rounded-md focus:outline-none pr-12"
                            />
                            <button className="absolute right-0 top-0 h-full bg-green-600 text-white px-4 rounded-r-md">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>

                        {/* Mobile Navigation Links */}
                        <div className="grid grid-cols-2 gap-2">
                            <Link to="/" className="text-gray-700 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium text-center border" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
                            <Link to="/shop" className="text-gray-700 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium text-center border" onClick={() => setIsMobileMenuOpen(false)}>Shop</Link>
                            <Link to="/deals" className="text-gray-700 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium text-center border" onClick={() => setIsMobileMenuOpen(false)}>Deals</Link>
                            <Link to="/categories" className="text-gray-700 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium text-center border" onClick={() => setIsMobileMenuOpen(false)}>Categories</Link>
                            <Link to="/aboutPage" className="text-gray-700 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium text-center border" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
                            <button 
                                onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    setIsAccountDrawerOpen(true);
                                }}
                                className="text-gray-700 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium text-center border"
                            >
                                Account
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Account Drawer */}
            <AccountUser 
                isOpen={isAccountDrawerOpen}
                onClose={() => setIsAccountDrawerOpen(false)}
            />
        </header>
    );
};

export default Header;
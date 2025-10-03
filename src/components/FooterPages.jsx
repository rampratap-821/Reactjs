import React from 'react';
import { MapPin, Phone, Mail, Clock, Apple, Play, Facebook, Twitter, Instagram, Youtube, CreditCard, Shield, Truck, Headphones } from 'lucide-react';

function FooterPages() {
  return (
    <footer className="bg-gray-900 text-white font-sans">
      {/* Trust Badges Section */}
      <div className="bg-green-600 py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 text-center">
            
            <div className="flex items-center justify-center space-x-3 p-3 sm:p-4 bg-green-700/50 rounded-xl transition-transform hover:scale-[1.02]">
              <Truck size={20} className="text-white flex-shrink-0" />
              <div>
                <p className="font-bold text-sm sm:text-base md:text-lg">Free Shipping</p>
                <p className="text-xs sm:text-sm text-green-100">On orders over $100</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3 p-3 sm:p-4 bg-green-700/50 rounded-xl transition-transform hover:scale-[1.02]">
              <Shield size={20} className="text-white flex-shrink-0" />
              <div>
                <p className="font-bold text-sm sm:text-base md:text-lg">Secure Payment</p>
                <p className="text-xs sm:text-sm text-green-100">100% Protected</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3 p-3 sm:p-4 bg-green-700/50 rounded-xl transition-transform hover:scale-[1.02]">
              <Headphones size={20} className="text-white flex-shrink-0" />
              <div>
                <p className="font-bold text-sm sm:text-base md:text-lg">Support 24/7</p>
                <p className="text-xs sm:text-sm text-green-100">Ready to help</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-8 md:gap-10 lg:gap-8">
          
          {/* Column 1: Brand & Contact Info */}
          <div className="md:col-span-2 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4 sm:mb-6">
              <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-green-500">NEST</span>
              <span className="text-white font-semibold text-lg sm:text-xl md:text-xl pt-1">MART & GROCERY</span>
            </div>
            
            <p className="text-gray-300 mb-4 sm:mb-6 leading-normal text-sm sm:text-base">
              Your trusted partner for fresh groceries and daily essentials. Quality products delivered with care.
            </p>
            
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-start space-x-2 sm:space-x-3 p-2 sm:p-3 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors shadow-lg">
                <MapPin size={16} className="text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-xs sm:text-sm">
                  <strong className="text-white block">Address:</strong>
                  Noida-Sector 63 (UP), India - 201301
                </span>
              </div>
              
              <div className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors shadow-lg">
                <Phone size={16} className="text-green-500 flex-shrink-0" />
                <span className="text-gray-300 text-xs sm:text-sm">
                  <strong className="text-white">Call Us:</strong> (+91) - 123 456 7890
                </span>
              </div>
              
              <div className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors shadow-lg">
                <Mail size={16} className="text-green-500 flex-shrink-0" />
                <span className="text-gray-300 text-xs sm:text-sm">
                  <strong className="text-white">Email:</strong> pus123@gmail.com
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Company */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-white border-b-2 border-green-500 pb-2 inline-block">Company</h3>
            <ul className="space-y-2 sm:space-y-3">
              {['About Us', 'Delivery Information', 'Privacy Policy', 'Terms & Conditions', 'Contact Us', 'Support Center', 'Careers'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-300 hover:text-green-400 transition-all duration-200 flex items-center group text-sm sm:text-base">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full mr-2 sm:mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Account */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-white border-b-2 border-green-500 pb-2 inline-block">Account</h3>
            <ul className="space-y-2 sm:space-y-3">
              {['Sign In', 'View Cart', 'My Wishlist', 'Track My Order', 'Help Ticket', 'Shipping Details', 'Compare products'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-300 hover:text-green-400 transition-all duration-200 flex items-center group text-sm sm:text-base">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full mr-2 sm:mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Corporate */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-white border-b-2 border-green-500 pb-2 inline-block">Corporate</h3>
            <ul className="space-y-2 sm:space-y-3">
              {['Become a Vendor', 'Affiliate Program', 'Farm Business', 'Farm Careers', 'Our Suppliers', 'Accessibility', 'Promotions'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-300 hover:text-green-400 transition-all duration-200 flex items-center group text-sm sm:text-base">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full mr-2 sm:mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5 & 6 Combined: App Install & Social */}
          <div className="md:col-span-2 lg:col-span-2">
            
            {/* App Install Section */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-4 sm:p-6 rounded-2xl border border-gray-700 mb-6 sm:mb-8 shadow-2xl">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white">Get Our App</h3>
              <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                Shop faster and easier with our mobile app. Download now!
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                <button className="flex items-center justify-between bg-black hover:bg-gray-800 text-white py-2 sm:py-3 px-3 sm:px-4 rounded-xl w-full transition-all duration-300 border border-gray-700 group hover:scale-[1.03] hover:shadow-lg">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <Apple size={20} className="text-white group-hover:text-green-400 transition-colors flex-shrink-0" />
                    <div className="text-left">
                      <div className="text-xs text-gray-400">Download on the</div>
                      <div className="text-sm sm:text-base font-bold">App Store</div>
                    </div>
                  </div>
                </button>
                
                <button className="flex items-center justify-between bg-black hover:bg-gray-800 text-white py-2 sm:py-3 px-3 sm:px-4 rounded-xl w-full transition-all duration-300 border border-gray-700 group hover:scale-[1.03] hover:shadow-lg">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <Play size={20} className="text-white group-hover:text-green-400 transition-colors flex-shrink-0" />
                    <div className="text-left">
                      <div className="text-xs text-gray-400">Get it on</div>
                      <div className="text-sm sm:text-base font-bold">Google Play</div>
                    </div>
                  </div>
                </button>
              </div>

              {/* Secured Payment */}
              <div className="text-center mt-4 sm:mt-6 border-t border-gray-700 pt-3 sm:pt-4">
                <p className="text-gray-300 text-xs sm:text-sm mb-2 sm:mb-3 font-semibold">Secured Payment Gateways</p>
                <div className="flex justify-center items-center space-x-4 sm:space-x-6 bg-white p-2 sm:p-3 rounded-xl shadow-inner">
                  <CreditCard size={20} className="text-blue-600 flex-shrink-0" />
                  <span className="text-gray-800 font-extrabold text-lg sm:text-xl">VISA</span>
                  <Shield size={16} className="text-green-500 flex-shrink-0" />
                  <img src="https://placehold.co/40x20/ffffff/000000?text=MasterCard" alt="MasterCard" className="h-4 sm:h-5" />
                </div>
              </div>
            </div>

            {/* Social & Newsletter Section */}
            <div className="p-4 sm:p-6 rounded-2xl border border-gray-700">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white text-center">Follow Us</h3>
              
              {/* Social Media Icons */}
              <div className="flex justify-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                {[
                  { icon: Facebook, color: 'bg-blue-600 hover:bg-blue-700', label: 'Facebook' },
                  { icon: Twitter, color: 'bg-blue-400 hover:bg-blue-500', label: 'Twitter' },
                  { icon: Instagram, color: 'bg-pink-600 hover:bg-pink-700', label: 'Instagram' },
                  { icon: Youtube, color: 'bg-red-600 hover:bg-red-700', label: 'YouTube' }
                ].map(({ icon: Icon, color, label }) => (
                  <a 
                    href="#"
                    key={label}
                    className={`${color} text-white p-2 sm:p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-xl`}
                    title={label}
                  >
                    <Icon size={18} className="sm:w-6 sm:h-6" />
                  </a>
                ))}
              </div>

              {/* Newsletter Input - Fully Responsive */}
              <div className="text-center">
                <p className="text-green-100 text-xs sm:text-sm mb-2 sm:mb-3">Stay updated with our exclusive offers</p>
                <div className="flex flex-col sm:flex-row w-full gap-2 sm:gap-0">
                  <input 
                    type="email" 
                    placeholder="Your email"
                    className="flex-1 bg-white/20 text-white placeholder-white/60 px-3 sm:px-4 py-2 sm:py-3 rounded-xl sm:rounded-l-xl sm:rounded-r-none text-sm focus:outline-none focus:ring-2 focus:ring-green-400 border border-white/30"
                  />
                  <button className="bg-green-400 hover:bg-green-500 px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-r-xl text-gray-900 font-bold transition-colors whitespace-nowrap text-sm shadow-md sm:min-w-[100px]">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Support Section */}
      <div className="border-t border-gray-700 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 text-center">
            
            <div className="bg-gray-700 p-4 sm:p-6 rounded-xl shadow-inner">
              <h4 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3 text-green-400">Customer Support</h4>
              <div className="text-xs sm:text-sm text-gray-300 space-y-1 sm:space-y-2">
                <p className="text-white font-semibold text-sm sm:text-base">📞 1234567890</p>
                <p>Working Hours: 8:00 - 22:00 (All Days)</p>
                <p className="text-white font-semibold text-sm sm:text-base">🆘 1234567</p>
                <p className="text-green-400 font-bold">24/7 Emergency Support</p>
              </div>
            </div>
            
            <div className="bg-gray-700 p-4 sm:p-6 rounded-xl shadow-inner">
              <h4 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3 text-green-400">Quick Navigation</h4>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-300">
                {['Home', 'About', 'Shop', 'Vendors', 'Blog', 'Pages', 'Deals', 'Contact'].map((item) => (
                  <a key={item} href="#" className="hover:text-green-400 transition-colors bg-gray-600 px-2 sm:px-3 py-1 sm:py-2 rounded-lg text-xs sm:text-sm font-medium hover:bg-gray-500">
                    {item}
                  </a>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-700 p-4 sm:p-6 rounded-xl shadow-inner">
              <h4 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3 text-green-400">Newsletter Signup</h4>
              <p className="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4">Get latest offers and updates</p>
              <div className="flex flex-col sm:flex-row w-full gap-2 sm:gap-0">
                <input 
                  type="email" 
                  placeholder="your@email.com"
                  className="flex-1 bg-gray-600 text-white px-3 sm:px-4 py-2 sm:py-3 rounded-xl sm:rounded-l-xl sm:rounded-r-none text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button className="bg-green-500 hover:bg-green-600 px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-r-xl text-white font-bold transition-colors whitespace-nowrap text-sm sm:min-w-[100px]">
                  Join Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="text-center lg:text-left mb-3 lg:mb-0">
              <p className="text-gray-400 text-base sm:text-lg">
                © 2024 <span className="text-green-500 font-bold">Nest Mart & Grocery</span>
              </p>
              <p className="text-gray-500 text-xs sm:text-sm mt-1">
                Premium E-commerce Template | All rights reserved
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6">
              {['Privacy Policy', 'Terms & Conditions', 'Returns Policy', 'Shipping Info', 'Cookies'].map((item) => (
                <a key={item} href="#" className="text-gray-400 hover:text-green-400 transition-colors cursor-pointer text-xs sm:text-sm font-medium">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterPages;
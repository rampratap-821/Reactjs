import React from 'react';
import { MapPin, Phone, Mail, Clock, Apple, Play, Facebook, Twitter, Instagram, Youtube, CreditCard, Shield, Truck, Headphones } from 'lucide-react';

function FooterPages() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Trust Badges Section */}
      <div className="bg-green-600 py-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center space-x-3">
              <Truck size={24} className="text-white" />
              <div>
                <p className="font-semibold">Free Shipping</p>
                <p className="text-sm text-green-100">On orders over $100</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Shield size={24} className="text-white" />
              <div>
                <p className="font-semibold">Secure Payment</p>
                <p className="text-sm text-green-100">100% Protected</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Headphones size={24} className="text-white" />
              <div>
                <p className="font-semibold">Support 24/7</p>
                <p className="text-sm text-green-100">Ready to help</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          
          {/* Column 1: Brand & Contact Info */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="flex items-center space-x-2 mb-6">
              <span className="text-4xl font-extrabold text-green-500">NEST</span>
              <span className="text-white font-semibold text-xl">MART & GROCERY</span>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed text-lg">
              Your trusted partner for fresh groceries and daily essentials. Quality products delivered with care.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3 p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                <MapPin size={20} className="text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  <strong className="text-white">Address:</strong><br />
                  Noida-Sector 63<br />
                  (UP), India - 201301
                </span>
              </div>
              
              <div className="flex items-center space-x-3 p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                <Phone size={20} className="text-green-500 flex-shrink-0" />
                <span className="text-gray-300">
                  <strong className="text-white">Call Us:</strong> (+91) - 123 456 7890
                </span>
              </div>
              
              <div className="flex items-center space-x-3 p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                <Mail size={20} className="text-green-500 flex-shrink-0" />
                <span className="text-gray-300">
                  <strong className="text-white">Email:</strong> pus123@gmail.com
                </span>
              </div>
              
              <div className="flex items-center space-x-3 p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                <Clock size={20} className="text-green-500 flex-shrink-0" />
                <span className="text-gray-300">
                  <strong className="text-white">Hours:</strong> 10:00 - 18:00, Mon - Sat
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Company */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white border-b-2 border-green-500 pb-2 inline-block">Company</h3>
            <ul className="space-y-3">
              {['About Us', 'Delivery Information', 'Privacy Policy', 'Terms & Conditions', 'Contact Us', 'Support Center', 'Careers'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-300 hover:text-green-400 transition-all duration-200 flex items-center group">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Account */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white border-b-2 border-green-500 pb-2 inline-block">Account</h3>
            <ul className="space-y-3">
              {['Sign In', 'View Cart', 'My Wishlist', 'Track My Order', 'Help Ticket', 'Shipping Details', 'Compare products'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-300 hover:text-green-400 transition-all duration-200 flex items-center group">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Corporate */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white border-b-2 border-green-500 pb-2 inline-block">Corporate</h3>
            <ul className="space-y-3">
              {['Become a Vendor', 'Affiliate Program', 'Farm Business', 'Farm Careers', 'Our Suppliers', 'Accessibility', 'Promotions'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-300 hover:text-green-400 transition-all duration-200 flex items-center group">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5 & 6 Combined: App Install & Social */}
          <div className="lg:col-span-2">
            {/* App Install Section */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700 mb-6">
              <h3 className="text-2xl font-bold mb-3 text-white">Get Our App</h3>
              <p className="text-gray-300 mb-6 text-lg">
                Shop faster and easier with our mobile app. Download now!
              </p>
              
              <div className="space-y-4 mb-6">
                <button className="flex items-center justify-between bg-black hover:bg-gray-800 text-white py-4 px-6 rounded-xl w-full transition-all duration-300 border border-gray-700 group hover:scale-105 hover:shadow-lg">
                  <div className="flex items-center space-x-4">
                    <Apple size={28} className="text-white group-hover:text-green-400 transition-colors" />
                    <div className="text-left">
                      <div className="text-xs text-gray-400">Download on the</div>
                      <div className="text-lg font-bold">App Store</div>
                    </div>
                  </div>
                  <div className="text-green-400 font-semibold">→</div>
                </button>
                
                <button className="flex items-center justify-between bg-black hover:bg-gray-800 text-white py-4 px-6 rounded-xl w-full transition-all duration-300 border border-gray-700 group hover:scale-105 hover:shadow-lg">
                  <div className="flex items-center space-x-4">
                    <Play size={28} className="text-white group-hover:text-green-400 transition-colors" />
                    <div className="text-left">
                      <div className="text-xs text-gray-400">Get it on</div>
                      <div className="text-lg font-bold">Google Play</div>
                    </div>
                  </div>
                  <div className="text-green-400 font-semibold">→</div>
                </button>
              </div>

              {/* Secured Payment */}
              <div className="text-center">
                <p className="text-gray-300 text-sm mb-3">Secured Payment Gateways</p>
                <div className="flex justify-center items-center space-x-3 bg-white p-4 rounded-xl">
                  <CreditCard size={24} className="text-blue-600" />
                  <span className="text-gray-800 font-bold text-lg">VISA</span>
                  <Shield size={20} className="text-green-500" />
                </div>
              </div>
            </div>

            {/* Simple Follow Us Section - Only Icons */}
            <div className="bg-gradient- p-6 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 text-white text-center">Follow Us</h3>
              
              {/* Social Media Icons Only */}
              <div className="flex justify-center space-x-4 mb-4">
                {[
                  { icon: Facebook, color: 'bg-blue-600 hover:bg-blue-700', label: 'Facebook' },
                  { icon: Twitter, color: 'bg-blue-400 hover:bg-blue-500', label: 'Twitter' },
                  { icon: Instagram, color: 'bg-pink-600 hover:bg-pink-700', label: 'Instagram' },
                  { icon: Youtube, color: 'bg-red-600 hover:bg-red-700', label: 'YouTube' }
                ].map(({ icon: Icon, color, label }) => (
                  <button 
                    key={label}
                    className={`${color} text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg`}
                    title={label}
                  >
                    <Icon size={24} />
                  </button>
                ))}
              </div>

              {/* Simple Newsletter */}
              <div className="text-center">
                <p className="text-green-100 text-sm mb-3">Stay updated with our offers</p>
                <div className="flex">
                  <input 
                    type="email" 
                    placeholder="Your email"
                    className="flex-1 bg-white/20 text-white placeholder-white/60 px-3 py-2 rounded-l-lg text-sm focus:outline-none focus:ring-2 focus:ring-yellow-300 border border-white/30"
                  />
                  <button className="bg-green-400 hover:bg-green-500 px-4 py-2 rounded-r-lg text-gray-900 font-semibold transition-colors whitespace-nowrap text-sm">
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
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="bg-gray-700 p-4 rounded-xl">
              <h4 className="font-bold text-lg mb-3 text-green-400">Customer Support</h4>
              <div className="text-sm text-gray-300 space-y-2">
                <p className="text-white font-semibold">📞 1234567890</p>
                <p>Working Hours: 8:00 - 22:00</p>
                <p className="text-white font-semibold">🆘 1234567</p>
                <p className="text-green-400 font-semibold">24/7 Emergency Support</p>
              </div>
            </div>
            
            <div className="bg-gray-700 p-4 rounded-xl">
              <h4 className="font-bold text-lg mb-3 text-green-400">Quick Navigation</h4>
              <div className="flex flex-wrap justify-center md:justify-start gap-3 text-sm text-gray-300">
                {['Home', 'About', 'Shop', 'Vendors', 'Blog', 'Pages', 'Deals', 'Contact'].map((item) => (
                  <a key={item} href="#" className="hover:text-green-400 transition-colors bg-gray-600 px-3 py-1 rounded-lg">
                    {item}
                  </a>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-700 p-4 rounded-xl">
              <h4 className="font-bold text-lg mb-3 text-green-400">Newsletter Signup</h4>
              <p className="text-gray-300 text-sm mb-3">Get latest offers and updates</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="your@email.com"
                  className="flex-1 bg-gray-600 text-white px-4 py-3 rounded-l-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-r-xl text-white font-bold transition-colors whitespace-nowrap">
                  Join Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            {/* Copyright */}
            <div className="text-center lg:text-left mb-4 lg:mb-0">
              <p className="text-gray-400 text-lg">
                © 2024 <span className="text-green-500 font-bold">Nest Mart & Grocery</span>
              </p>
              <p className="text-gray-500 text-sm mt-1">
                Premium HTML Ecommerce Template | All rights reserved
              </p>
            </div>
            
            {/* Additional Links */}
            <div className="flex flex-wrap justify-center gap-6">
              {['Privacy Policy', 'Terms & Conditions', 'Returns Policy', 'Shipping Info', 'Cookies'].map((item) => (
                <span key={item} className="text-gray-400 hover:text-green-400 transition-colors cursor-pointer text-sm font-medium">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterPages;
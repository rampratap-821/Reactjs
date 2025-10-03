import React, { useState } from "react";

// Categories data - 20 cards
const categories = [
  { id: 1, name: "Peach", items: 14, image: "🍑" },
  { id: 2, name: "Red Apple", items: 54, image: "🍎" },
  { id: 3, name: "Snack", items: 56, image: "🍿" },
  { id: 4, name: "Vegetables", items: 72, image: "🥦" },
  { id: 5, name: "Strawberry", items: 36, image: "🍓" },
  { id: 6, name: "Black plum", items: 123, image: "🍇" },
  { id: 7, name: "Custard apple", items: 34, image: "🍈" },
  { id: 8, name: "Coffee & Tea", items: 89, image: "☕" },
  { id: 9, name: "Headphone", items: 87, image: "🎧" },
  { id: 10, name: "Cake & Milk", items: 26, image: "🍰" },
  { id: 11, name: "Orange", items: 45, image: "🍊" },
  { id: 12, name: "Banana", items: 67, image: "🍌" },
  { id: 13, name: "Grapes", items: 88, image: "🍇" },
  { id: 14, name: "Mango", items: 32, image: "🥭" },
  { id: 15, name: "Pineapple", items: 29, image: "🍍" },
  { id: 16, name: "Watermelon", items: 41, image: "🍉" },
  { id: 17, name: "Cherry", items: 38, image: "🍒" },
  { id: 18, name: "Pear", items: 25, image: "🍐" },
  { id: 19, name: "Lemon", items: 19, image: "🍋" },
  { id: 20, name: "Coconut", items: 22, image: "🥥" }
];

function Categories() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 10;
  const maxIndex = Math.ceil(categories.length / itemsPerView) - 1;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
  };

  const startIndex = currentIndex * itemsPerView;
  const visibleCategories = categories.slice(startIndex, startIndex + itemsPerView);

  return (
    <div className="min-h-screen py-8 w-full">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header with Navigation Buttons */}
        <div className="flex justify-between items-center mb-16">
          <div className="text-left">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-3">
              Featured Categories
            </h1>
            <p className="text-xl text-gray-600 font-medium">
              Discover amazing products with beautiful animations
            </p>
          </div>

          <div className="flex space-x-4">
            <button
              onClick={handlePrev}
              className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 px-8 py-4 rounded-2xl shadow-2xl hover:shadow-3xl border border-gray-300 transition-all duration-500 hover:scale-110 hover:-translate-y-1 font-bold flex items-center space-x-3 text-2xl"
            >
              <span className="hover:scale-25 transition-transform">‹</span>
            </button>
            
            <button
              onClick={handleNext}
              className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-110 hover:-translate-y-1 font-bold flex items-center space-x-3 text-2xl"
            >
              <span className="hover:scale-25 transition-transform">›</span>
            </button>
          </div>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {visibleCategories.map((category, index) => (
            <div
              key={category.id}
              className="relative rounded-3xl p-8 shadow-2xl border-2 border-white/50 transition-all duration-700 ease-out cursor-pointer group hover:scale-105 hover:rotate-1 animate-fade-in bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 backdrop-blur-sm"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-400/20 via-pink-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm"></div>

              <div className="relative z-10 text-center">
                <div className="text-7xl mb-6 transition-all duration-700 group-hover:scale-125 group-hover:rotate-12 group-hover:drop-shadow-2xl filter group-hover:brightness-110">
                  {category.image}
                </div>
                
                <h3 className="text-2xl font-extrabold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4 transition-all duration-500 group-hover:scale-110 group-hover:tracking-wider">
                  {category.name}
                </h3>
                
                {/* Items Count - updated color */}
                <p className="text-lg font-semibold text-white bg-[#10B981] px-6 py-3 rounded-full shadow-lg transition-all duration-500 group-hover:scale-105 group-hover:shadow-xl">
                  {category.items} items
                </p>

                {/* Floating Particles */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse"></div>
              </div>

              <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-border opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10">
                <div className="absolute inset-[2px] rounded-3xl bg-white"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ❌ Popular Products Section को यहाँ से हटा दिया गया */}

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from { 
            opacity: 0; 
            transform: translateY(30px) scale(0.9) rotate(-2deg); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0) scale(1) rotate(0); 
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .group {
          transition: all 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .group:hover {
          transform: translateY(-1px) scale(1.05) rotate(0deg);
          box-shadow: 
            0 25px 50px -12px rgba(147, 51, 234, 0.25),
            0 0 30px rgba(59, 130, 246, 0.5),
            inset 0 1px 0 rgba(255, 255, 255, 0.6);
        }
      `}</style>
    </div>
  );
}

export default Categories;
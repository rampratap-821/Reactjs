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
  const [isAnimating, setIsAnimating] = useState(false);
  
  const itemsPerView = 10; 
  const maxIndex = Math.ceil(categories.length / itemsPerView) - 1;

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
    setTimeout(() => setIsAnimating(false), 600);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 600);
  };

  const startIndex = currentIndex * itemsPerView;
  const visibleCategories = categories.slice(startIndex, startIndex + itemsPerView);

  return (
    <div className="min-h-screen py-16 w-full bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Navigation Buttons */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-3 animate-slide-down">
              Featured Categories
            </h1>
            
          </div>
          

          <div className="flex space-x-4 animate-slide-down-delay-2">
            <button
              onClick={handlePrev}
              className="bg-white text-gray-700 px-6 py-3 rounded-xl shadow-lg hover:shadow-xl border border-gray-200 transition-all duration-300 hover:bg-gray-50 hover:scale-105 font-semibold flex items-center space-x-2 text-lg group"
            >
              <span className="transition-transform duration-300 group-hover:-translate-x-1">‹</span>
              <span>Prev</span>
            </button>
            
            <button
              onClick={handleNext}
              className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:from-purple-600 hover:to-blue-600 hover:scale-105 font-semibold flex items-center space-x-2 text-lg group"
            >
              <span>Next</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">›</span>
            </button>
          </div>
        </div>

        {/* Category Cards with Enhanced Animation */}
        <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 transition-all duration-500 ${isAnimating ? 'opacity-50' : 'opacity-100'}`}>
          {visibleCategories.map((category, index) => (
            <div
              key={category.id}
              className="relative rounded-2xl p-6 shadow-lg border border-gray-100 transition-all duration-500 ease-out cursor-pointer group hover:scale-105 bg-white overflow-hidden"
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: 'both'
              }}
            >
              {/* Background Gradient on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-pink-500/0 to-blue-500/0 group-hover:from-purple-500/10 group-hover:via-pink-500/10 group-hover:to-blue-500/10 transition-all duration-500 rounded-2xl"></div>
              
              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

              <div className="relative z-10 text-center">
                {/* Icon with Floating Animation */}
                <div className="text-6xl mb-4 transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2 filter drop-shadow-lg">
                  {category.image}
                </div>
                
                {/* Title with Smooth Transition */}
                <h3 className="text-lg font-bold text-gray-800 mb-3 transition-all duration-300 group-hover:text-purple-600">
                  {category.name}
                </h3>
                
                {/* Items Count with Pulse Animation */}
                <div className="inline-flex items-center justify-center">
                  <p className="text-sm font-semibold text-white bg-green-500 px-3 py-1 rounded-full shadow-md transition-all duration-300 group-hover:bg-green-600 group-hover:shadow-lg group-hover:scale-105">
                    {category.items} items
                  </p>
                </div>
              </div>

              {/* Border Animation on Hover */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-purple-200 transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-12 space-x-3">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isAnimating) {
                  setIsAnimating(true);
                  setCurrentIndex(index);
                  setTimeout(() => setIsAnimating(false), 600);
                }
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index 
                  ? 'bg-purple-500 w-8' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Enhanced Custom Animations */}
      <style jsx>{`
        /* Slide Down Animation for Header */
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slide-down {
          animation: slide-down 0.8s ease-out forwards;
        }

        .animate-slide-down-delay {
          animation: slide-down 0.8s ease-out 0.2s forwards;
          opacity: 0;
        }

        .animate-slide-down-delay-2 {
          animation: slide-down 0.8s ease-out 0.4s forwards;
          opacity: 0;
        }

        /* Card Entrance Animation */
        @keyframes card-entrance {
          0% {
            opacity: 0;
            transform: translateY(30px) scale(0.9);
          }
          50% {
            opacity: 0.5;
            transform: translateY(-5px) scale(1.02);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .grid > div {
          animation: card-entrance 0.6s ease-out forwards;
          opacity: 0;
        }

        /* Smooth Hover Effects */
        .group {
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .group:hover {
          transform: translateY(-8px) scale(1.05);
          box-shadow: 
            0 25px 50px -12px rgba(147, 51, 234, 0.25),
            0 0 30px rgba(59, 130, 246, 0.15);
        }

        /* Floating Animation for Icons */
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        .group:hover div:first-child {
          animation: float 2s ease-in-out infinite;
        }

        /* Pulse Animation for Active Dot */
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }

        .bg-purple-500 {
          animation: pulse 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default Categories;
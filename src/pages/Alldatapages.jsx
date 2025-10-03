import React from "react";
import { Star } from "lucide-react";

function Alldatapages() {
  // Product data with emoji images
  const products = {
    topSelling: [
      { id: 1, name: "Fresh Organic Carrots", rating: 4.0, currentPrice: "$32.85", originalPrice: "$33.8", image: "🥕" },
      { id: 2, name: "Fresh Bell Peppers", rating: 4.0, currentPrice: "$32.85", originalPrice: "$33.8", image: "🫑" },
      { id: 3, name: "Fresh Orange Juice", rating: 4.0, currentPrice: "$32.85", originalPrice: "$33.8", image: "🧃" },
    ],
    trending: [
      { id: 1, name: "Fresh Bananas", rating: 4.0, currentPrice: "$32.85", originalPrice: "$33.8", image: "🍌" },
      { id: 2, name: "Fresh Watermelon", rating: 4.0, currentPrice: "$32.85", originalPrice: "$33.8", image: "🍉" },
      { id: 3, name: "Fresh Broccoli", rating: 4.0, currentPrice: "$32.85", originalPrice: "$33.8", image: "🥦" },
    ],
    recentlyAdded: [
      { id: 1, name: "Fresh Mangoes", rating: 4.0, currentPrice: "$32.85", originalPrice: "$33.8", image: "🥭" },
      { id: 2, name: "Organic Mangoes", rating: 4.0, currentPrice: "$32.85", originalPrice: "$33.8", image: "🥭" },
      { id: 3, name: "Fresh Sweet Corn", rating: 4.0, currentPrice: "$32.85", originalPrice: "$33.8", image: "🌽" },
    ],
    topRated: [
      { id: 1, name: "Fresh Pomegranate", rating: 4.0, currentPrice: "$32.85", originalPrice: "$33.8", image: "🍎" },
      { id: 2, name: "Fresh Green Chilies", rating: 4.0, currentPrice: "$32.85", originalPrice: "$33.8", image: "🌶️" },
      { id: 3, name: "Fresh Oranges", rating: 4.0, currentPrice: "$32.85", originalPrice: "$33.8", image: "🍊" },
    ],
  };

  // ⭐ Star Rating
  const StarRating = ({ rating }) => (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={16}
          className={star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
        />
      ))}
      <span className="text-gray-500 text-sm">({rating})</span>
    </div>
  );

  const ProductCard = ({ product }) => (
    <div className="w-full h-42 flex items-center gap-4 p-4 bg-white rounded-xl transition-all duration-300 hover:scale-105 shadow-md hover:shadow-xl border border-gray-100">
      {/* Emoji container with better styling */}
      <div className="w-20 h-20 flex items-center justify-center text-5xl border-2 border-green-100 rounded-xl bg-green-50 shadow-sm">
        {product.image}
      </div>
      <div className="flex-1">
        <h3 className="font-semibold text-gray-800 text-base line-clamp-2 mb-2">{product.name}</h3>
        <StarRating rating={product.rating} />
        <div className="flex items-center gap-2 mt-3">
          <span className="text-green-600 font-bold text-lg">{product.currentPrice}</span>
          <span className="text-gray-400 line-through text-sm">{product.originalPrice}</span>
        </div>
      </div>
    </div>
  );

  // 📦 Section
  const ProductSection = ({ title, products }) => (
    <div className="w-full">
      <h2 className="text-xl font-bold text-gray-900 border-b-2 border-green-500 inline-block mb-6 pb-1">
        {title}
      </h2>
      <div className="space-y-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );

  return (
    <div className="mix-h-screen bg-gray-50 py-10 px-4">
      <div className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <ProductSection title="Top Selling" products={products.topSelling} />
        <ProductSection title="Trending Products" products={products.trending} />
        <ProductSection title="Recently Added" products={products.recentlyAdded} />
        <ProductSection title="Top Rated" products={products.topRated} />
      </div>

    
    </div>
  );
}

export default Alldatapages;
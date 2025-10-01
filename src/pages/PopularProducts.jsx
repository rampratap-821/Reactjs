import React from 'react'
import { Star, Heart, Eye, Shuffle } from 'lucide-react'
import DailyBestSells from './DailyBestSells';

function PopularProducts() {
  const products = [
    {
      id: 1,
      category: "Hot",
      tag: "Snack",
      title: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
      brand: "NestFood",
      currentPrice: "$28.85",
      originalPrice: "$32.8",
      badge: "Hot",
      discount: "12%",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop",
      rating: 4.5,
      reviews: 128
    },
    {
      id: 2,
      category: "Side",
      tag: "SALE",
      title: "All Natural Italian-Style Chicken Meatballs",
      brand: "Stauffer",
      currentPrice: "$52.85",
      originalPrice: "$55.8",
      badge: "SALE",
      discount: "5%",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
      rating: 4.2,
      reviews: 89
    },
    {
      id: 3,
      category: "New",
      tag: "Snack",
      title: "Angie's Boomchickappo Sweet & Salty Kettle Corn",
      brand: "StarKist",
      currentPrice: "$48.85",
      originalPrice: "$52.8",
      badge: "New",
      discount: "8%",
      image: "https://images.unsplash.com/photo-1566474203382-1aef118de7b4?w=400&h=300&fit=crop",
      rating: 4.8,
      reviews: 156
    },
    {
      id: 4,
      category: "Vegetables",
      title: "Foster Farms Takeout Crispy Classic Buffalo Wings",
      brand: "NestFood",
      currentPrice: "$17.85",
      originalPrice: "$19.8",
      discount: "10%",
      image: "https://images.unsplash.com/photo-1606755962773-d324e2dabd5b?w=400&h=300&fit=crop",
      rating: 4.0,
      reviews: 67
    },
    {
      id: 5,
      category: "Salt",
      tag: "SALTABLE",
      title: "Blue Diamond Almonds Lightly Salted Vegetables",
      brand: "NestFood",
      currentPrice: "$23.85",
      originalPrice: "$25.8",
      badge: "SALTABLE",
      discount: "8%",
      image: "https://images.unsplash.com/photo-1615485925600-97f90a08c697?w=400&h=300&fit=crop",
      rating: 4.3,
      reviews: 94
    },
    {
      id: 6,
      category: "Beverage",
      tag: "Drink",
      title: "Coca-Cola Classic Soft Drink - 12 Pack",
      brand: "Coca-Cola",
      currentPrice: "$8.99",
      originalPrice: "$10.99",
      badge: "Hot",
      discount: "18%",
      image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=400&h=300&fit=crop",
      rating: 4.7,
      reviews: 203
    },
    {
      id: 7,
      category: "Dairy",
      tag: "Fresh",
      title: "Organic Valley Whole Milk - 1 Gallon",
      brand: "Organic Valley",
      currentPrice: "$4.99",
      originalPrice: "$5.99",
      badge: "New",
      discount: "17%",
      image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&h=300&fit=crop",
      rating: 4.1,
      reviews: 78
    },
    {
      id: 8,
      category: "Bakery",
      tag: "Bread",
      title: "Fresh Baked Whole Wheat Bread Loaf",
      brand: "Bakery Fresh",
      currentPrice: "$3.49",
      originalPrice: "$4.25",
      badge: "SALE",
      discount: "18%",
      image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=400&h=300&fit=crop",
      rating: 4.4,
      reviews: 112
    },
    {
      id: 9,
      category: "Fruits",
      tag: "Fresh",
      title: "Organic Red Apples - 2lb Bag",
      brand: "Nature's Best",
      currentPrice: "$5.99",
      originalPrice: "$6.99",
      discount: "14%",
      image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&h=300&fit=crop",
      rating: 4.6,
      reviews: 145
    },
    {
      id: 10,
      category: "Meat",
      tag: "Protein",
      title: "Grass Fed Beef Steak - 16oz",
      brand: "Premium Meats",
      currentPrice: "$18.99",
      originalPrice: "$22.99",
      badge: "Hot",
      discount: "17%",
      image: "https://images.unsplash.com/photo-1588347818122-c6b08e03479c?w=400&h=300&fit=crop",
      rating: 4.9,
      reviews: 189
    }
  ]

  const getBadgeColor = (badge) => {
    switch(badge?.toLowerCase()) {
      case 'hot': return 'bg-red-500';
      case 'sale': return 'bg-orange-500';
      case 'new': return 'bg-green-500';
      case 'saltable': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  }

  const renderStars = (rating) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={14}
            className={star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
          />
        ))}
      </div>
    )
  }

  return (
    <div className="bg-gray-50">
      <div className="max-w-15xl mx-auto px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Popular Products</h1>
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {products.map(product => (
            <div 
              key={product.id} 
              className="bg-white rounded-xl shadow-lg hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 hover:-translate-y-1 group cursor-pointer flex flex-col"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden bg-gray-100 flex-shrink-0">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Top Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  {product.badge && (
                    <div className={`${getBadgeColor(product.badge)} text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg`}>
                      {product.badge}
                    </div>
                  )}
                  {product.discount && (
                    <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      {product.discount} OFF
                    </div>
                  )}
                </div>
                
                {/* Center Hover Action Buttons */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black bg-opacity-20">
                  <button className="bg-white hover:bg-gray-50 p-3 rounded-full shadow-lg transition-all duration-200 transform hover:scale-110">
                    <Heart size={20} className="text-gray-600 hover:text-red-500" />
                  </button>
                  <button className="bg-white hover:bg-gray-50 p-3 rounded-full shadow-lg transition-all duration-200 transform hover:scale-110">
                    <Eye size={20} className="text-gray-600 hover:text-blue-500" />
                  </button>
                  <button className="bg-white hover:bg-gray-50 p-3 rounded-full shadow-lg transition-all duration-200 transform hover:scale-110">
                    <Shuffle size={20} className="text-gray-600 hover:text-green-500" />
                  </button>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-4 flex flex-col flex-grow">
                {/* Category & Tag */}
                <div className="flex items-center justify-between mb-2">
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    {product.category}
                  </div>
                  {product.tag && (
                    <div className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs border border-gray-200">
                      {product.tag}
                    </div>
                  )}
                </div>
                
                {/* Title */}
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 leading-tight text-sm group-hover:text-green-600 transition-colors duration-200 flex-grow">
                  {product.title}
                </h3>
                
                {/* Brand */}
                <div className="text-xs text-gray-600 mb-3 italic">
                  By {product.brand}
                </div>
                
                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  {renderStars(product.rating)}
                  <span className="text-xs text-gray-500">({product.reviews})</span>
                </div>
                
                {/* Price & Add to Cart - Column Layout */}
                <div className="flex flex-col gap-3 mt-auto">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-lg font-bold text-green-600">
                        {product.currentPrice}
                      </span>
                      <span className="text-sm text-gray-400 line-through">
                        {product.originalPrice}
                      </span>
                    </div>
                  </div>
                  
                  {/* Add to Cart Button */}
                  <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2.5 px-4 rounded-lg font-semibold transition-all duration-200 hover:shadow-md text-sm transform group-hover:scale-105 border border-green-500">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
       
      </div>
      <DailyBestSells/>

      
    </div>
    
  )
}

export default PopularProducts
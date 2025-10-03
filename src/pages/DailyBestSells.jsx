import React, { useState } from 'react'
import { Star, Heart, Eye, Shuffle, ChevronLeft, ChevronRight } from 'lucide-react'


function DailyBestSells() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const categories = [
    { id: 1, name: "Featured", active: true },
    { id: 2, name: "Popular", active: false },
    { id: 3, name: "New Added", active: false }
  ];

  const sliderProducts = [
    {
      id: 1,
      title: "All Natural Italian-Style Chicken Meatballs",
      brand: "Stauffer",
      currentPrice: "$52.85",
      originalPrice: "$55.8",
      discount: "5%",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
      rating: 4.2,
      reviews: 89
    },
    {
      id: 2,
      title: "Angie's Boomchickappo Sweet & Salty Kettle Corn",
      brand: "StarKist",
      currentPrice: "$48.85",
      originalPrice: "$52.8",
      discount: "8%",
      image: "https://images.unsplash.com/photo-1566474203382-1aef118de7b4?w=400&h=300&fit=crop",
      rating: 4.8,
      reviews: 156
    },
    {
      id: 3,
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
      id: 4,
      title: "Blue Diamond Almonds Lightly Salted Vegetables",
      brand: "NestFood",
      currentPrice: "$23.85",
      originalPrice: "$25.8",
      discount: "8%",
      image: "https://images.unsplash.com/photo-1615485925600-97f90a08c697?w=400&h=300&fit=crop",
      rating: 4.3,
      reviews: 94
    },
    {
      id: 5,
      title: "Organic Valley Whole Milk - 1 Gallon",
      brand: "Organic Valley",
      currentPrice: "$4.99",
      originalPrice: "$5.99",
      discount: "17%",
      image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&h=300&fit=crop",
      rating: 4.1,
      reviews: 78
    },
    {
      id: 6,
      title: "Fresh Baked Whole Wheat Bread Loaf",
      brand: "Bakery Fresh",
      currentPrice: "$3.49",
      originalPrice: "$4.25",
      discount: "18%",
      image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=400&h=300&fit=crop",
      rating: 4.4,
      reviews: 112
    }
  ];

  const featuredProduct = {
    id: 0,
    title: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    currentPrice: "$28.85",
    originalPrice: "$32.8",
    discount: "12%",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=400&fit=crop",
    rating: 4.5,
    reviews: 128,
    timeLeft: "12 Days",
    sold: 82
  };

  // Get current slide products (3 at a time)
  const getCurrentSlideProducts = () => {
    const startIndex = currentSlide * 3;
    return sliderProducts.slice(startIndex, startIndex + 3);
  };

  const nextSlide = () => {
    const maxSlides = Math.ceil(sliderProducts.length / 3) - 1;
    setCurrentSlide((prev) => (prev + 1) > maxSlides ? 0 : prev + 1);
  };

  const prevSlide = () => {
    const maxSlides = Math.ceil(sliderProducts.length / 3) - 1;
    setCurrentSlide((prev) => (prev - 1) < 0 ? maxSlides : prev - 1);
  };

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
  };

  return (
    <div className="bg-white py-16">
      <div className="max-w-10xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Daily Best Sells</h2>
        </div>

        {/* Main Container - 12 Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Left Side - Fixed Featured Product (3 columns) */}
          <div className="lg:col-span-3">
            <div className="bg-green-50 rounded-2xl p-6 h-full border border-green-100">
              <div className="flex flex-col h-full">

                {/* Featured Badge */}
                <div className="mb-4">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </span>
                </div>

                {/* Product Image */}
                <div className="mb-6 relative">
                  <img
                    src={featuredProduct.image}
                    alt={featuredProduct.title}
                    className="w-full h-24 object-cover rounded-xxl"
                  />
                </div>

                {/* Product Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {featuredProduct.title}
                </h3>

                {/* Product Description */}
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {featuredProduct.description}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  {renderStars(featuredProduct.rating)}
                  <span className="text-sm text-gray-500">({featuredProduct.reviews})</span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl font-bold text-green-600">
                    {featuredProduct.currentPrice}
                  </span>
                  <span className="text-lg text-gray-400 line-through">
                    {featuredProduct.originalPrice}
                  </span>
                  <span className="bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
                    {featuredProduct.discount} OFF
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Sold: {featuredProduct.sold}/100</span>
                    <span>Available: {featuredProduct.timeLeft}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${featuredProduct.sold}%` }}
                    ></div>
                  </div>
                </div>

                {/* Add to Cart Button */}
                <button className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-200 hover:shadow-lg transform hover:scale-105 w-full mt-auto">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Slider Products (9 columns) */}
          <div className="lg:col-span-9">

            {/* Category Tabs with Slider Navigation */}
            <div className="flex items-center justify-between mb-8 border-b border-gray-200">
              {/* Category Tabs */}
              <div className="flex gap-6">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    className={`pb-4 px-1 font-semibold text-lg transition-all duration-200 border-b-2 ${category.active
                        ? 'text-green-500 border-green-500'
                        : 'text-gray-500 border-transparent hover:text-green-400 hover:border-green-400'
                      }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>

              {/* Slider Navigation - Top Right */}
              <div className="flex items-center gap-3">
                {/* Slide Indicators */}
                <div className="flex items-center gap-2 mr-4">
                  {Array.from({ length: Math.ceil(sliderProducts.length / 3) }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-200 ${index === currentSlide ? 'bg-green-500' : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                    />
                  ))}
                </div>

                <button
                  onClick={prevSlide}
                  className="bg-white hover:bg-green-500 p-2 rounded-full shadow-lg border border-gray-200 transition-all duration-200 hover:scale-110 hover:border-green-500 group"
                >
                  <ChevronLeft size={18} className="text-gray-600 group-hover:text-white transition-colors" />
                </button>

                <button
                  onClick={nextSlide}
                  className="bg-white hover:bg-green-500 p-2 rounded-full shadow-lg border border-gray-200 transition-all duration-200 hover:scale-110 hover:border-green-500 group"
                >
                  <ChevronRight size={18} className="text-gray-600 group-hover:text-white transition-colors" />
                </button>
              </div>
            </div>

            {/* Slider Container */}
            <div className="relative">

              {/* Products Grid - 3 columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {getCurrentSlideProducts().map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-xl shadow-lg border border-gray-100 p-5 transition-all duration-300 hover:shadow-xl group"
                  >

                    {/* Product Image */}
                    <div className="relative mb-4">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                      />

                      {/* Discount Badge */}
                      <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        {product.discount} OFF
                      </div>

                      {/* Hover Action Buttons */}
                      <div className="absolute top-3 left-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <button className="bg-white hover:bg-gray-50 p-2 rounded-full shadow-lg transition-all duration-200 transform hover:scale-110">
                          <Heart size={16} className="text-gray-600 hover:text-red-500" />
                        </button>
                        <button className="bg-white hover:bg-gray-50 p-2 rounded-full shadow-lg transition-all duration-200 transform hover:scale-110">
                          <Eye size={16} className="text-gray-600 hover:text-blue-500" />
                        </button>
                        <button className="bg-white hover:bg-gray-50 p-2 rounded-full shadow-lg transition-all duration-200 transform hover:scale-110">
                          <Shuffle size={16} className="text-gray-600 hover:text-green-500" />
                        </button>
                      </div>
                    </div>

                    {/* Product Title */}
                    <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2 text-sm leading-tight">
                      {product.title}
                    </h4>

                    {/* Brand */}
                    <div className="text-xs text-gray-600 mb-2 italic">
                      By {product.brand}
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-3">
                      {renderStars(product.rating)}
                      <span className="text-xs text-gray-500">({product.reviews})</span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-lg font-bold text-green-600">
                        {product.currentPrice}
                      </span>
                      <span className="text-sm text-gray-400 line-through">
                        {product.originalPrice}
                      </span>
                    </div>

                    {/* Add to Cart Button */}
                    <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2.5 px-4 rounded-lg font-semibold transition-all duration-200 hover:shadow-md text-sm transform group-hover:scale-105">
                      Add to Cart
                    </button>

                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
    

      </div>
      
     
    </div>
  );
}

export default DailyBestSells;
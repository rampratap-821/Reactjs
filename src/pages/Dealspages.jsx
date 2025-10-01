import React, { useState, useEffect } from 'react'
import Alldatapages from './Alldatapages'

function Dealspages() {
  const [counters, setCounters] = useState({})
  const [timeLeft, setTimeLeft] = useState({})

  const products = [
    {
      id: 1,
      name: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
      rating: 4.0,
      brand: "NestFood",
      currentPrice: 32.85,
      originalPrice: 35.6,
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop",
      endDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000) // 2 days from now
    },
    {
      id: 2,
      name: "Perdue Simply Smart Organics Gluten Free",
      rating: 4.0,
      brand: "Old El Paso",
      currentPrice: 24.85,
      originalPrice: 26.8,
      image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=300&fit=crop",
      endDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000) // 3 days from now
    },
    {
      id: 3,
      name: "Signature Wood-Fired Mushroom and Caramelized",
      rating: 3.0,
      brand: "Progresso",
      currentPrice: 12.85,
      originalPrice: 15.6,
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
      endDate: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000) // 1 day from now
    },
    {
      id: 4,
      name: "Simply Lemonade with Raspberry Juice",
      rating: 3.0,
      brand: "Yoplait",
      currentPrice: 15.85,
      originalPrice: 16.6,
      image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400&h=300&fit=crop",
      endDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000) // 5 days from now
    }
  ]

  // Countdown timer for each product
  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = {}
      products.forEach(product => {
        const now = new Date().getTime()
        const distance = product.endDate - now
        
        if (distance > 0) {
          newTimeLeft[product.id] = {
            days: Math.floor(distance / (1000 * 60 * 60 * 24)),
            hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((distance % (1000 * 60)) / 1000)
          }
        } else {
          newTimeLeft[product.id] = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
          }
        }
      })
      setTimeLeft(newTimeLeft)
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const renderStars = (rating) => {
    const stars = []
    const fullStars = Math.floor(rating)
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="text-yellow-400">★</span>)
    }
    
    const emptyStars = 5 - fullStars
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className="text-gray-300">★</span>)
    }
    
    return stars
  }

  const incrementCounter = (productId) => {
    setCounters(prev => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1
    }))
  }

  const decrementCounter = (productId) => {
    setCounters(prev => ({
      ...prev,
      [productId]: Math.max((prev[productId] || 0) - 1, 0)
    }))
  }

  const addToCart = (productId) => {
    setCounters(prev => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1
    }))
  }

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Puspendra Singh Deals Pages
      </h1>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <div 
            key={product.id} 
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-gray-200"
          >
            {/* Product Image with Counter */}
            <div className="relative h-48 bg-gray-100 overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {/* Counter always visible on image */}
              <div className="absolute top-3 left-3 bg-white border border-gray-300 rounded-full px-3 py-1 flex items-center gap-3 shadow-sm">
                <button 
                  onClick={() => decrementCounter(product.id)}
                  className="w-6 h-6 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-full text-gray-700 font-bold transition-colors"
                >
                  -
                </button>
                <span className="font-semibold text-gray-800 min-w-6 text-center">
                  {counters[product.id] || 0}
                </span>
                <button 
                  onClick={() => incrementCounter(product.id)}
                  className="w-6 h-6 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-full text-gray-700 font-bold transition-colors"
                >
                  +
                </button>
              </div>
            </div>
            
            {/* Product Info */}
            <div className="p-5">
              {/* Rating */}
              <div className="flex items-center gap-1 mb-3">
                <div className="flex gap-0.5">
                  {renderStars(product.rating)}
                </div>
                <span className="text-xs text-gray-600 ml-1">({product.rating})</span>
              </div>
              
              {/* Product Name */}
              <h3 className="text-base font-semibold text-gray-800 mb-2 leading-tight">
                {product.name}
              </h3>
              
              {/* Brand */}
              <p className="text-sm text-gray-600 mb-4">By {product.brand}</p>
              
              {/* Pricing */}
              <div className="flex items-center gap-2 mb-4">
                <span className="text-lg font-bold text-blue-700">
                  ${product.currentPrice}
                </span>
                <span className="text-sm text-gray-500 line-through">
                  ${product.originalPrice}
                </span>
              </div>

              {/* Countdown Timer Box */}
              <div className="mb-4 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                <div className="text-xs text-gray-600 mb-2 font-medium">Offer ends in:</div>
                <div className="flex justify-between text-center">
                  <div>
                    <div className="text-lg font-bold text-blue-700">
                      {timeLeft[product.id] ? formatTime(timeLeft[product.id].days) : '00'}
                    </div>
                    <div className="text-xs text-gray-500">Days</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-blue-700">
                      {timeLeft[product.id] ? formatTime(timeLeft[product.id].hours) : '00'}
                    </div>
                    <div className="text-xs text-gray-500">Hours</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-blue-700">
                      {timeLeft[product.id] ? formatTime(timeLeft[product.id].minutes) : '00'}
                    </div>
                    <div className="text-xs text-gray-500">Mins</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-blue-700">
                      {timeLeft[product.id] ? formatTime(timeLeft[product.id].seconds) : '00'}
                    </div>
                    <div className="text-xs text-gray-500">Secs</div>
                  </div>
                </div>
              </div>
              
              {/* Add to Cart Button - Separate from counter */}
              <button 
                onClick={() => addToCart(product.id)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-200"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <Alldatapages/>
    </div>
  )
}

export default Dealspages
import React, { useState } from "react";
import Lottie from "lottie-react";
import loadingAnimation from "../assets/rama.json";
import varImage from "../assets/var.jpg"; 


const Simpleimage = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email) {
      alert("Please enter your email address");
      return;
    }
    
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Subscribed Successfully 🎉");
      setEmail("");
    }, 3000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubscribe();
    }
  };

  // Card data with icons
  const features = [
    { icon: "🚚", title: "Free Delivery", desc: "On orders above $50" },
    { icon: "⭐", title: "Fresh Quality", desc: "100% fresh products" },
    { icon: "💰", title: "Best Price", desc: "Price match guarantee" },
    { icon: "⏰", title: "24/7 Support", desc: "Always here to help" },
    { icon: "🔄", title: "Easy Returns", desc: "30-day return policy" }
  ];

  return (
    <div className="mt-8 py-6 w-full px-[5px]"> {/* 5px padding left & right */}
    
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50 backdrop-blur-sm">
          <div className="bg-white/10 p-8 rounded-3xl backdrop-blur-md border border-white/20">
            <Lottie
              animationData={loadingAnimation}
              loop={true}
              autoplay={true}
              style={{ height: 120, width: 120 }}
            />
          </div>
        </div>
      )}

      {/* Single Image Container - With 5px margin on sides */}
      <div className="relative w-[calc(100%-10px)] mx-auto h-[550px] overflow-hidden rounded-xl shadow-2xl mb-2">
        
        {/* Image - Full width with cover */}
        <img
          src={varImage}
          alt="Fresh Groceries Banner"
          className="w-full h-full object-cover"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>

        {/* Text Content - Centered Left */}
        <div className="absolute top-1/2 left-8 transform -translate-y-1/2 max-w-lg z-10">
          <div className="mb-6">
            <h2 className="text-5xl font-bold text-white mb-4 leading-tight">
              Fresh Groceries
              <br />
              <span className="text-green-300 bg-gradient-to-r from-green-400 to-green-200 bg-clip-text text-transparent">
                Delivered Daily
              </span>
            </h2>
            <p className="text-white/90 text-xl font-light leading-relaxed mb-6">
              Get the best quality products at your doorstep with free delivery on first order
            </p>
          </div>

          {/* Input Section - Moved inside text content */}
          <div className="max-w-md">
            <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-2 border border-white/30 shadow-2xl">
              <div className="flex items-stretch rounded-xl overflow-hidden bg-white/95">
                <input
                  type="email"
                  placeholder="Enter your email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="flex-1 py-4 px-6 bg-transparent border-none focus:outline-none focus:ring-0 text-gray-800 placeholder-gray-500 text-base font-medium w-full"
                />
                <button
                  onClick={handleSubscribe}
                  disabled={loading}
                  className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 hover:from-green-600 hover:to-green-700 transition-all duration-300 disabled:opacity-50 font-semibold text-sm whitespace-nowrap min-w-[140px] flex items-center justify-center shadow-lg hover:shadow-green-500/25"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    "Subscribe Now"
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 5 Cards Section - With 5px spacing */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 w-full mt-8">
        {features.map((feature, index) => (
          <div 
            key={index}
            className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg border border-gray-200/60 hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:border-green-200/80 group"
          >
            <div className="text-4xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">
              {feature.icon}
            </div>
            <h3 className="font-bold text-gray-800 text-center text-base mb-2 group-hover:text-green-700 transition-colors duration-300">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-sm text-center leading-tight">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
      
     
    </div>
  );
};

export default Simpleimage;
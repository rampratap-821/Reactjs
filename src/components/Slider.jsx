import React, { useState } from "react";
import SlickSlider from "react-slick";
import Lottie from "lottie-react";
import loadingAnimation from "../assets/rama.json";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slider1 from "../assets/slider1.jpg";
import slider2 from "../assets/slider2.jpg";
import slider3 from "../assets/slider3.jpg";
import slider4 from "../assets/slider4.jpg";
import slider5 from "../assets/slider6.jpg";

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow next-arrow`}
      style={{ ...style, display: "block", right: "25px", zIndex: 1 }}
      onClick={onClick}
    >
      <div className="w-14 h-14 bg-white/95 rounded-full flex items-center justify-center shadow-xl hover:bg-white hover:shadow-2xl transition-all duration-300 border border-gray-100">
        <svg className="w-7 h-7 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow prev-arrow`}
      style={{ ...style, display: "block", left: "25px", zIndex: 1 }}
      onClick={onClick}
    >
      <div className="w-14 h-14 bg-white/95 rounded-full flex items-center justify-center shadow-xl hover:bg-white hover:shadow-2xl transition-all duration-300 border border-gray-100">
        <svg className="w-7 h-7 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </div>
    </div>
  );
};

const Slider = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const images = [slider1, slider2, slider3, slider4, slider5];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    fade: true,
    cssEase: "cubic-bezier(0.645, 0.045, 0.355, 1)",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    dotsClass: "slick-dots custom-dots",
    appendDots: dots => (
      <div className="absolute bottom-6 w-full">
        <ul className="flex justify-center space-x-2">{dots}</ul>
      </div>
    ),
  };

  const handleSubscribe = () => {
    if (!email) return;

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setEmail("");
    }, 1000);
  };

  return (
    <div className="relative w-full mx-auto py-4 px-2 overflow-hidden">
    
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

      <SlickSlider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="relative group">
           
            <div className="relative overflow-hidden rounded-2xl shadow-xl mx-2">
              <img
                src={img}
                alt={`slider-${index + 1}`}
                className="w-full h-[450px] object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent rounded-2xl"></div>
            </div>

            {/* Input Section - Bottom Left Position */}
            <div className="absolute bottom-6 left-6 max-w-md z-10">
             
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-1 border border-white/20 shadow-2xl">
                <div className="flex items-stretch rounded-xl overflow-hidden">
                  <input
                    type="email"
                    placeholder="Enter your email address..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 py-3 px-5 bg-white/95 border-none focus:outline-none focus:ring-0 text-gray-800 placeholder-gray-500 text-base font-medium w-64"
                  />
                  <button
                    onClick={handleSubscribe}
                    disabled={loading}
                    className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 hover:from-green-600 hover:to-green-700 transition-all duration-300 disabled:opacity-50 font-semibold text-sm whitespace-nowrap min-w-[120px] flex items-center justify-center shadow-lg"
                  >
                    {loading ? (
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      "Subscribe"
                    )}
                  </button>
                </div>
              </div>

              {/* Benefits Text */}
              <p className="text-white/80 text-xs font-medium mt-2 bg-black/40 px-3 py-2 rounded-lg backdrop-blur-sm">
                Get 20% off on your first order
              </p>
            </div>

            {/* Text Content - Top Left */}
            <div className="absolute top-8 left-6 max-w-md z-10">
              <div className="mb-4">
                <h2 className="text-3xl font-bold text-white mb-2 leading-tight">
                  Fresh Groceries
                  <br />
                  <span className="text-green-300">Delivered Daily</span>
                </h2>
                <p className="text-white/90 text-base font-light">
                  Get the best quality products at your doorstep
                </p>
              </div>
            </div>
          </div>
        ))}
      </SlickSlider>

      {/* ❌ Categories को यहाँ से हटा दिया गया */}

      {/* Custom CSS for better dots and hide scrollbar */}
      <style jsx>{`
        .custom-dots li {
          margin: 0 4px;
        }
        .custom-dots li button:before {
          font-size: 10px;
          color: white;
          opacity: 0.6;
          transition: all 0.3s ease;
        }
        .custom-dots li.slick-active button:before {
          opacity: 1;
          color: #10B981;
          font-size: 12px;
        }
        .custom-dots li button:hover:before {
          opacity: 0.8;
        }
        .custom-arrow {
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .slick-slider:hover .custom-arrow {
          opacity: 1;
        }
        
        /* Hide scrollbar */
        .slick-slider {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        .slick-slider::-webkit-scrollbar {
          display: none; /* Chrome, Safari and Opera */
        }
      `}</style>
    </div>
  );
};

export default Slider;
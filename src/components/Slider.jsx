import React, { useState } from "react";
import SlickSlider from "react-slick";
import Lottie from "lottie-react";
import loadingAnimation from "../assets/rama.json";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Assuming these paths are correct
import slider1 from "../assets/slider1.jpg";
import slider2 from "../assets/slider2.jpg";
import slider3 from "../assets/slider3.jpg";
import slider4 from "../assets/slider4.jpg";
import slider5 from "../assets/slider6.jpg";

// --- Arrow Components ---
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow next-arrow`}
      style={{ ...style, display: "block", right: "30px", zIndex: 10 }}
      onClick={onClick}
    >
      <div className="w-8 h-8 md:w-12 md:h-12 bg-white/95 rounded-full flex items-center justify-center shadow-xl hover:bg-white hover:shadow-2xl transition-all duration-300 border border-gray-100">
        <svg className="w-4 h-4 md:w-6 md:h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      style={{ ...style, display: "block", left: "30px", zIndex: 10 }}
      onClick={onClick}
    >
      <div className="w-8 h-8 md:w-12 md:h-12 bg-white/95 rounded-full flex items-center justify-center shadow-xl hover:bg-white hover:shadow-2xl transition-all duration-300 border border-gray-100">
        <svg className="w-4 h-4 md:w-6 md:h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </div>
    </div>
  );
};

// --- Main Slider Component ---
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
      <div className="absolute bottom-4 md:bottom-6 w-full">
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
    <div className="relative w-full py-0 overflow-hidden"> 
    
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
          <div key={index} className="relative">
            
            {/* Image Container */}
            <div className="relative overflow-hidden rounded-none md:rounded-2xl shadow-xl"> 
              <img
                src={img}
                alt={`slider-${index + 1}`}
                className="w-full h-[300px] sm:h-[350px] md:h-[450px] object-cover" 
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent rounded-none md:rounded-2xl"></div>
            </div>

            {/* Input Section - Fully Responsive */}
            <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-10 md:right-auto md:max-w-md z-10">
              
              <div className="bg-white/10 backdrop-blur-md rounded-xl md:rounded-2xl p-1 border border-white/20 shadow-2xl w-full">
                <div className="flex flex-col sm:flex-row items-stretch rounded-lg md:rounded-xl overflow-hidden">
                  <input
                    type="email"
                    placeholder="Enter your email address..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 py-2 px-3 sm:py-3 sm:px-4 md:py-3 md:px-5 bg-white/95 border-none focus:outline-none focus:ring-0 text-gray-800 placeholder-gray-500 text-sm sm:text-base font-medium w-full sm:w-auto"
                  />
                  <button
                    onClick={handleSubscribe}
                    disabled={loading}
                    className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 sm:px-6 sm:py-3 hover:from-green-600 hover:to-green-700 transition-all duration-300 disabled:opacity-50 font-semibold text-xs sm:text-sm whitespace-nowrap min-w-[100px] sm:min-w-[120px] flex items-center justify-center shadow-lg mt-1 sm:mt-0"
                  >
                    {loading ? (
                      <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      "Subscribe"
                    )}
                  </button>
                </div>
              </div>

              {/* Benefits Text */}
              <p className="text-white/80 text-xs font-medium mt-2 bg-black/40 px-3 py-1.5 md:px-4 md:py-2 rounded-lg backdrop-blur-sm w-full sm:w-auto text-center sm:text-left">
                Get 20% off on your first order
              </p>
            </div>

            {/* Text Content - Responsive */}
            <div className="absolute top-4 left-4 right-4 md:top-10 md:left-10 md:right-auto md:max-w-md z-10">
              <div className="mb-2 md:mb-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 md:mb-3 leading-tight text-center sm:text-left">
                  Fresh Groceries
                  <br />
                  <span className="text-green-300">Delivered Daily</span>
                </h2>
                <p className="text-white/90 text-sm sm:text-base md:text-lg font-light text-center sm:text-left">
                  Get the best quality products at your doorstep
                </p>
              </div>
            </div>
          </div>
        ))}
      </SlickSlider>

      {/* Custom CSS for better dots and arrows */}
      <style jsx>{`
        .custom-dots {
          position: absolute;
          bottom: 20px;
          width: 100%;
        }
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
        
        /* Arrow positioning and styling */
        .custom-arrow {
          opacity: 0.8;
          transition: all 0.3s ease;
          top: 50%;
          transform: translateY(-50%);
        }
        .custom-arrow:hover {
          opacity: 1;
          transform: translateY(-50%) scale(1.05);
        }
        .next-arrow {
          right: 15px !important;
        }
        .prev-arrow {
          left: 15px !important;
        }
        
        /* Responsive arrow positioning */
        @media (min-width: 768px) {
          .next-arrow {
            right: 35px !important;
          }
          .prev-arrow {
            left: 35px !important;
          }
          .custom-dots {
            bottom: 30px;
          }
          .custom-dots li {
            margin: 0 6px;
          }
          .custom-dots li button:before {
            font-size: 12px;
          }
          .custom-dots li.slick-active button:before {
            font-size: 14px;
          }
        }
        
        /* Hide default slick arrows */
        .slick-prev, .slick-next {
          width: 50px;
          height: 50px;
        }
        .slick-prev:before, .slick-next:before {
          display: none;
        }
        
        /* Hide scrollbar for the slick-slider itself */
        .slick-slider {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .slick-slider::-webkit-scrollbar {
          display: none;
        }
        
        /* Apply margin to the slick-list */
        .slick-slider .slick-list {
          margin: 0 4px !important;
        }
        
        /* Ensure slick-slider padding is zero */
        .slick-slider {
          padding: 0 !important; 
        }
      `}</style>

      {/* Additional inline style for arrow positioning and Global Scrollbar Fix */}
      <style jsx global>{`
        html, body {
          overflow-x: hidden !important;
          margin: 0;
          padding: 0;
        }
        
        .slick-slider .slick-arrow {
          width: auto;
          height: auto;
        }
        .slick-slider .slick-arrow:hover {
          background: transparent;
        }
        
        .slick-slider .slick-list {
          margin: 0 !important; 
        }
        .slick-slider {
          padding: 0 !important;
        }
      `}</style>
    </div>
  );
};

export default Slider;
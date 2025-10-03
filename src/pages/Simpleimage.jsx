import React, { useState, useEffect, useCallback } from "react";

const varImage = "https://images.unsplash.com/photo-1542838133-d81643198038?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const Toast = ({ message, type, onClose }) => {
    if (!message) return null;

    const baseClasses = "fixed bottom-5 right-5 p-4 rounded-xl shadow-xl z-50 transition-transform duration-300 transform scale-100";
    const typeClasses = type === 'error'
        ? "bg-red-500 text-white"
        : "bg-green-500 text-white";

    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 3000);
        return () => clearTimeout(timer);
    }, [message, onClose]);

    return (
        <div className={`${baseClasses} ${typeClasses}`} role="alert">
            <div className="flex items-center">
                <span className="font-bold mr-2">{type === 'error' ? '🚫 Error:' : '✅ Success:'}</span>
                {message}
                <button onClick={onClose} className="ml-4 font-bold opacity-75 hover:opacity-100">&times;</button>
            </div>
        </div>
    );
};

const SimpleImage = () => {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [toast, setToast] = useState({ message: '', type: '' });

    const showMessage = useCallback((message, type = 'success') => {
        setToast({ message, type });
    }, []);
    
    const clearToast = useCallback(() => {
        setToast({ message: '', type: '' });
    }, []);

    const handleSubscribe = () => {
        clearToast(); 
        if (!email || !email.includes('@')) {
            showMessage("Please enter a valid email address.", 'error');
            return;
        }

        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            showMessage(`Thank you, ${email}! You're subscribed to daily deals.`, 'success');
            setEmail("");
        }, 2500);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSubscribe();
        }
    };

    const features = [
        { icon: "🚚", title: "Swift Delivery", desc: "Free on orders over $50. Quickest in town." },
        { icon: "⭐", title: "Supreme Quality", desc: "Hand-picked, 100% farm-fresh products." },
        { icon: "💰", title: "Guaranteed Price", desc: "Best prices assured with a price match." },
        { icon: "⏰", title: "Always Open", desc: "24/7 dedicated support team available." },
        { icon: "🔄", title: "Hassle-Free Returns", desc: "30 days easy return and replacement policy." }
    ];

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            
            <Toast message={toast.message} type={toast.type} onClose={clearToast} />

            {/* Added lg:mt-8 and lg:rounded-3xl for better spacing and rounding on desktop */}
            <header className="relative w-full h-[600px] sm:h-[650px] lg:h-[500px] overflow-hidden shadow-2xl lg:mt-8 lg:rounded-3xl">
                
               
                
                <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-green-900/10"></div>

                <div className="absolute inset-0 flex items-center max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 z-10">
                    <div className="max-w-3xl text-white">
                        <span className="text-sm font-semibold uppercase tracking-widest text-lime-300 mb-2 block">
                            Farm to Table in Hours
                        </span>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight drop-shadow-lg animate-pulse-slow">
                            Freshness <br className="hidden sm:inline" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-300 to-green-300">
                                Delivered
                            </span>{" "}
                            Daily.
                        </h1>
                        <p className="text-xl md:text-2xl font-medium mb-10 opacity-90 drop-shadow-md">
                            Experience the highest quality groceries, hand-picked and delivered right to your door, ensuring peak flavor and nutrition.
                        </p>

                        <div className="max-w-md w-full">
                            <div className="bg-white/95 backdrop-blur-sm rounded-full p-2 shadow-2xl transition-all duration-500 hover:ring-8 ring-green-500/30">
                                <div className="flex items-stretch rounded-full overflow-hidden">
                                    <input
                                        type="email"
                                        placeholder="Enter your email for 20% off first order..."
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        onKeyPress={handleKeyPress}
                                        disabled={loading}
                                        className="flex-1 py-4 px-6 bg-transparent border-none focus:outline-none text-gray-800 placeholder-gray-500 text-base font-medium w-full"
                                    />
                                    <button
                                        onClick={handleSubscribe}
                                        disabled={loading}
                                        className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-full hover:from-green-700 hover:to-green-800 transition-all duration-300 disabled:opacity-50 font-bold text-base whitespace-nowrap min-w-[140px] flex items-center justify-center shadow-lg hover:shadow-green-700/50 transform hover:scale-[1.02]"
                                    >
                                        {loading ? (
                                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                        ) : (
                                            "Get Started"
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-16">
                <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-10">Why Choose Us?</h2>
                
                <div className="grid grid-cols-2 md:grid-cols-5 gap-6 lg:gap-8 w-full">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            /* Updated feature card rounding from rounded-2xl to rounded-3xl */
                            className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-gray-100 flex flex-col items-center text-center transition-all duration-300 hover:shadow-green-200/50 hover:border-green-400 group cursor-pointer hover:scale-[1.03]"
                        >
                            <div className="text-5xl mb-4 p-4 rounded-full bg-lime-100 text-green-700 transform group-hover:bg-lime-200 transition-all duration-300">
                                {feature.icon}
                            </div>
                            
                            <h3 className="font-extrabold text-gray-900 text-lg mb-2 group-hover:text-green-600 transition-colors duration-300">
                                {feature.title}
                            </h3>
                            
                            <p className="text-gray-500 text-sm leading-relaxed">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                @keyframes pulse-slow {
                    0% { opacity: 1; }
                    50% { opacity: 0.97; }
                    100% { opacity: 1; }
                }
                .animate-pulse-slow {
                    animation: pulse-slow 5s infinite ease-in-out;
                }
            `}</style>
        </div>
    );
};

export default SimpleImage;

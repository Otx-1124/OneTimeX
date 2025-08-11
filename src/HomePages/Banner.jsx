import React, { useState, useEffect } from "react";
import { X, ArrowRight, Sparkles, Users, TrendingUp, Award, Play, Zap, Shield, BarChart3 } from "lucide-react";

const Banner = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    agreed: false
  });
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    "Zero Brokerage Trading",
    "AI-Powered Insights", 
    "Real-time Analytics",
    "Expert Recommendations"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % features.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const stats = [
    { number: "2M+", label: "Happy Investors", icon: "👥" },
    { number: "₹1000Cr+", label: "Assets Under Management", icon: "💰" },
    { number: "4.9★", label: "App Store Rating", icon: "⭐" },
    { number: "99.9%", label: "Uptime Guarantee", icon: "🚀" }
  ];

  const keyFeatures = [
    {
      icon: Shield,
      title: "Bank-Grade Security",
      description: "Your investments are protected with 256-bit encryption",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Zap,
      title: "Lightning Fast Trades",
      description: "Execute orders in milliseconds with our advanced infrastructure",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: BarChart3,
      title: "Smart Analytics",
      description: "AI-powered insights to help you make better investment decisions",
      gradient: "from-violet-500 to-purple-500"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-cyan-50 relative overflow-hidden">
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-pink-300 to-violet-300 rounded-full opacity-60 animate-bounce"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-cyan-300 to-blue-300 rounded-full opacity-40 animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-gradient-to-r from-emerald-300 to-teal-300 rounded-full opacity-50 animate-bounce" style={{animationDelay: '1s'}}></div>
        
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-7xl mx-auto">
            
            {/* Main Content */}
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              
              {/* Left Column */}
              <div className="space-y-8">
                <div className="inline-flex items-center bg-gradient-to-r from-violet-100 to-cyan-100 px-6 py-3 rounded-full">
                  <Award className="w-5 h-5 text-violet-600 mr-2" />
                  <span className="text-sm font-semibold text-violet-700">India's Fastest Growing Platform</span>
                </div>

                <div className="space-y-6">
                  <h1 className="text-5xl lg:text-7xl font-black leading-none">
                    <span className="block text-gray-900">Future of</span>
                    <span className="block bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                      Smart Investing
                    </span>
                    <span className="block text-gray-900">Starts Here</span>
                  </h1>

                  <div className="h-8 flex items-center">
                    <p className="text-xl text-gray-600">
                      Experience{" "}
                      <span className="inline-block w-48 text-left">
                        <span className="bg-gradient-to-r from-violet-600 to-cyan-600 bg-clip-text text-transparent font-bold">
                          {features[activeFeature]}
                        </span>
                      </span>
                    </p>
                  </div>

                  <p className="text-lg text-gray-500 max-w-lg leading-relaxed">
                    Join millions of smart investors who trust OnetimeX for their investment journey. 
                    Trade stocks, mutual funds, and more with zero commission.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => setShowModal(true)}
                    className="group bg-gradient-to-r from-violet-600 to-cyan-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3"
                  >
                    <span>Start Investing Now</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  
                  <button className="group bg-white border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-2xl font-bold text-lg hover:border-violet-300 hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-3">
                    <Play className="w-5 h-5" />
                    <span>Watch Demo</span>
                  </button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-6 pt-8">
                  {stats.slice(0, 2).map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-black text-gray-900">{stat.number}</div>
                      <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column - Interactive Dashboard Preview */}
              <div className="relative">
                <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                  <div className="space-y-6">
                    
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-gray-900">Portfolio Overview</h3>
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      </div>
                    </div>

                    {/* Portfolio Value */}
                    <div className="bg-gradient-to-r from-violet-50 to-cyan-50 rounded-2xl p-6">
                      <div className="text-sm text-gray-500 mb-2">Total Portfolio Value</div>
                      <div className="text-4xl font-black text-gray-900 mb-2">₹2,45,680</div>
                      <div className="flex items-center space-x-2">
                        <div className="text-green-600 text-sm font-semibold">+₹12,340</div>
                        <div className="text-green-600 text-sm">(+5.28%)</div>
                        <TrendingUp className="w-4 h-4 text-green-600" />
                      </div>
                    </div>

                    {/* Holdings */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-gray-700">Top Holdings</h4>
                      {[
                        { name: "RELIANCE", change: "+2.4%", value: "₹45,230", color: "green" },
                        { name: "TCS", change: "+1.8%", value: "₹32,180", color: "green" },
                        { name: "HDFC BANK", change: "-0.5%", value: "₹28,940", color: "red" }
                      ].map((stock, index) => (
                        <div key={index} className="flex items-center justify-between py-3 px-4 bg-gray-50 rounded-xl">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-r from-violet-400 to-cyan-400 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                              {stock.name[0]}
                            </div>
                            <div>
                              <div className="font-semibold text-gray-900">{stock.name}</div>
                              <div className={`text-sm ${stock.color === 'green' ? 'text-green-600' : 'text-red-600'}`}>
                                {stock.change}
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-semibold text-gray-900">{stock.value}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating Cards */}
                <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-lg p-4 border border-gray-100">
                  <div className="flex items-center space-x-3">
                    <Users className="w-8 h-8 text-violet-600" />
                    <div>
                      <div className="text-sm text-gray-500">Active Users</div>
                      <div className="font-bold text-gray-900">2M+</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-lg p-4 border border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-400 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">AI</span>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Smart Recommendations</div>
                      <div className="font-bold text-gray-900">24/7</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Features Section */}
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
              {keyFeatures.map((feature, index) => (
                <div key={index} className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2">
                  <div className={`w-14 h-14 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* Bottom Stats */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-100 shadow-lg">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl mb-3">{stat.icon}</div>
                    <div className="text-3xl font-black text-gray-900 mb-1">{stat.number}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-3xl w-full max-w-lg relative shadow-2xl transform transition-all duration-300 scale-100">
            <button
              onClick={() => setShowModal(false)}
              className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-xl hover:shadow-2xl transition-shadow duration-300 text-gray-600 hover:text-gray-900 border border-gray-200"
            >
              <X size={20} />
            </button>

            <div className="p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Join OnetimeX Today
                </h2>
                <p className="text-gray-600">
                  Open your free demat account in under 5 minutes
                </p>
              </div>

              <div className="space-y-6">
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-violet-500 transition-colors duration-200 text-lg"
                  />

                  <div className="flex">
                    <div className="flex items-center px-4 py-4 border-2 border-r-0 border-gray-200 rounded-l-2xl bg-gray-50 text-gray-600 font-medium">
                      +91
                    </div>
                    <input
                      type="tel"
                      placeholder="Enter phone number"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full px-6 py-4 border-2 border-l-0 border-gray-200 rounded-r-2xl focus:outline-none focus:border-violet-500 transition-colors duration-200 text-lg"
                    />
                  </div>
                </div>

                <label className="flex items-start gap-3 text-sm text-gray-600 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.agreed}
                    onChange={(e) => handleInputChange('agreed', e.target.checked)}
                    className="w-5 h-5 text-violet-600 border-2 border-gray-300 rounded focus:ring-violet-500 mt-0.5"
                  />
                  <span className="leading-relaxed">
                    I agree to the{" "}
                    <span className="text-violet-600 font-medium hover:underline cursor-pointer">
                      Terms & Conditions
                    </span>{" "}
                    and{" "}
                    <span className="text-violet-600 font-medium hover:underline cursor-pointer">
                      Privacy Policy
                    </span>
                  </span>
                </label>

                <button 
                  disabled={!formData.name || !formData.phone || !formData.agreed}
                  className="w-full bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-bold py-4 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-lg"
                >
                  Create Free Account
                </button>

                <div className="text-center">
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span>Trusted by 2M+ investors</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Banner;
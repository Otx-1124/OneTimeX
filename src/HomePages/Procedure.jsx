import { ArrowBigRightDash, CheckCircle, TrendingUp, Shield, Award } from "lucide-react";
import React from "react";

const Procedure = () => {
  const steps = [
    {
      step: 1,
      title: "Browse OnetimeX Platform",
      description: "Navigate to our user-friendly platform and explore the investment opportunities available to you.",
      icon: "🌐"
    },
    {
      step: 2,
      title: "Create Your Account",
      description: "Fill out the simple registration form with your basic details and verify your identity securely.",
      icon: "📝"
    },
    {
      step: 3,
      title: "Complete KYC Process",
      description: "Upload required documents for quick verification and compliance with regulatory standards.",
      icon: "✅"
    },
    {
      step: 4,
      title: "Start Trading",
      description: "Fund your account and begin your investment journey with our comprehensive trading tools.",
      icon: "🚀"
    }
  ];

  const services = [
    {
      title: "Unlisted Stock & Pre IPO",
      description: "Access exclusive pre-IPO opportunities",
      color: "from-purple-600 to-purple-800",
      hoverColor: "hover:from-purple-700 hover:to-purple-900"
    },
    {
      title: "Listed | Mutual Funds",
      description: "Diversified portfolio options",
      color: "from-blue-600 to-blue-800",
      hoverColor: "hover:from-blue-700 hover:to-blue-900"
    },
    {
      title: "Insurance",
      description: "Protect your financial future",
      color: "from-green-600 to-green-800",
      hoverColor: "hover:from-green-700 hover:to-green-900"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-green-200/30 to-blue-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative px-4 sm:px-6 lg:px-10 py-12 container mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200/50 mb-4">
            <Award className="w-4 h-4 text-yellow-500" />
            <span className="text-xs font-medium text-gray-600">Trusted Investment Partner</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
            We Are Associated By...
          </h1>
          <p className="text-gray-600 text-sm max-w-xl mx-auto">
            Join thousands of investors who trust our platform for their financial growth
          </p>
        </div>

        {/* Partner Logo Section */}
        <div className="flex justify-center mb-10">
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
            <div className="relative bg-white rounded-xl p-4 border border-gray-200/50 backdrop-blur-sm">
              <img
                className="w-40 h-12 object-cover filter hover:brightness-110 transition-all duration-300"
                src="/logoalice.png"
                alt="Alice Blue - Our Trusted Partner"
              />
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 md:mx-10 mx-2">
          {/* Left: Steps Section */}
          <div className="space-y-6">
            <div className="text-center lg:text-left">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                Create your Demat Account in{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  4 Simple Steps
                </span>
              </h2>
              <p className="text-gray-600 text-sm">
                Get started with your investment journey in minutes
              </p>
            </div>

            <div className="space-y-4">
              {steps.map((stepItem, index) => (
                <div
                  key={index}
                  className="group relative bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50 hover:border-blue-300/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform duration-300">
                        {stepItem.step}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-lg">{stepItem.icon}</span>
                        <h3 className="font-semibold text-sm text-gray-900">
                          {stepItem.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 text-xs leading-relaxed">
                        {stepItem.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: CTA Section */}
          <div className="space-y-6">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50">
              <div className="text-center mb-6">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                    Start Investing With{" "}
                    <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                      OnetimeX
                    </span>
                  </h2>
                  <TrendingUp className="w-5 h-5 text-green-500" />
                </div>
                <img
                  className="w-24 h-auto mx-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
                  src="/undraw_bull-market_4a8e.svg"
                  alt="Bull Market Illustration"
                />
              </div>

              <div className="space-y-3">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className={`group relative overflow-hidden bg-gradient-to-r ${service.color} ${service.hoverColor} text-white rounded-xl p-4 cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
                  >
                    <div className="relative z-10 flex justify-between items-center">
                      <div>
                        <h3 className="font-semibold text-sm mb-1">
                          {service.title}
                        </h3>
                        <p className="text-white/80 text-xs">
                          {service.description}
                        </p>
                      </div>
                      <ArrowBigRightDash className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                    
                    {/* Hover Effect Background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ))}
              </div>

              {/* Additional CTA */}
              <div className="mt-6 text-center">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-3 rounded-xl font-semibold text-sm hover:from-green-600 hover:to-blue-600 transition-all duration-300 cursor-pointer hover:shadow-lg hover:-translate-y-1">
                  <CheckCircle className="w-4 h-4" />
                  Open Free Demat Account
                </div>
                <p className="text-gray-500 text-xs mt-2">
                  Zero brokerage on equity delivery trades*
                </p>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-center">
              <div className="bg-white/50 backdrop-blur-sm rounded-lg p-3 border border-gray-200/50">
                <div className="text-lg font-bold text-blue-600 mb-1">Onboarding</div>
                <div className="text-gray-600 text-xs">Retails Investors</div>
              </div>
              <div className="bg-white/50 backdrop-blur-sm rounded-lg p-3 border border-gray-200/50">
                <div className="text-lg font-bold text-green-600 mb-1">Infrastructure</div>
                <div className="text-gray-600 text-xs">For 1 Lakh+ Investors</div>
              </div>
              <div className="bg-white/50 backdrop-blur-sm rounded-lg p-3 border border-gray-200/50">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <span className="text-lg font-bold text-yellow-500">4.7</span>
                  <span className="text-yellow-400 text-sm">★</span>
                </div>
                <div className="text-gray-600 text-xs">Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Procedure;
import {
  Check,
  FileText,
  CreditCard,
  Phone,
  Package,
} from "lucide-react";

const stepsData = [
  {
    id: 1,
    title: "Contact us",
    desc: "Call or DM on WhatsApp to begin",
    icon: Phone,
  },
  {
    id: 2,
    title: "Choose company",
    desc: "Browse verified unlisted & pre-IPO options",
    icon: FileText,
  },
  {
    id: 3,
    title: "Place order",
    desc: "Share quantity & confirm your interest",
    icon: Package,
  },
  {
    id: 4,
    title: "Make payment",
    desc: "Secure transfer via NEFT / IMPS / UPI",
    icon: CreditCard,
  },
  {
    id: 5,
    title: "Receive shares",
    desc: "Shares credited to your demat in T+2 days",
    icon: Check,
  },
];

export default function BuyProcess({ currentStep = 5 }) {
  return (
    <section className="w-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 py-14 sm:py-16 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-green-400 uppercase tracking-[4px] text-xs sm:text-sm font-semibold">
            Simple Investment Process
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3">
            How To Buy Shares
          </h2>

          <p className="text-slate-400 text-sm sm:text-base mt-4 max-w-2xl mx-auto leading-relaxed">
            Invest in verified unlisted and pre-IPO companies in just a few
            simple steps.
          </p>
        </div>

        {/* Desktop / Tablet Layout */}
        <div className="hidden md:flex relative items-start justify-between gap-4">
          {/* Animated Line */}
          <div className="absolute top-7 left-0 w-full h-[2px] bg-slate-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full transition-all duration-700"
              style={{
                width: `${((currentStep - 1) / (stepsData.length - 1)) * 100}%`,
              }}
            />
          </div>

          {stepsData.map((step) => {
            const Icon = step.icon;

            const isActive = step.id === currentStep;
            const isCompleted = step.id < currentStep;

            return (
              <div
                key={step.id}
                className="relative z-10 flex flex-col items-center text-center flex-1"
              >
                {/* Circle */}
                <div
                  className={`w-14 h-14 lg:w-16 lg:h-16 rounded-2xl border flex items-center justify-center backdrop-blur-xl shadow-lg transition-all duration-300
                  
                  ${
                    isActive
                      ? "bg-green-400 text-black border-green-300 scale-110 shadow-green-500/40"
                      : isCompleted
                      ? "bg-emerald-500 border-emerald-400 text-white"
                      : "bg-slate-900/80 border-slate-700 text-slate-400"
                  }
                  `}
                >
                  <Icon className="w-6 h-6" />
                </div>

                {/* Step */}
                <span
                  className={`mt-4 text-xs tracking-[3px] uppercase font-semibold
                    ${
                      isActive || isCompleted
                        ? "text-green-400"
                        : "text-slate-500"
                    }`}
                >
                  Step {step.id}
                </span>

                {/* Title */}
                <h3 className="text-white font-semibold text-sm lg:text-base mt-2">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-xs lg:text-sm mt-2 max-w-[180px] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden relative flex flex-col gap-6">
          {/* Vertical Line */}
          <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-slate-700">
            <div
              className="bg-gradient-to-b from-green-400 to-emerald-500 w-full transition-all duration-700 rounded-full"
              style={{
                height: `${(currentStep / stepsData.length) * 100}%`,
              }}
            />
          </div>

          {stepsData.map((step) => {
            const Icon = step.icon;

            const isActive = step.id === currentStep;
            const isCompleted = step.id < currentStep;

            return (
              <div
                key={step.id}
                className="relative z-10 flex items-start gap-4"
              >
                {/* Icon */}
                <div
                  className={`min-w-[52px] h-[52px] rounded-2xl border flex items-center justify-center shadow-lg transition-all duration-300
                  
                  ${
                    isActive
                      ? "bg-green-400 text-black border-green-300 scale-105"
                      : isCompleted
                      ? "bg-emerald-500 border-emerald-400 text-white"
                      : "bg-slate-900 border-slate-700 text-slate-400"
                  }
                  `}
                >
                  <Icon className="w-5 h-5" />
                </div>

                {/* Content */}
                <div className="flex-1 bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-4">
                  <span
                    className={`text-[10px] uppercase tracking-[3px] font-semibold
                    ${
                      isActive || isCompleted
                        ? "text-green-400"
                        : "text-slate-500"
                    }`}
                  >
                    Step {step.id}
                  </span>

                  <h3 className="text-white font-semibold text-base mt-1">
                    {step.title}
                  </h3>

                  <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
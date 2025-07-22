import React, { useEffect, useRef, useState } from "react";

const RiskDisclosurePopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isChecked, setIsChecked] = useState(true); // ✅ Default to checked
  const triggeredOnce = useRef(false);

  useEffect(() => {
    const navEntry = performance.getEntriesByType("navigation")[0];
    const isReload = navEntry?.type === "reload" || navEntry?.type === "navigate";

    if (isReload && !triggeredOnce.current) {
      triggeredOnce.current = true;

      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleCheckbox = (e) => {
    setIsChecked(e.target.checked); // ✅ still user-controllable
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-xl w-full max-w-lg p-6 shadow-lg">
        <div className="text-xl font-bold mb-4 flex items-center gap-2">
          📄 RISK DISCLOSURES ON DERIVATIVES
        </div>
        <ul className="text-gray-800 list-disc list-inside space-y-3 text-sm">
          <li>
            9 out of 10 individual traders in the equity Futures and Options
            Segment incurred net losses.
          </li>
          <li>
            On average, loss makers registered net trading losses close to
            ₹50,000.
          </li>
          <li>
            Over and above the net trading losses incurred, loss makers
            expended an additional 28% of net trading losses as transaction
            costs.
          </li>
          <li>
            Those making net trading profits incurred between 15% to 50% of such
            profits as transaction costs.
          </li>
        </ul>
        <p className="text-xs text-gray-500 mt-4">
          Source:{" "}
          <a href="#" className="text-yellow-600 underline">
            SEBI study
          </a>
        </p>

        <div className="flex items-center mt-4">
          <input
            type="checkbox"
            id="disclosure"
            className="mr-2"
            checked={isChecked}
            onChange={handleCheckbox}
          />
          <label htmlFor="disclosure" className="text-sm">
            I have read the risk disclosure.
          </label>
        </div>

        <button
          className={`w-full mt-4 py-2 rounded-lg text-white font-semibold text-sm ${
            isChecked
              ? "bg-yellow-500 hover:bg-yellow-600"
              : "bg-gray-300 cursor-not-allowed"
          }`}
          onClick={handleClose}
          disabled={!isChecked}
        >
          I Understand
        </button>
      </div>
    </div>
  );
};

export default RiskDisclosurePopup;

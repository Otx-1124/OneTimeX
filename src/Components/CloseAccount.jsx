import { motion } from "framer-motion";

const CloseAccount = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white border border-gray-300 rounded-xl shadow-sm p-6 w-full max-w-xl mx-auto"
    >
      <h3 className="text-xl font-semibold text-center text-red-600 mb-4">
        Close Account
      </h3>

      <div className="space-y-2 text-center text-gray-700">
        <p>We're sorry to see you go.</p>
        <p>Click below to start the account closure process.</p>

        <button className="mt-4 px-6 py-2 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 transition-all duration-200">
          Close Account
        </button>
      </div>
    </motion.div>
  );
};

export default CloseAccount;

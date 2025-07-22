import { motion } from "framer-motion";

const ChargesFees = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white border border-gray-300 rounded-xl shadow-sm p-6 w-full max-w-xl mx-auto"
    >
      <h3 className="text-xl font-semibold mb-4 text-center text-blue-700">
        Charges & Fees
      </h3>

      <div className="space-y-2 text-gray-700">
        <p>
          <span className="font-medium text-gray-600">Account Maintenance:</span>{" "}
        
        </p>
        <p>
          <span className="font-medium text-gray-600">Brokerage:</span> 
        </p>
      </div>
    </motion.div>
  );
};

export default ChargesFees;

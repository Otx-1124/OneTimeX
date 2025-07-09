import { motion } from "framer-motion";

const KYCDetails = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white border border-gray-300 rounded-xl shadow-sm p-6 w-full max-w-xl mx-auto"
    >
      <h3 className="text-xl font-semibold mb-4 text-center text-blue-700">
        KYC Information
      </h3>

      <div className="space-y-2 text-gray-700">
        <p>
          <span className="font-medium text-gray-600">Aadhar:</span> **** **** 1234
        </p>
        <p>
          <span className="font-medium text-gray-600">PAN:</span> ABCDE1234F
        </p>
        <p>
          <span className="font-medium text-gray-600">Status:</span>{" "}
          <span className="text-green-600 font-medium">Verified</span>
        </p>
      </div>
    </motion.div>
  );
};

export default KYCDetails;

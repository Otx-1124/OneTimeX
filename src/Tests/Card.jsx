import { motion } from "framer-motion";
import { Lightbulb, Info } from "lucide-react";

const AIFCard = (props) => {
  return (
    <motion.div
      className="max-w-md mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-6 border border-gray-200 dark:border-gray-700"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex items-center gap-3 mb-4">
        <Lightbulb className="text-yellow-500" />
        <h2 className="text-xl font-bold text-gray-800 dark:text-white">
          What is AIF?
        </h2>
      </div>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        AIF (Alternative Investment Fund) refers to a privately pooled investment vehicle that collects funds from sophisticated investors for investing in accordance with a defined investment policy.
      </p>

      <div className="flex items-center gap-3 mb-2">
        <Info className="text-blue-500" />
        <h3 className="font-semibold text-gray-800 dark:text-white">
          Why AIFs?
        </h3>
      </div>
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm pl-2">
        <li>Access to exclusive private equity, hedge funds, and real estate.</li>
        <li>Higher return potential with tailored strategies.</li>
        <li>Ideal for HNIs seeking portfolio diversification.</li>
      </ul>
    </motion.div>
  );
};

export default AIFCard;

{/* <div className=" flex absolute bottom-0 md:top-[35%] right-4 flex-row md:flex-col gap-6">
        {medie.map((icon, index) => (
          <motion.li
            key={index}
            className="list-none text-xl hover:text-blue-500 cursor-pointer"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fallIn}
          >
            <a href="">{icon}</a>
          </motion.li>
        ))}
      </div> */}

import React from "react";
import { motion } from "framer-motion";
import { useRecurrenceStore } from "../store/useRecurrenceStore";

function FrequencySelector() {
  const { frequency, interval, setFrequency, setInterval } = useRecurrenceStore();

  return (
    <motion.div 
      className="mb-6"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-lg font-bold mb-2 text-blue-800">Select Frequency</h2>
      <div className="flex items-center gap-4">
        <input
          type="number"
          value={interval}
          min="1"
          onChange={(e) => setInterval(e.target.value)}
          className="w-16 px-2 py-1 rounded-md border border-blue-300 focus:ring focus:ring-blue-200"
        />
        <select
          value={frequency}
          onChange={(e) => setFrequency(e.target.value)}
          className="px-4 py-2 rounded-md border border-blue-300 bg-white focus:ring focus:ring-blue-200"
        >
          <option>Daily</option>
          <option>Weekly</option>
          <option>Monthly</option>
          <option>Yearly</option>
        </select>
      </div>
    </motion.div>
  );
}

export default FrequencySelector;

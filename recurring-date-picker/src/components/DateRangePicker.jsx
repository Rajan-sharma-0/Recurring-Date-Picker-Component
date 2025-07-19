import React from "react";
import { motion } from "framer-motion";
import { useRecurrenceStore } from "../store/useRecurrenceStore";

function DateRangePicker() {
  const { startDate, endDate, setStartDate, setEndDate } = useRecurrenceStore();

  return (
    <motion.div 
      className="mb-6"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-lg font-bold mb-2 text-green-800">Date Range</h2>
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex flex-col w-full sm:w-1/2">
          <label className="mb-1 text-sm text-gray-700">Start Date</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="border p-2 rounded-md border-green-300 focus:ring focus:ring-green-200"
          />
        </div>
        <div className="flex flex-col w-full sm:w-1/2">
          <label className="mb-1 text-sm text-gray-700">End Date (Optional)</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="border p-2 rounded-md border-green-300 focus:ring focus:ring-green-200"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default DateRangePicker;

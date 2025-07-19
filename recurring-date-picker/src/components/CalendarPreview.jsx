import React from "react";
import { motion } from "framer-motion";
import { useRecurrenceStore } from "../store/useRecurrenceStore";

function CalendarPreview() {
  const { frequency, interval, startDate, endDate } = useRecurrenceStore();

  return (
    <motion.div 
      className="mt-6"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-lg font-bold mb-2 text-purple-800">Mini Calendar Preview</h2>
      <div className="border rounded-md p-4 bg-purple-50 text-gray-800 shadow-sm">
        <p>
          <strong>Frequency:</strong> Every {interval} {frequency}
        </p>
        <p>
          <strong>Start Date:</strong> {startDate || "Not selected"}
        </p>
        <p>
          <strong>End Date:</strong> {endDate || "Not selected"}
        </p>
        <p className="mt-2 italic text-sm text-gray-600">
          (Preview logic coming soon.)
        </p>
      </div>
    </motion.div>
  );
}

export default CalendarPreview;

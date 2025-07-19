import React from "react";
import { useRecurrenceStore } from '../store/useRecurrenceStore.js'

function CalendarPreview() {
  const { frequency, interval, startDate, endDate } = useRecurrenceStore();

  return (
    <div className="animate-fade-in-up delay-150">
      <h2 className="text-xl font-semibold text-gray-700 mb-3">📌 Calendar Preview</h2>
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 shadow-sm">
        <p className="text-sm">
          <strong>Frequency:</strong> Every {interval} {frequency}
        </p>
        <p className="text-sm">
          <strong>Start Date:</strong> {startDate || "Not selected"}
        </p>
        <p className="text-sm">
          <strong>End Date:</strong> {endDate || "Not selected"}
        </p>
        <p className="mt-2 text-xs italic text-gray-500">
          (Preview logic not implemented – just a placeholder.)
        </p>
      </div>
    </div>
  );
}

export default CalendarPreview;
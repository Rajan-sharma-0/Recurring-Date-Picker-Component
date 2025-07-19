// src/components/DateRangePicker.jsx
import React from "react";
import { useRecurrenceStore } from "../store/useRecurrenceStore";

function DateRangePicker() {
  const { startDate, endDate, setStartDate, setEndDate } = useRecurrenceStore();

  return (
    <div className="mb-8 animate-fade-in-up delay-100">
      <h2 className="text-xl font-semibold text-gray-700 mb-3">📅 Date Range</h2>
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex flex-col w-full sm:w-1/2">
          <label className="text-sm text-gray-600 mb-1">Start Date</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="p-3 rounded-lg border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
          />
        </div>
        <div className="flex flex-col w-full sm:w-1/2">
          <label className="text-sm text-gray-600 mb-1">End Date (Optional)</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="p-3 rounded-lg border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
          />
        </div>
      </div>
    </div>
  );
}

export default DateRangePicker;

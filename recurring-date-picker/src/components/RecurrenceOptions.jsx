// src/components/RecurrenceOptions.jsx
import React from "react";
import { useRecurrenceStore } from "../store/useRecurrenceStore";

const frequencies = ["daily", "weekly", "monthly", "yearly"];

function RecurrenceOptions() {
  const { frequency, interval, setFrequency, setInterval } = useRecurrenceStore();

  return (
    <div className="mb-8 animate-fade-in-up delay-75">
      <h2 className="text-xl font-semibold text-gray-700 mb-3">🌀 Recurrence Options</h2>
      <div className="flex flex-col sm:flex-row gap-4">
        <select
          value={frequency}
          onChange={(e) => setFrequency(e.target.value)}
          className="p-3 rounded-lg border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        >
          {frequencies.map((freq) => (
            <option key={freq} value={freq}>
              {freq.charAt(0).toUpperCase() + freq.slice(1)}
            </option>
          ))}
        </select>

        <input
          type="number"
          min="1"
          value={interval}
          onChange={(e) => setInterval(parseInt(e.target.value))}
          className="p-3 rounded-lg border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          placeholder="Every X units"
        />
      </div>
    </div>
  );
}

export default RecurrenceOptions;

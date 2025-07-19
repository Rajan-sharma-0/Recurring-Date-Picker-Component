import React from "react";
import { useRecurrenceStore } from "../store/useRecurrenceStore";

function IntervalInput() {
  const { interval, setInterval } = useRecurrenceStore();

  return (
    <div className="mb-4">
      <h2 className="text-lg font-semibold mb-2">Interval</h2>
      <input
        type="number"
        value={interval}
        min={1}
        onChange={(e) => setInterval(Number(e.target.value))}
        className="border p-2 rounded-md w-full"
      />
    </div>
  );
}

export default IntervalInput;
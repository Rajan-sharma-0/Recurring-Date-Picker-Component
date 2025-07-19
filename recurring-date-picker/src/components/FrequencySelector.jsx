import { useRecurrenceStore } from "../store/useRecurrenceStore.js";

function FrequencySelector() {
  const { frequency, setFrequency } = useRecurrenceStore();

  return (
    <div className="mb-4">
      <h2 className="text-lg font-semibold mb-2">Select Frequency</h2>
      <select
        value={frequency}
        onChange={(e) => setFrequency(e.target.value)}
        className="border p-2 rounded-md w-full"
      >
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
      </select>
    </div>
  );
}

export default FrequencySelector;
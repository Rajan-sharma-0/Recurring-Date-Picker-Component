import React from "react";
import FrequencySelector from "./components/FrequencySelector";
import DateRangePicker from "./components/DateRangePicker";
import CalendarPreview from "./components/CalendarPreview";

function App() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg w-full max-w-2xl mx-auto mt-10 animate-fade-in">
      <h1 className="text-2xl font-extrabold mb-4 text-center text-blue-700">Recurring Date Picker</h1>
      <FrequencySelector />
      <DateRangePicker />
      <CalendarPreview />
    </div>
  );
}

export default App;
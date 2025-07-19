// src/App.jsx
import React from "react";
import RecurrenceOptions from "./components/RecurrenceOptions";
import DateRangePicker from "./components/DateRangePicker";
import CalendarPreview from "./components/CalendarPreview";

function App() {
  return (
    <div className="min-h-screen bg-[#D7F0EE] from-blue-100 to-purple-200 p-6 font-sans">
      <div className="max-w-3xl mx-auto bg-white shadow-2xl rounded-3xl p-8 animate-fade-in-up transition-all duration-700">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6 tracking-wide">
          🌟 Recurring Date Picker
        </h1>
        <RecurrenceOptions />
        <DateRangePicker />
        <CalendarPreview />
      </div>
    </div>
  );
}

export default App;

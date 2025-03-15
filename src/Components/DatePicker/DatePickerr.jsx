import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CalendarIcon } from "lucide-react";
export default function DatePickerr({ label, icon }) {
  const [startDate, setStartDate] = useState(null);
  return (
    <>
      <label className="flex items-center space-x-2 text-gray-700 font-medium">
        {icon}
        <span>{label}</span>
      </label>

      {/* DatePicker Container */}
      <div className="relative w-full">
        <DatePicker
          selected={startDate}
          
          onChange={(date) => setStartDate(date)}
          placeholderText={`${label}`}
          className="w-full  block p-2 my-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-mainColor focus:border-mainColor dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
    </>
  );
}
/* w-[502.5%] */
import { useState, useEffect } from "react";

const GenderSelect = ({ onSave }) => {
  const [selected, setSelected] = useState("");

  const handleSave = () => {
    if (!selected) return;
    if (onSave) onSave(selected);
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-gradient-to-br from-[#000000c4] via-[#2686f7] to-[#fe5a59]">
      <div className="w-11/12 max-w-sm bg-white rounded-2xl shadow-2xl p-6 text-center animate-[fadeIn_0.4s_ease-in-out] overflow-hidden relative">
        <button className="absolute top-1 right-1 px-3 py-1 bg-red-500 text-white rounded hover:cursor-pointer">
          ✖
        </button>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Select Your Gender
        </h2>

        <div className="flex justify-center items-center h-20 gap-6 ">
          <button
            onClick={() => setSelected("male")}
            className={`rounded-xl border-2 text-lg font-medium transition-all duration-200 w-30 h-10 cursor-pointer ${
              selected === "male"
                ? "border-blue-500 bg-blue-100 text-blue-600 scale-105 shadow-md"
                : "border-gray-300 text-gray-700 hover:border-blue-400 hover:bg-blue-50"
            }`}
          >
            👨 Male
          </button>

          <button
            onClick={() => setSelected("female")}
            className={`rounded-xl border-2 text-lg w-30 h-10 font-medium transition-all duration-200 cursor-pointer ${
              selected === "female"
                ? "border-pink-500 bg-pink-100 text-pink-600 scale-105 shadow-md"
                : "border-gray-300 text-gray-700 hover:border-pink-400 hover:bg-pink-50"
            }`}
          >
            👩 Female
          </button>
        </div>

        <button
          onClick={handleSave}
          disabled={!selected}
          className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 cursor-pointer ${
            selected
              ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-md hover:shadow-lg hover:scale-[1.02]"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default GenderSelect;

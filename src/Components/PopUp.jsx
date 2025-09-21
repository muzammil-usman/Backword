import { memo } from "react";

const Popup = ({ message, onClose }) => {
  console.log("popup component");

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-[#000000c4] via-[#2686f7] to-[#fe5a59] bg-opacity-40 z-50">
      <div className="bg-white p-6 rounded-2xl shadow-xl text-center w-72 animate-scaleIn">
        <h2 className="text-lg font-semibold mb-2 text-red-500">⚠️ Alert</h2>
        <p className="text-gray-600 mb-4">{message}</p>
        <button
          onClick={onClose}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default memo(Popup);
